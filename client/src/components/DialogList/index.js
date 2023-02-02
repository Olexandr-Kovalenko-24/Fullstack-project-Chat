import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './DialogList.module.css';
import {getAllUserChats} from '../../api/index'

const DialogList = () => {

    const [list, setList] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     getAllUserChats()
    //     .then(({data: {data}}) => {
    //         setList(data);
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         navigate('/');
    //     })
    // }, []);

    const mapList = (chat) => <li key={chat._id}>{chat.name}</li>

    return (
        <div className={styles.dialog}>
            <ul>
                {list && list.map(mapList)}
            </ul>
        </div>
    );
}

export default DialogList;
