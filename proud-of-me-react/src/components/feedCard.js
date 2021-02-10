import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Chat, Heart, Bookmark } from './icons/index';
import moment from 'moment';
import axios from 'axios';

const FeedCard = ({
    _id,
    createdAt,
    updatedAt,
    title,
    story,
    userId,
    photo,
    likes,
    usersWhoLiked,
}) => {
    const [user, setUser] = useState({});
    const [likesCopy, setLikesCopy] = useState(likes);

    const getUserData = (userId) => {
        axios
            .get(`http://localhost:3388/api/users/find/${userId}`)
            .then((data) => setUser(data.data))
            .catch((err) => console.error(err));
    };

    const handleLikeClick = (e, momentId) => {
        e.preventDefault();

        // Check if user is in usersWhoLiked array (aka. they already liked, now unliking post)
        if (usersWhoLiked.includes(userId)) {
            axios
                .post(`http://localhost:3388/api/moments/${momentId}/likes`, {
                    action: 'unlike',
                    userId,
                })
                .then((response) => {
                    console.log('Unliking post');
                    setLikesCopy(likesCopy - 1);
                })
                .catch((err) => console.error(err));
        } else {
            axios
                .post(`http://localhost:3388/api/moments/${momentId}/likes`, {
                    action: 'like',
                    userId,
                })
                .then((response) => {
                    console.log(`User: ${userId} liked post #${momentId}`);
                    setLikesCopy(likesCopy + 1);
                })
                .catch((err) => console.error(err));
        }
    };

    useEffect(() => {
        getUserData(userId);
    }, []);

    return (
        <div className='bg-white flex flex-col h-60 justify-between my-4 pt-4 px-4 shadow-md w-full'>
            <header className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <div>
                        {user.photo ? (
                            <img
                                className='h-10 w-10 rounded-full'
                                src={`${user.photo}`}
                                alt='User Profile Picture'
                            />
                        ) : (
                            <div className='bg-blue-200 h-10 w-10 rounded-full' />
                        )}
                    </div>
                    <Link
                        to={`/profile/${userId}`}
                        className='font-bold ml-2 text-gray-800'
                    >
                        {user.username}
                    </Link>
                </div>
                <span className='text-gray-400 text-xs font-semibold tracking-wider'>
                    {moment(createdAt).fromNow()}
                </span>
            </header>

            <section className='flex flex-col justify-between max-h-32 h-full'>
                <div className=''>
                    <h4 className='font-semibold text-gray-700 text-lg'>
                        {title}
                    </h4>
                    <p className='font-semibold text-gray-400 line-clamp-3'>
                        {story}
                    </p>
                </div>
                <span className='font-bold text-green-600'>
                    # TagsComingSoon!
                </span>
            </section>

            <footer className='border-gray border-t-2 flex flex-row justify-between py-2'>
                <span className='font-bold text-gray-800 text-sm tracking-tight'>
                    {likesCopy !== 1
                        ? `${likesCopy} likes`
                        : `${likesCopy} like`}
                </span>
                <div className='flex flex-row justify-end w-1/3'>
                    <button
                        className='focus:outline-none'
                        onClick={(e) => handleLikeClick(e, _id)}
                    >
                        <Heart />
                    </button>
                </div>
            </footer>
        </div>
    );
};
export default FeedCard;
