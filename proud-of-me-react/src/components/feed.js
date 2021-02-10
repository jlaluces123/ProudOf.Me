import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedCard from './feedCard';
import Home from './icons/home';

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

    return (
        <div>
            <section className='bg-white border-b fixed flex font-bold h-16 items-center justify-between left-0 px-6 shadow-lg text-gray-800 text-lg top-0 tracking-wide uppercase w-full'>
                <div>
                    <Home />
                </div>
                <h1>Discover</h1>
                <div className='w-6 h-6' />
            </section>

            <section className='flex flex-col items-center mt-16'>
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
