import React, { useState } from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css';


const Home = (props) => {
    const [view, setView] = useState(true);

    const buttonText = view ? "SignIUp" : "SignIn";

    const clickHandler = () => { setView(!view) }

    return (
        <div>
            <button onClick={clickHandler}>{buttonText}</button>
            <section className={styles['form-wrapper']}>
                {view ? <SignIn /> : <SignUp />}
            </section>
        </div>
    );
}

export default Home;
