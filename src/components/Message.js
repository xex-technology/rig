function Message(props) {
    return (
        <div className="chat">
            <div class="shadow card">
                <div class="card-header">
                    <strong>{props.sender}</strong>
                </div>
                <div class="card-body">
                    <p class="card-text">{props.message}</p>
                </div>
            </div>
        </div>
    );   
}

export default Message;