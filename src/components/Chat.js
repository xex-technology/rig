import { useState, useEffect } from 'react';
import Message from './Message';

function Chat(props) {
    const [message, setMessage] = useState([]);

    const getMessages = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/messages')
         .then(function(response){
            return response.json();
         })
         .then(function(messageJson) {
            setMessage(messageJson.Items);
         });
    }

    const postMessages = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/messages', {
            method: 'POST',
            body: JSON.stringify({
                Id: (message.length++).toString(),
                Timestamp: (Math.floor(Date.now() / 1000)).toString(),
                From: props.username,
                Message: document.getElementById("message-box").value
            })
        })
    }

    useEffect(()=>{
        getMessages()
    },[])

    const listMessages = message.slice(0).reverse().map((item, x) => 
        <Message key={x} sender={item.from.S} message={item.message.S}></Message>
    )

    return (
        <div className="chat-list">
            <h3 className="messages-heading">👋 Hello {props.username}</h3>
            {message && listMessages}
            <div className="send-dialog">
                <input type="text" className="message-box" id="message-box" placeholder="Type something here"></input>
                <button class="btn btn-secondary" type="button" id="send-message-btn" onClick={postMessages}>Send</button>
            </div> 
        </div>
        
    );
}

export default Chat;