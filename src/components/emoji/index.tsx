
import React from 'react';
import { Popover, Tooltip } from 'antd';
import data from './data.json'
import './index.less'

interface Props {
    children: React.ReactElement
    visible?: boolean
}

const emojiData = Object.entries(data.emojis);

const Emoji = () => {
    return (
        <ul className='emoji-wrapper'>
            {
                emojiData.map((it, index) => {
                    return (
                        <li
                            className='emoji-native'
                            key={index}
                        >
                            {/* <Tooltip title={it[0]}> */}
                                <span dangerouslySetInnerHTML={{ __html: `&#x${it[1]['b']}` }} />
                            {/* </Tooltip> */}
                        </li>
                    )
                })
            }
        </ul>
    )
}

const EmojiPicker = (props: Props): React.ReactElement => {
    const {
        children,
        visible
    } = props;

    return (
        <Popover
            content={<Emoji />}
            title={null}
            placement='top'
            overlayClassName='emoji-modal'
            trigger="click"
        >
            {children}
        </Popover>
    )
}
EmojiPicker.defaultProps = {
    visible: true,
}
export default EmojiPicker;