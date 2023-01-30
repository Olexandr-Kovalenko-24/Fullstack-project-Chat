import React, {useEffect, useState} from 'react';
import styles from './DialogList.module.css';
import {getAllUserChats} from '../../api/index'

const DialogList = () => {

    const [list, setList] = useState(null);

    useEffect(() => {
        getAllUserChats()
        .then(({data: {data}}) => {
            setList(data);
        });
    }, []);

    const mapList = (chat) => <li>{chat.name}</li>

    return (
        <div className={styles.dialog}>
            <ul>
                {list && list.map(mapList)}
            </ul>
        </div>
    );
}

export default DialogList;
