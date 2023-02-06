import React from 'react';
import styles from './Dialog.module.css';
import { connect } from 'react-redux';
import { setCurrentChatAction } from '../../../actions/actionCreators';
import cx from 'classnames';

const Dialog = (props) => {

    const clickHandler = () => {
        if(props.currentChat !== props.id){
            props.setCurrentChat(props.id);
        }
    }

    const cn = cx(styles.dialog, {
        [styles['dialog-current']]: props.currentChat === props.id,
    })

    return (
        <div className={cn} onClick={clickHandler}>
            <div>{props.name}</div>
        </div>
    );
}

const mapStateToProps = ({ currentChat }) => ({ currentChat });

const mapDispatchToProps = {
    setCurrentChat: setCurrentChatAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
