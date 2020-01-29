import React from 'react'

const Home = (props) => {
    return(
        <div className='home'>
            <h1>Welcome to webpage</h1>
            <br/>
            <div className='login-button' onClick={() => { props.history.push('/login')}}>
                Login
            </div>
        </div>
    )
};

export default Home;