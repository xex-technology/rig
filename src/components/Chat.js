import { useState, useEffect } from 'react';
import Channel from './Channel';

function Chat(props) {
    const [friends, setFriends] = useState([]);
    const [selectedUser, setSelectedUser] = useState(false);

    const getUsers = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/login')
         .then((res) => res.json())
         .then((data) => {
            setFriends(data.Items);
            setSelectedUser(true);
        });    
    }

    const listUsers = friends.map((item, i) => 
        <option key={i} value={item.username.S}>{item.username.S}</option>
    )

    useEffect(() => {
        const interval = setInterval(() => {
            getUsers() 
        }, 1000);
        return () => clearInterval(interval);
    },[])

    return (
        <div className="chat-list">
            <h3 className="messages-heading">👋 Hello {props.username}</h3>
            {selectedUser && <Channel sender={props.username} receiver={document.getElementById("send-to").value}></Channel>}
            <div className="send-dialog">
                <p>Send to</p>
                <select id="send-to">
                    {friends && listUsers}
                </select>
            </div> 
        </div>
    );
}

export default Chat;