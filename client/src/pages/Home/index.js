import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';


const Home = () => {
    const [view, setView] = useState(true);

    const buttonText = view ? "SignIUp" : "SignIn";

    const clickHandler = () => {setView(!view)}

    return (
        <div>
            <button onClick={clickHandler}>{buttonText}</button>
            {view ? <SignIn /> : <SignUp />}
        </div>
    );
}

export default Home;
