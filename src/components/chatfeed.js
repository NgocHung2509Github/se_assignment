import Sidebar from './message_components/sidebar'
import Chat from './message_components/chat.js'
import NavBar from './navbar';

const ChatFeed = () => {
    return (
      <>
        <NavBar />
        <div className='chatfeed'> 
            <div className="container"> 
            <Sidebar/>
            <Chat/>
            </div>
        </div>
      </>
    );
}

export default ChatFeed;
