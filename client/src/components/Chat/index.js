import React from 'react';
import styles from './Chat.module.css';
import { connect } from 'react-redux';

const Chat = (props) => {

    return (
        <div className={styles.chat}>
            <ul>
                {props.chatList.map(msg => <li>{msg.body}</li>)}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ chatList }) => ({ chatList });

export default connect(mapStateToProps)(Chat);
