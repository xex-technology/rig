import { useState, useEffect } from 'react';
import Message from './Message';

function Chat() {

    const [message, setMessage] = useState([]);
    const postMessages = () => {
        alert("To be implemented. Button clicked.")
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

            <textarea placeholder="Type something here"></textarea>
            <button type="button" onClick={postMessages}>Send</button>
        </div>
        
    );
}

export default Chat;