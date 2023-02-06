import React, {useEffect} from 'react';
import Chat from '../../components/Chat';
import DialogList from '../../components/DialogList';
import MessageArea from '../../components/MessageArea';
import styles from './DashBoard.module.css';
import { connect } from 'react-redux';
import {getUserAction} from '../../actions/actionCreators';
import history from '../../browserHistory';


const DashBoard = (props) => {

    useEffect(() => {
        if(!props.user){
            if(localStorage.getItem('refreshToken')){
                props.getUser();
            } else {
                history.push('/')
            }
        }
    }, [props.user]);

    return (
        <main className={styles.main}>
            <DialogList />
            <section className={styles.container}>
                <Chat />
                <MessageArea />
            </section>
        </main>
    );
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
    getUser: getUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
