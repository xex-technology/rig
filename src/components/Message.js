function Message(props) {
    <div className="chat">
        <div className="message-sender">
            {props.sender}
        </div>
        <div className="message-body">
            {props.message}
        </div>
    </div>
}

export default Message;