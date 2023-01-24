import { useState, useEffect } from 'react';
import Message from './Message';

function Chat() {

    const [message, setMessage] = useState([]);

    const postMessages = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/messages', {
            method: 'POST',
            body: JSON.stringify({
                Sender: process.env.sender,
                Message: document.getElementById("message-box").value
            })
        })
    }

    const getMessages = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/messages')
        
         .then(function(response){
            console.log(response);
            return response.json();
         })
         .then(function(messageJson) {
            console.log(messageJson);
            setMessage(messageJson.Items);
         });
    }

    useEffect(()=>{
        getMessages()
    },[])
    
    const listMessages = message.map((item, index) => 
        <Message key={index} sender={item.sender.S} message={item.message.S}></Message>
    )

    return (
        <div className="chat-list">
            {message && listMessages}

            <input type="text" id="message-box" placeholder="Type something here"></input>
            <button type="button" onClick={postMessages}>Send</button>
        </div>
        
    );
}

export default Chat;