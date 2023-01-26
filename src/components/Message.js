function Message(props) {
    return (
        <div className="chat">
            <div className="message-sender">
                <p><strong>{props.sender}</strong> says...</p>
            </div>
            <div className="message-body">
                <p>{props.message}</p>
            </div>
        </div>
    );   
}

export default Message;