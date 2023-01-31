import { useState, useEffect } from 'react';
import Message from './Message';

function Channel(props) {
    const [message, setMessage] = useState([]);

    const postMessages = () => {
        fetch('https://api.rig.dylanarmstrong.net/messages', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({
                Id: (message.length++).toString(),
                From: props.sender,
                To: props.receiver,
                Message: document.getElementById("message-box").value
            })
        })
    }

    const getMessages = () => {
        fetch('https://api.rig.dylanarmstrong.net/messages', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.REACT_APP_API_KEY
            }
        })
         .then((res) => res.json())
         .then((data) => {
            setMessage(data.Items.sort((a,b) => Number(a.id.N) - Number(b.id.N)));
        });
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            getMessages() 
        }, 1000);
        return () => clearInterval(interval);
    },[])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          postMessages();
          document.getElementById("message-box").value = 0;
        }
      };

    const listMessages = message.map((item, i) => {
        if(props.sender === item.to.S && props.receiver === item.from.S) {
            return (
                    <Message key={i} sender={item.from.S} receiver={item.to.S} message={item.message.S}></Message>
                )
            }
            else if(props.receiver === item.to.S && props.sender === item.from.S) {
                return (
                    <Message key={i} sender={item.from.S} receiver={item.to.S} message={item.message.S}></Message>
                )
            }
        }
       
    )

    return (
        <div className="channel">
            {message && listMessages}
            <input type="text" class="form-control" onKeyDown={handleKeyDown} id="message-box" placeholder="Type something here"></input>
        </div>
    )
}

export default Channel;