function Login() {

    const handleClick = () => {
          fetch("http://localhost:3000/src/config.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
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