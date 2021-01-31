import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navigation from './navigation';
import Mantra from './mantra';
import { Link } from 'react-router-dom';
import MomentList from './momentList';

const Profile = () => {
    const [id, setId] = useState();
    const [user, setUser] = useState();
    const [moments, setMoments] = useState();

    useEffect(() => {
        let url = window.location.pathname;
        url.split('/');
        let userId = url.split('/')[2];
        let mounted = true;

        async function getProfile() {
            console.log(userId);

            await axios
                .all([
                    axios.get(`http://localhost:3388/api/user/${userId}`),
                    axios.get(
                        `http://localhost:3388/api/user/${userId}/moments`
                    ),
                ])
                .then(
                    axios.spread((resOne, resTwo) => {
                        console.log('Respone One: ', resOne);
                        console.log('Response Two: ', resTwo);

                        if (mounted) {
                            console.log('mounted');
                            console.log(resOne.data.user);
                            setUser(resOne.data.user);
                            setMoments(resTwo.data);
                        }
                    })
                )
                .catch((errors) => console.log('Errors: ', errors));
        }

        getProfile();

        return () => (mounted = false);
    }, []);

    useEffect(() => {
        console.log('User object updated: ', user);
    }, [user]);

    return (
        <div>
            {user ? (
                <div>
                    <Navigation user={user} username={user.username} />
                    <Mantra userId={user.googleId} />
                    <Link to={`/user/${user.googleId}/moments`}>
                        Record Your Victory
                    </Link>
                    <MomentList moments={moments} />
                </div>
            ) : (
                <h1>No User Found Yet</h1>
            )}
        </div>
    );
};

export default Profile;
