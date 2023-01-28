function Message(props) {
    return (
        <div className="chat">
            <p>{props.id}</p>
            <div className="message-sender">
                <p><strong>{props.sender}</strong> says to <strong>{props.receiver}</strong>...</p>
            </div>
            <div className="message-body">
                <p>{props.message}</p>
            </div>
        </div>
    );   
}

export default Message;