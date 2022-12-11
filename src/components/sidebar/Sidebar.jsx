import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase';
import ChatList from '../chatList/ChatList';
import SearchInput from '../searchInput/SearchInput';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>Chat App</h3>
                <p className='user__detail'>
                    <img src="/img/pic.jpg" alt="" className='user__img' />
                    <span>John</span>
                    <button onClick={()=>signOut(auth)}>Logout</button>
                </p>
            </div>
            <SearchInput />
            <ChatList />
        </div>
    );
};

export default Sidebar;