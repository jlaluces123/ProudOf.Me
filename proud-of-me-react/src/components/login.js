import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Pencil from './icons/pencil';
import Book from './icons/book';
import Lightbulb from './icons/lightbulb';
import Menu from './menu';

const Login = () => {
    const [user, setUser] = useState();

    return (
        <div>
            {user ? (
                <h1>User Found</h1>
            ) : (
                <div>
                    <Menu />
                    <div class='container flex h-screen items-center mx-auto'>
                        <div class='items-center flex flex-wrap w-full'>
                            {/* <div class='w-full md:w-4/12 ml-auto mr-auto px-4'>
                                <img
                                    alt='...'
                                    class='max-w-full rounded-lg shadow-lg'
                                    src='https://perizazy.sirv.com/Images/proudofme_discover.png'
                                /> */}
                            {/* </div> */}
                            <div class='w-full mx-4 md:w-1/2 md:ml-auto md:mr-auto'>
                                <div class=''>
                                    <h3 class='text-3xl font-semibold'>
                                        ProudOf.Me
                                    </h3>
                                    <p class='mt-4 text-lg leading-relaxed text-gray-600'>
                                        ProudOf.Me is an achievement archive for
                                        you to record your milestones,
                                        victories, and achievements. Tell the
                                        story behind them and even share with
                                        others.
                                        <br />
                                        <br />
                                        Fostering a community of positivity,
                                        ProudOf.Me serves as a place to remind
                                        yourself why{' '}
                                        <span className='font-bold'>
                                            you are already great.
                                        </span>
                                    </p>
                                    <ul class='list-none my-4'>
                                        <li class='py-2'>
                                            <div class='flex items-center'>
                                                <div>
                                                    <span class='text-xs font-semibold inline-block p-2 uppercase rounded-full text-white bg-gray-700 mr-3'>
                                                        <Pencil />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 class='text-gray-600'>
                                                        Record your achievements
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class='py-2'>
                                            <div class='flex items-center'>
                                                <div>
                                                    <span class='text-xs font-semibold inline-block p-2 uppercase rounded-full text-white bg-gray-700 mr-3'>
                                                        <Book />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 class='text-gray-600'>
                                                        Get inspired by others'
                                                        achievements
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class='py-2'>
                                            <div class='flex items-center'>
                                                <div>
                                                    <span class='text-xs font-semibold inline-block p-2 uppercase rounded-full text-white bg-gray-700 mr-3'>
                                                        <Lightbulb />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 class='text-gray-600'>
                                                        Remind yourself why
                                                        you're great
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a
                                        className='py-2 px-8 bg-gray-700 font-medium text-white text-xl text-center rounded-lg'
                                        href='https://proud-of-me-backend.herokuapp.com/api/auth/google'
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
