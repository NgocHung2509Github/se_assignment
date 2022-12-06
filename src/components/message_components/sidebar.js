import React from 'react'
import Navbar from './navbar'
import Chats from  './chats'
const sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Chats/>
        </div>
    )
}

export default sidebar