import React, {useEffect} from 'react';
import styles from './Chat.module.css';
import { connect } from 'react-redux';
import {getChatWithMessagesAction} from '../../actions/actionCreators';

const Chat = (props) => {

    const {currentChat, messages} = props;

    useEffect(() => {
        if(currentChat){
            props.getChatWithMessages(currentChat);
        }
    }, [currentChat]);

    return (
        <div className={styles.chat}>
            <ul>
                {currentChat && messages && messages.map(msg => <li key={msg._id}>{msg.body}</li>)}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ currentChat, messages }) => ({ currentChat, messages });

const mapDispatchToProps = {
    getChatWithMessages: getChatWithMessagesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
