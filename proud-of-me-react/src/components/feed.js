import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* 
    This component will:
        - Pull /feed data from backend
        - Give title / story props to FeedCard component
            + Map through API data and return FeedCard components
*/
const Feed = () => {
    const [stories, setStories] = useState([]);

    const getFeedData = () => {
        axios
            .get('http://localhost:3388/api/users/feed')
            .then((data) => setStories(data.data.moments))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getFeedData();
    }, []);

    useEffect(() => console.log('Stories Changed: ', stories), [stories]);

    return (
        <div>
            <section className='bg-blue-200'>
                <h1>Discover</h1>
            </section>

            <section className='mx-8 flex flex-col items-center'>
                <div className='bg-red-200 m-4 w-full h-32'></div>
                <div className='bg-red-200 m-4 w-full h-32'></div>
                <div className='bg-red-200 m-4 w-full h-32'></div>
            </section>
        </div>
    );
};

export default Feed;
