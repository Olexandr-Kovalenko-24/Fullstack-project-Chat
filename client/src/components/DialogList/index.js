import React, { useEffect } from 'react';
import styles from './DialogList.module.css';
import { connect } from 'react-redux';
import { getUserChatsAction } from '../../actions/actionCreators';

const DialogList = (props) => {

    useEffect(() => {
        props.getUserChats();
    }, []);

    const mapList = (chat) => <li key={chat._id}>{chat.name}</li>

    return (
        <div className={styles.dialog}>
            <ul>
                {props.chatList && props.chatList.map(mapList)}
                {props.error && <div>{props.error}</div>}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ chatList, error, currentChat }) => ({ chatList, error, currentChat });

const mapDispatchToProps = {
    getUserChats: getUserChatsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);
