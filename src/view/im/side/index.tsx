import { useEffect } from 'react'
import { ReactComponent as IconMessage } from '@img/message.svg'
import { ReactComponent as Avatar1 } from '@img/avatar-1.svg'
import { ReactComponent as Avatar2 } from '@img/avatar-2.svg'


export default () => {
    return (
        <div className='im-side'>
            <h2 className='it-top'>
                <IconMessage width={24} height={24} />
                聊天
                <div className='it-top-right'>
                </div>
            </h2>
            <div className='it-scroller'>
                <ul className='im-user-list'>
                    <li className='choose'>
                        <div className='it-avatar'>
                            <Avatar1 />
                        </div>
                        <div className='it-content'>
                            <span className='it-user'>大朗吃药了</span>
                            <p>
                                <span>出来，有找要打你.叶地歌城要地厅需要地厅需要需要</span>
                                <label>18:22</label>
                            </p>
                        </div>
                    </li>
                    {
                        new Array(15).fill(1).map((it, index) => {
                            return (
                                <li key={index}>
                                    <div className='it-avatar'>
                                        <Avatar2 />
                                    </div>
                                    <div className='it-content'>
                                        <span className='it-user'>佛山无影大蒜</span>
                                        <p>
                                            <span>出来，有找要打你.</span>
                                            <label>2021-08-22</label>
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}