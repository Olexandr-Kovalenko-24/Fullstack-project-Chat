import React from 'react';
import Chat from '../../components/Chat';
import DialogList from '../../components/DialogList';
import MessageArea from '../../components/MessageArea';
import styles from './DashBoard.module.css';


const DashBoard = () => {
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

export default DashBoard;
