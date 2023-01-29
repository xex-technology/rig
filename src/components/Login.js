import { useState } from 'react';
import Chat from './Chat';

function Login() {
    const [success, setSuccess] = useState(false);
    const [login, showLogin] = useState(true);

    const logOn = () => {
        fetch('https://api.rig.dylanarmstrong.net/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })
        }).then((res) => {
            if(res.ok) {
                showLogin(false);
                setSuccess(true);
            }
        })
    }
    const loginForm = (
        <div className="login-main">
            <h3>Welcome to <strong>Rig</strong>!</h3>
            <p>Please sign in below to get talking:</p>

            <input placeholder="Username" type="text" id="username"></input>
            <input placeholder="Password" type="password" id="password"></input>
            <br></br>
            <button id="button-logon" class="btn btn-dark" type="button" onClick={logOn}>Go</button>
            <div className="copyright">
                &copy; Dylan Armstrong 2023
            </div>
        </div>
    )

    return (
         <div>
            {login && loginForm}
            {success && <Chat username={document.getElementById("username").value} /> }
         </div>  
    );
}

export default Login;