
import { useCallback, useRef } from 'react'
import { Mentions, Tooltip } from 'antd'

import { ReactComponent as IconFace } from '@img/face.svg'
import { ReactComponent as IconPicture } from '@img/picture.svg'
import { ReactComponent as IconFile } from '@img/file.svg'
import { ReactComponent as IconVideo } from '@img/video.svg'
import { ReactComponent as IconText } from '@img/text.svg'
import { ReactComponent as IconSend } from '@img/send.svg'

const { Option } = Mentions;
export default () => {

    return (
        <div className='im-main-footer'>
            <div className='it-top'>
                <span className='icon-tool'><IconFace /></span>
                <span className='icon-tool'><IconPicture /></span>
                <span className='icon-tool'><IconFile /></span>
                <span className='icon-tool'><IconVideo /></span>
                <span className='icon-tool'><IconText /></span>
            </div>

            <div className='im-input'>
                <Mentions
                    className='im-mentions'
                    autoSize={{ minRows: 3 }}
                    autoFocus
                    placement="top">
                    <Option value="afc163">afc163</Option>
                    <Option value="zombieJ">zombieJ</Option>
                    <Option value="yesmeck">yesmeck</Option>
                </Mentions>

                <div className='im-send'>
                    <Tooltip title='按Enter发送信息，Ctrl+Enter换行' placement="left"><IconSend /></Tooltip>
                </div>
            </div>
        </div>
    )
}