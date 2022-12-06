import more from '../img/more.png'
import Messages from './messages'
import Input from './input'

const chat = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>CNCR04</span>
                <div className="chatIcons">
                    <img src={more} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default chat