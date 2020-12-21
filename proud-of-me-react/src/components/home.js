import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile';
import Login from './login';

const Home = () => {
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState();

    return <div>{loggedIn === true ? <Profile /> : <Login />}</div>;
};

export default Home;
