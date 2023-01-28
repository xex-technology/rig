import { useState, useEffect } from 'react';
import Message from './Message';

function Chat(props) {
    const [message, setMessage] = useState([]);
    const [friends, setFriends] = useState([]);

    const getMessages = async () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/messages')
         .then((res) => res.json())
         .then((data) => {
            setMessage(data.Items.sort((a,b) => Number(a.id.N) - Number(b.id.N)));
        });
    }

    const getUsers = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/login')
         .then((res) => res.json())
         .then((data) => {
            setFriends(data.Items);
        });    
    }

    const postMessages = async () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/messages', {
            method: 'POST',
            body: JSON.stringify({
                Id: (message.length++).toString(),
                Timestamp: (Math.floor(Date.now() / 1000)).toString(),
                From: props.username,
                To: document.getElementById("send-to").value,
                Message: document.getElementById("message-box").value
            })
        })
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            getMessages() 
        }, 1000);
        return () => clearInterval(interval);
    },[])

    useEffect(() => {
        getUsers()
    }, [])

    const listMessages = message.map((item, i) => 
        <Message key={i} sender={item.from.S} receiver={item.to.S} message={item.message.S}></Message>
    )

    const listUsers = friends.map((item, i) => 
        <option key={i} value={item.username.S}>{item.username.S}</option>
    )

    return (
        <div className="chat-list">
            <h3 className="messages-heading">👋 Hello {props.username}</h3>
            {message ? listMessages : null}
            <div className="send-dialog">
                <p>Send to... </p>
                <select id="send-to">
                    {friends && listUsers}
                </select>
                <input type="text" className="message-box" id="message-box" placeholder="Type something here"></input>
                <button class="btn btn-secondary" type="button" id="send-message-btn" onClick={postMessages}>Send</button>
            </div> 
        </div>
    );
}

export default Chat;