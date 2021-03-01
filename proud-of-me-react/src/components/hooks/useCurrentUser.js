import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentUser = (url) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(async () => {
        let userGoogleId = url.split('/')[2];

        const fetchCurrentUser = async () => {
            await axios
                .get(
                    `https://proud-of-me-backend.herokuapp.com/api/user/${userGoogleId}/google`
                )
                .then((user) => setCurrentUser(user.data.userFound))
                .catch((err) => console.error(err));
        };
        fetchCurrentUser();
    }, []);

    return currentUser;
};
