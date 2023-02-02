import React, {useState} from 'react';
import styles from './MessageArea.module.css';
import {sendNewMessageAction} from '../../actions/actionCreators';
import {connect} from 'react-redux';

const MessageArea = (props) => {
    const [message, setMessage] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        props.sendMessage({body: message, chatId: props.currentChat});
    }

    const changeHandler = ({target: {value}}) => {
        setMessage(value);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={onSubmitHandler}>
                <textarea name='message' value={message} onChange={changeHandler}/>
                <button>Send</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({currentChat}) => ({currentChat});

const mapDispatchToProps = {
    sendMessage: sendNewMessageAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);
