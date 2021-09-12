
import { useCallback, useState } from 'react'

interface Props {
    visible: boolean,
}

export default (props: Props) => {
    const {
        visible,
    } = props;

    if (visible) {
        return (
            <div className='im-tools'>
                <div className='im-tools-top'>
                    <h2>快捷工具</h2>
                </div>
            </div>

        )
    }
    return null;
}