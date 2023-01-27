import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css';


const Home = (props) => {
    const [view, setView] = useState(true);
    const navigate = useNavigate();

    const sendApiRequest = (response) => {
        response.then(({data: {data}}) => {
            console.log(data);
            props.sendData(data);
            navigate('/messenger');
        });
    }

    const buttonText = view ? "SignIUp" : "SignIn";

    const clickHandler = () => {setView(!view)}

    return (
        <div>
            <section className={styles['form-wrapper']}>
                <button onClick={clickHandler}>{buttonText}</button>
                {view ? <SignIn apiRequest={sendApiRequest}/> : <SignUp apiRequest={sendApiRequest} />}
            </section>
        </div>
    );
}

export default Home;
