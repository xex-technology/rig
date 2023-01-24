function Message(props) {
    return (
        <div className="chat">
            <div className="message-sender">
                <p>{props.sender}</p>
            </div>
            <div className="message-body">
                <p>{props.message}</p>
            </div>
        </div>
    );   
}

export default Message;