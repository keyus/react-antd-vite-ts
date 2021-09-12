import Side from './side'
import Main from './main'
import Tools from './tools'
import './index.less'

export default () => {
    return (
        <div className='im-layout'>
            <Side />
            <Main />
            <Tools />
        </div>
    )
}