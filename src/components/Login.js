import { useState } from 'react';
import Chat from './Chat';
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
  
  
function Login() {
    const secret_name = "/amplify/d3m6ect8gzjb2m/main/api_key";
  
    const client = new SecretsManagerClient({
        region: "ap-southeast-2",
    });
  
    let response;
  
    try {
        response = client.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
                VersionStage: "AWSCURRENT",
            })
        );
    } catch (error) {
        throw error;
    }
  
    const secret = response.SecretString;
    const [success, setSuccess] = useState(false);
    const [login, showLogin] = useState(true);
    
    const logOn = () => {
        fetch('https://api.rig.dylanarmstrong.net/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': secret
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
            <div class="shadow card">
            <h3 class="card-header">Welcome to <strong>Rig</strong></h3>
            <br></br>
            <p>Please sign in below to get talking:</p>
                <div className="card-body">
                    <input placeholder="Username" class="form-control" type="text" id="username"></input>
                    <input placeholder="Password" class="form-control" type="password" id="password"></input>
                    <br></br>
                    <button id="button-logon" class="btn btn-dark" type="button" onClick={logOn}>Login</button>
                    <button id="button-register" class="btn btn-dark" type="button" disabled>Register (coming soon)</button>
                    <div className="copyright">
                        <br></br>
                        &copy; Dylan Armstrong 2023
                    </div>
                </div>
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