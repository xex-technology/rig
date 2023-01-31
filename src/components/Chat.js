import { useState, useEffect } from 'react';
import Channel from './Channel';

function Chat(props) {
    const [friends, setFriends] = useState([]);
    const [selectedUser, setSelectedUser] = useState(false);

    const getFriends = () => {
        fetch('https://api.rig.dylanarmstrong.net/messages', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({
                username: props.username,
            })
        })
         .then((res) => res.json())
         .then((data) => {
            setFriends(data.Items);
            setSelectedUser(true);
        });    
    }

    const listFriends = friends.map((item, i) => 
        <option key={i} value={item.username.S}>{item.username.S}</option>
    )

    useEffect(() => {
        const interval = setInterval(() => {
            getFriends() 
        }, 1000);
        return () => clearInterval(interval);
    },[])

    return (
        <div className="chat-list">
            <div class="shadow card" id="navbar">
                <p>Rig v0.1.0</p><h5>Hi, {props.username}</h5>
                <br></br>
                <button id="settings" class="btn btn-dark" type="button">Friends</button>
                <br></br>
                <button id="logoff" class="btn btn-dark" type="button">Settings</button>
                <br></br>
                <button id="logoff" class="btn btn-dark" type="button">Logoff</button>
            </div>
            {selectedUser && <Channel sender={props.username} receiver={document.getElementById("send-to").value}></Channel>}
            <div className="send-dialog">
                <p>Send to</p>
                <select class="form-select" id="send-to">
                    {friends && listFriends}
                </select>
            </div> 
        </div>
    );
}

export default Chat;