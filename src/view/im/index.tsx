import { useEffect } from 'react'
import Side from './side'
import Main from './main'
import Tools from './tools'
import './index.less'
import 'emoji-mart/css/emoji-mart.css'

export default () => {
    return (
        <div className='im-layout'>
            <Side />
            <Main />
            <Tools />
        </div>
    )
}