import { matchPath } from 'react-router-dom'
import { menusFlat } from '../routes'

//xhr, axios, response or fetch response
interface Response {
    headers: any,
    data: Blob,
    [key: string]: any,
}

class Util {
    reg = {
        phone: /^1[3-9]\d{9}$/,
        username: /^[a-zA-Z0-9]{6,20}$/
    }
    downloadFile = (response: Response) => {
        let filename: string;
        if (response.headers && typeof Headers !== 'undefined' && response.headers instanceof Headers) {
            filename = (response.headers as any).get('content-disposition').split('fileName=')[1];
        } else {
            filename = response.headers["content-disposition"].split("fileName=")[1];
        }
        filename = decodeURIComponent(filename);
        const url = window.URL.createObjectURL(response.data);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    matchMenus = (path: string) => {
        const res = menusFlat.filter(it => {
            return matchPath({
                path: it.match,
                caseSensitive: true,
                end: true,
            }, path);
        })
        return res.map(it=>it.url);
    }

}
export default new Util();