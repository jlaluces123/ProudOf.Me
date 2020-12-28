import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/*
    Props Needed:
        1. User
        2. Username
*/

const Navigation = (props) => {
    return (
        <div>
            {props.user ? (
                <div>
                    <h1>ProudOf.{props.username}</h1>
                    <Link to='/'>Sign Out</Link>
                </div>
            ) : (
                <div>
                    <h1>ProudOf.Me</h1>
                    <Link to='/'>Sign Out</Link>
                </div>
            )}
        </div>
    );
};

export default Navigation;
