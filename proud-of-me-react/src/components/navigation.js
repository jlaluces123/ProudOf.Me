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
                <div className='flex justify-between mx-6 h-20 items-center'>
                    <h1 className='text-gray-600 tracking-wide'>
                        ProudOf.
                        <span className='font-bold text-black text-lg'>
                            {props.username}
                        </span>
                    </h1>
                    <Link to='/' className='text-gray-600'>
                        Sign Out
                    </Link>
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
