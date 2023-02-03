import React from 'react';
import styles from './Chat.module.css';
import { connect } from 'react-redux';

const Chat = (props) => {

    const {currentChat} = props;

    return (
        <div className={styles.chat}>
            <ul>
                {currentChat && currentChat.messages.map(msg => <li>{msg.body}</li>)}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ currentChat }) => ({ currentChat });

export default connect(mapStateToProps)(Chat);
