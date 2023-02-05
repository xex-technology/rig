import { useState, useEffect } from 'react';
import Channel from './Channel';

function Chat(props) {
    const [friend, setFriends] = useState([]);
    const [selectedUser, setSelectedUser] = useState(false);

    const getFriends = () => {
        fetch('https://api.rig.dylanarmstrong.net/friends', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.secrets.REACT_APP_API_KEY
            },
        })
         .then((res) => res.json())
         .then((data) => {
            setFriends(data.Items);
            setSelectedUser(true);
        });    
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            getFriends() 
        }, 1000);
        return () => clearInterval(interval);
    },[])

    const listFriends = friend.map((item) => {
        if(props.username === item.username.S) {
            return (
                Object.keys(item.friends).map((key) => {
                    return (
                        Object.values(item.friends).map((value) => {
                            return (
                                Object.values(value).map((friendName) => {
                                    return (
                                        <option key={value[key]} value={friendName}>{friendName}</option>
                                    )
                                })         
                            )    
                        })      
                    )
                })
            )}
        })
        
    

    return (
        <div className="chat-list">
            <div class="shadow card" id="navbar">
                <p>Rig v0.1.0</p><h5>Hi, {props.username}</h5>
            </div>
            <div className="send-dialog">
                <select class="form-select" id="send-to">
                    {friend && listFriends}
                </select>
            </div> 
            {selectedUser && <Channel sender={props.username} receiver={document.getElementById("send-to").value}></Channel>}
        </div>
    );
}

export default Chat;