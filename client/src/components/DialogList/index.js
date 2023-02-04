import React, { useEffect } from 'react';
import styles from './DialogList.module.css';
import { connect } from 'react-redux';
import { getUserChatsAction } from '../../actions/actionCreators';
import Dialog from './Dialog';

const DialogList = (props) => {

    useEffect(() => {
        props.getUserChats();
    }, []);

    const mapList = (chat) => <Dialog key={chat._id} name={chat.name} id={chat._id}/>

    return (
        <div className={styles.dialog}>
            {props.chatList && props.chatList.map(mapList)}
            {props.error && <div>{props.error}</div>}
        </div>
    );
}

const mapStateToProps = ({ chatList, error, currentChat }) => ({ chatList, error, currentChat });

const mapDispatchToProps = {
    getUserChats: getUserChatsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);
