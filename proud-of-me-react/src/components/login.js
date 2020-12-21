import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState();

    return (
        <div>
            {user ? (
                <h1>User Found</h1>
            ) : (
                <a href='https://proud-of-me-backend.herokuapp.com/api/auth/google'>
                    Log in with Google
                </a>
            )}
        </div>
    );
};

export default Login;
