import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sandwich from './icons/sandwich';

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [googleId, setGoogleId] = useState('');
    const [home, setHome] = useState(false);

    useEffect(() => {
        let url = window.location.pathname;
        if (url === '/') {
            // AKA Home Page (Signed Out)
            setHome(true);
        } else {
            url.split('/');
            setGoogleId(url.split('/')[2]);
            setHome(false);
        }
    }, []);

    useEffect(() => {
        console.log('Google Id: ', googleId);
    }, [googleId]);

    return (
        <nav className='flex items-center bg-gray-700 p-4 flex-wrap fixed w-full'>
            <Link
                to={home === true ? `/` : `/user/${googleId}`}
                className='text-white text-lg font-semibold tracking-wide cursor-pointer'
            >
                {googleId ? 'ProudOf.You' : 'ProudOf.Me'}
            </Link>
            <button
                onClick={(e) => setOpen(!open)}
                className='text-white focus:outline-none ml-auto lg:hidden'
            >
                <Sandwich />
            </button>

            {/* Buttons section */}
            <div className='w-full flex flex-grow lg:justify-end lg:w-auto'>
                <div
                    className={
                        open
                            ? 'text-white h-auto flex flex-col w-full lg:flex-row'
                            : 'text-white h-auto hidden lg:flex lg:justify-end'
                    }
                >
                    {home === true ? (
                        <a
                            href='https://proud-of-me-backend.herokuapp.com/api/auth/google'
                            className='font-medium text-lg mt-4 mb-2 lg:mb-0 lg:font-normal lg:text-sm lg:mt-0 lg:ml-4'
                        >
                            <span>Get Started</span>
                        </a>
                    ) : (
                        <div className='flex flex-col md:flex-row md:flex-grow md:justify-end'>
                            <Link
                                to={`/user/${googleId}`}
                                className='font-medium text-lg mt-4 mb-2 lg:mb-0 lg:font-normal lg:text-sm lg:mt-0 lg:ml-4'
                            >
                                <span>Home</span>
                            </Link>
                            <Link
                                to={`/user/${googleId}/feed`}
                                className='font-medium text-lg my-2 lg:my-0 lg:font-normal lg:text-sm lg:mt-0 lg:ml-4'
                            >
                                <span>Discover</span>
                            </Link>
                            <Link
                                to={`/user/${googleId}/moments`}
                                className='font-medium text-lg my-2 lg:my-0 lg:font-normal lg:text-sm lg:mt-0 lg:ml-4'
                            >
                                <span>Create</span>
                            </Link>
                            <Link
                                to='/'
                                className='font-medium text-lg my-2 lg:my-0 lg:font-normal lg:text-sm lg:mt-0 lg:ml-4'
                            >
                                <span>Sign Out</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Menu;
