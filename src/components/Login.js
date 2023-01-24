import config from '../config.json';

function Login() {
    const handleClick = () => {
          const sender = document.getElementById("username").value;
          fetch('../config.json', {
            method: 'POST',
            body: JSON.stringify({
                sender: sender
            })
          })
        }

    return (
        <div className="login-main">
            <h3>Welcome to <strong>Rig</strong>!</h3>
            <p>Please enter your name below to get started:</p>

            <input type="text" id="username"></input>
            <button type="button" onClick={handleClick}>Go</button>
        </div>
    );
}

export default Login;