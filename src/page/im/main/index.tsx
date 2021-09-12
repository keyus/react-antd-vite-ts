
import Message from './message'
import Footer from './footer'

export default () => {
    return (
        <div className='im-main'>
            <div className='im-main-top'>
                <h2>大朗吃药了</h2>
            </div>
            <Message />
            <Footer />
        </div>
    )
}