import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import FeedCard from './feedCard';

import Plus from './icons/plus';
import Menu from './menu';

const Profile = () => {
    const [user, setUser] = useState();
    const [moments, setMoments] = useState();

    useEffect(() => {
        let url = window.location.pathname;
        url.split('/');
        let userId = url.split('/')[2];
        let mounted = true;

        async function getProfile() {
            await axios
                .all([
                    axios.get(
                        `https://proud-of-me-backend.herokuapp.com/api/user/${userId}/`
                    ),
                    axios.get(
                        `https://proud-of-me-backend.herokuapp.com/api/user/${userId}/moments`
                    ),
                ])
                .then(
                    axios.spread((resOne, resTwo) => {
                        if (mounted) {
                            setUser(resOne.data.userFound);
                            setMoments(resTwo.data.reverse());
                        }
                    })
                )
                .catch((errors) => console.log('Errors: ', errors));
        }

        getProfile();

        return () => (mounted = false);
    }, []);

    return (
        <div>
            {(user && moments) || moments === [] ? (
                <div>
                    <Menu />
                    {/* <Mantra userId={user.googleId} /> */}
                    <div className='pt-20'>
                        <Link to={`/user/${user.googleId}/moments`}>
                            <div className='cursor-pointer shadow-2xl bg-gray-700 flex font-medium items-center justify-center p-4 rounded-full text-lg text-white mx-auto  md:max-w-md lg:max-w-2xl'>
                                <Plus />
                                Record Your Victory!
                            </div>
                        </Link>
                    </div>
                    <div className='py-4'>
                        <h3 className='ml-4 text-gray-700 text-xl font-semibold text-center'>
                            Your Posts:{' '}
                        </h3>
                    </div>
                    <div className='mx-auto max-w-sm  md:max-w-md lg:max-w-2xl'>
                        {moments.map((moment) => {
                            return (
                                <FeedCard
                                    currentUser={user}
                                    key={moment._id}
                                    {...moment}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <h1>No User Found Yet</h1>
            )}
        </div>
    );
};

export default Profile;
