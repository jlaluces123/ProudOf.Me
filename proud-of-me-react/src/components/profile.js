import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navigation from './navigation';
import Mantra from './mantra';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [id, setId] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        let url = window.location.pathname;
        url.split('/');
        setId(url.split('/')[2]);
    }, []);

    useEffect(() => {
        let mounted = true;
        console.log('ID has changed: ', id);
        async function getProfile() {
            console.log('Inside Get Profile: ');
            let userId = id;

            await axios
                .all([
                    axios.get(
                        `https://proud-of-me-backend.herokuapp.com/api/user/${userId}`
                    ),
                    axios.get(
                        `http://localhost:3388/api/user/${userId}/moments`
                    ),
                ])
                .then(
                    axios.spread((resOne, resTwo) => {
                        console.log('Response One: ', resOne);
                        console.log('Response Two: ', resTwo);

                        if (mounted) {
                            console.log('mounted');
                            setUser(resOne.data.user[0]);
                        }
                    })
                )
                .catch((errors) => console.log('Errors: ', errors));
        }

        getProfile();

        return () => (mounted = false);
    }, [id]);

    useEffect(() => {
        console.log('User has changed: ', user);
    }, [user]);

    return (
        <div>
            {id && user ? (
                <div>
                    <Navigation user={user} username={user.username} />
                    <Mantra userId={id} />
                    <Link to={`/user/${id}/moments`}>Record Your Victory</Link>
                </div>
            ) : (
                <h1>No User Found Yet</h1>
            )}
        </div>
    );
};

export default Profile;
