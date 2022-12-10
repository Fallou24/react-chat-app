import React from 'react';

const MessageList = () => {
    return (
        <div className='message__list'>
            <div className="message__list-container">
                <div className="message">
                    <p>
                        <img src="/img/pic.jpg" alt="" className='sender__img' /><br />
                        <span className='date'>just now</span>
                    </p>
                    <p className='message__content'>
                        <span>Lorem ipsum dolor sitdolor</span>
                        <img src="/img/pic.jpg" alt="" className='message__img' />
                    </p>
                </div>
                <div className="message current__msg" >
                    <p className='message__left'>
                        <img src="/img/pic.jpg" alt="" className='sender__img' /><br />
                        <span className='date'>just now</span>
                    </p>
                    <p className='message__content'>
                        <span>Lorem ipsum dolor sit.</span>
                        <img src="/img/pic.jpg" alt="" className='message__img' />
                    </p>
                </div>
                <div className="message">
                    <p>
                        <img src="/img/pic.jpg" alt="" className='sender__img' /><br />
                        <span className='date'>just now</span>
                    </p>
                    <p className='message__content'>
                        <span>Lorem ipsum dolor sit.</span>
                        <img src="/img/pic.jpg" alt="" className='message__img' />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessageList;