import { useState, useEffect } from 'react';
import Message from './Message';

function Chat() {

    const [message, setMessage] = useState([]);

    const postMessages = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/messages', {
            method: 'POST',
            body: JSON.stringify({
                Message: document.getElementById("message-box").value
            })
        })
        setTimeout(function() {
            window.location.reload();
        }, 1500)
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
    
    const listMessages = message.map((item, x) => 
        <Message key={x} sender={item.sender.S} message={item.message.S}></Message>
    )

    return (
        <div className="chat-list">
            <h3 className="messages-heading">👋 Hello</h3>
            {message && listMessages}
            <div className="send-dialog">
                <input type="text" className="message-box" id="message-box" placeholder="Type something here"></input>
                <button class="btn btn-secondary" type="button" onClick={postMessages}>Send</button>
            </div> 
        </div>
        
    );
}

export default Chat;