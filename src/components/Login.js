import { useState, useEffect } from 'react';
import Chat from './Chat';

function Login() {

    const [success, setSuccess] = useState(false);
    
    const logOn = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/login', {
            method: 'POST',
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })
        }).then((res) => {
            if(res.ok) {
                console.log(res);
                setSuccess(true);
            }
        })
    }

    useEffect(()=>{
        logOn()
    })

    return (
        <div className="login-main">
            <h3>Welcome to <strong>Rig</strong>!</h3>
            <p>Please sign in below:</p>

            <input placeholder="Username" type="text" id="username"></input>
            <input placeholder="Password" type="text" id="password"></input>
            <button type="button" onClick={logOn}>Go</button>
            {success ? <Chat /> : null}
        </div>
    );
}

export default Login;