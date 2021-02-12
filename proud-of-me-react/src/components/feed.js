import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedCard from './feedCard';
import Home from './icons/home';
import Menu from './menu';

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
            <Menu />

            <section className='flex flex-col items-center pt-20'>
                <h1 className='font-semibold text-2xl text-center text-gray-700 tracking-wide uppercase w-full'>
                    Discover
                </h1>
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
