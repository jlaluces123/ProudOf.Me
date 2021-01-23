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
            let userId = id;
            await axios
                .get(
                    `https://proud-of-me-backend.herokuapp.com/api/user/${userId}`
                )
                .then((response) => {
                    if (mounted) {
                        setUser(Object.values(response.data.user)[0]);
                    }
                })
                .catch((err) => console.log(err));
        }

        getProfile();

        return () => (mounted = false);
    }, [id]);

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
