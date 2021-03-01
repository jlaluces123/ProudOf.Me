import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedCard from './feedCard';
import Home from './icons/home';
import Menu from './menu';
import SkeletonFeedCard from './skeletonFeedCard';

/* 
    This component will:
        - Pull /feed data from backend
        - Give title / story props to FeedCard component
            + Map through API data and return FeedCard components
*/
const Feed = () => {
    const [stories, setStories] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const fakeArr = [1, 2];

    const getCurrentUser = async () => {
        let url = window.location.pathname;
        url.split('/');
        let userId = url.split('/')[2];

        await axios
            .get(
                `https://proud-of-me-backend.herokuapp.com/api/user/${userId}/`
            )
            .then((user) => {
                setUser(user.data.userFound);
            })
            .catch((err) => console.error(err));
    };

    const getFeedData = async () => {
        await axios
            .get('https://proud-of-me-backend.herokuapp.com/api/users/feed')
            .then((data) => setStories(data.data.moments.reverse()))
            .catch((err) => console.error(err));
    };

    useEffect(async () => {
        await getCurrentUser();
        await getFeedData();
        setLoading(false);
    }, []);

    return (
        <div>
            <Menu />

            <section className='flex flex-col items-center pt-20 mx-auto max-w-sm  md:max-w-md lg:max-w-lg'>
                <h1 className='font-semibold text-2xl text-center text-gray-700 tracking-wide uppercase w-full'>
                    Discover
                </h1>
                {!loading
                    ? stories.map((story) => {
                          // console.log('Story prop: ', story);
                          return (
                              <FeedCard
                                  currentUser={user}
                                  getFeedData={getFeedData}
                                  key={story._id}
                                  {...story}
                              />
                          );
                      })
                    : fakeArr.map((ele) => {
                          return <SkeletonFeedCard key={ele} />;
                      })}
            </section>
        </div>
    );
};

export default Feed;
