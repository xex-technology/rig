import { useState, useEffect } from 'react';
import Message from './Message';

function Chat() {

    const [message, setMessage] = useState([]);

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

    return (
        <div className="chat-list">
            {message && message.map((item, index) => 
                <Message key={index} sender={item.sender} message={item.message}></Message>
            )}
        </div>
        
    );
}

export default Chat;