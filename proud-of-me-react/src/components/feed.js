import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedCard from './feedCard';

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
            .then((data) => setStories(data.data.moments.reverse()))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getFeedData();
    }, []);

    useEffect(() => console.log('Stories Changed: ', stories), [stories]);

    return (
        <div>
            <section className='bg-white flex font-bold h-16 items-center justify-center my-2 text-gray-800 text-lg tracking-wide uppercase'>
                <h1>Discover</h1>
            </section>

            <section className='flex flex-col items-center'>
                {stories &&
                    stories.map((story) => {
                        // console.log('Story prop: ', story);
                        return (
                            <FeedCard
                                getFeedData={getFeedData}
                                key={story._id}
                                {...story}
                            />
                        );
                    })}
            </section>
        </div>
    );
};

export default Feed;
