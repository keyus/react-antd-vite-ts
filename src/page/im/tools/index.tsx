
import { useCallback, useState } from 'react'
import { Tooltip } from 'antd'
import { ReactComponent as IconNote } from '@img/note.svg'
import Tool from './tool'
import './index.less'

export default () => {
    const [visible, setVisible] = useState(false);
    const onToggleTool = useCallback(() => {
        setVisible(val => !val);
    }, []);
    return (
        <>
            <div className='im-bar'>
                <div className='it-gab it-light' onClick={onToggleTool}>
                    <Tooltip title='快捷工具' placement='bottom'>
                        <span className='it-icon icon-light'><IconNote /></span>
                    </Tooltip>
                </div>
            </div>
            <Tool visible={visible} />
        </>
    )
}