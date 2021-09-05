import store from '@store'
import { message } from 'antd'

//退出系统
const logout = () => {
    store.dispatch({ type: 'logout' })
}

message.config({
    maxCount: 1,
});

/**
 * 一个简单的fetch 封装
 */

class Http {
    private baseurl = '/api'
    private defaultHeader = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': () => localStorage.getItem('token'),
    }
    private parseUrl = (str: string): string => {
        if (str.startsWith('/')) {
            return `${this.baseurl}${str}`
        }
        return `${this.baseurl}/${str}`
    }
    private queryUrl = (url: string, data: QueryStringData): string => {
        let str: string = '?';
        if (data && typeof data === 'object') {
            Object.entries(data).forEach(it => {
                str += `${encodeURIComponent(it[0])}=${encodeURIComponent(it[1])}&`
            });
            str = str.substring(0, str.length - 1);
        }
        return `${url}${str}`;
    }
    get = (url: string, data?: QueryStringData, options: FetchOptions = {}): Promise<any> => {
        return this.send(this.queryUrl(url, data), undefined, {
            ...options,
            method: 'get',
        })
    }
    post = (url: string, data?: any, options: FetchOptions = {}): Promise<any> => {
        return this.send(url, data, {
            ...options,
            method: 'post',
        })
    }
    send = async (url: string, data: any, options?: FetchOptions) => {
        let {
            body,
            method = 'get',
            headers,
            ...props
        } = options || {};

        if (!headers) {
            headers = new Headers();
            Object.entries(this.defaultHeader).forEach(item => {
                headers.append(item[0], (typeof item[1] === 'function' ? item[1]() : item[1]) as string);
            })
            if (data && data instanceof FormData) {
                headers.delete('Content-Type');
            } else {
                data = JSON.stringify(data);
            }
        }
        if (method === 'get') data = undefined;

        return new Promise((resolve, reject) => {
            let response: any;
            fetch(
                this.parseUrl(url),
                {
                    method,
                    body: data,
                    headers,
                    ...props,
                }
            ).then(res => {
                response = res;
                if (res.ok) {
                    const cType = res.headers.get('content-type')?.toLocaleLowerCase();
                    // stream response data
                    if (['stream', 'excel', 'download', 'blob'].some(it => cType?.includes(it))) {
                        return res.blob();
                    }
                    return res.json();
                } else {
                    reject(res.statusText);
                    throw new Error(res.statusText);
                }
            }).then(res => {
                // 如果是流数据，则把响应体 headers返回
                if (res instanceof Blob) {
                    return resolve({
                        data: res,
                        headers: response.headers,
                    })
                }

                // from server data
                const {
                    code,
                    msg,
                } = res;

                // api server 约定成功code
                if (code === 200) return resolve(res);

                // 其它部分操作，并统一弹出错误 api server msg 信息
                // api server 约定未登陆、登陆过期、无权访问等退出系统 code
                if ([401, 402, 403].includes(code)) {
                    logout();
                }

                // 有些code不需要错误通知，如提示绑定手机号等 也可以移动 成功code resolve回去
                if (![1001, 1002].includes(code)) {
                    message.error(msg)
                }

                return reject(res);

            }).catch(err => {
                message.error(err.message || 'Network response was not ok.')
                reject(err);
            });
        })
    }
}


export default new Http();