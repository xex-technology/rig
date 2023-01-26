import App from '../App';

function Login() {
    const logOn = () => {
        fetch('https://mcrzg3eay0.execute-api.ap-southeast-2.amazonaws.com/dev/login', {
            method: 'POST',
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })
        }).then((res) => {
            if(res.ok) {
                
                    <App success={true} username={document.getElementById("username").value}/>
                
                
            }
        })
    }

    return (
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
    );
}

export default Login;