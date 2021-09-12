
import { ReactComponent as Avatar1 } from '@img/avatar-1.svg'
import { ReactComponent as Avatar2 } from '@img/avatar-2.svg'
import './message.less'
 
export default () => {
    return (
        <div className='im-main-message'>
            <div className='no-more'>没有更多了</div>
            <div className='it-wrapper postion-left'>
                <div className='it-layout'>
                    <div className='it-avatar'>
                        <Avatar1 />
                    </div>
                    <div className='it-content'>
                        <div className='it-text'>你好哦，云通信IM的开发者~！终于等到你了，可以在这里跟我进行消息收发测试哦！你好哦，云通信IM的开发者~！终于等到你了，可以在这里跟我进行消息收发测试哦！</div>
                        <div className='it-date'>2021-08-22 12:03</div>
                    </div>
                </div>
            </div>

            {
                new Array(8).fill(1).map((it, index) => {
                    return (
                        <div className='it-wrapper postion-right' key={index}>
                            <div className='it-layout'>
                                <div className='it-avatar'>
                                    <Avatar2 />
                                </div>
                                <div className='it-content'>
                                    <div className='it-text'>您好啊，客官！</div>
                                    <div className='it-date'>2021-08-22 12:03</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}