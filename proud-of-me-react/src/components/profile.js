import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [id, setId] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        if (!id || !user) {
            let url = window.location.pathname;
            url.split('/');
            console.log(url.split('/')[2]);
            setId(url.split('/')[2]);
        }
    }, []);

    useEffect(() => {
        console.log('ID has changed: ', id);
        async function getProfile() {
            let userId = id;
            console.log('User ID: ', userId);
            await axios
                .get(
                    `https://proud-of-me-backend.herokuapp.com/api/user/${userId}`
                )
                .then((response) => {
                    console.log(Object.values(response.data.user)[0]);
                    setUser(Object.values(response.data.user)[0]);
                })
                .catch((err) => console.log(err));
        }

        getProfile();
    }, [id]);

    return (
        <div>
            {id && user ? (
                <h1>Welcome: {user.username}</h1>
            ) : (
                <h1>No User Found Yet</h1>
            )}
        </div>
    );
};

export default Profile;
