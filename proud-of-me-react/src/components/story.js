import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCurrentUser } from './hooks/useCurrentUser';

const Story = () => {
    const momentId = window.location.pathname.split('/')[4];
    const currentUser = useCurrentUser(window.location.pathname);
    const [story, setStory] = useState('');
    const [title, setTitle] = useState('');

    const getStory = async (momentId) => {
        await axios
            .get(
                `https://proud-of-me-backend.herokuapp.com/api/moments/${momentId}`
            )
            .then((res) => {
                setTitle(res.data.moment.title);
                setStory(res.data.moment.story);
            })
            .catch((err) => console.error(err));
    };

    useEffect(async () => getStory(momentId), []);

    return <h1>Hello World</h1>;
};

export default Story;
