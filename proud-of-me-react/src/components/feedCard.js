import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from './icons/index';
import moment from 'moment';
import axios from 'axios';

// !Issue: Getting User Data for Profile is now bugged
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
    getFeedData,
    currentUser,
}) => {
    const [userCardData, setUserCardData] = useState({});
    const [liked, setLiked] = useState(false);

    const getUserDataForCard = async (userId) => {
        await axios
            .get(
                `https://proud-of-me-backend.herokuapp.com/api/users/find/${userId}`
            )
            .then((data) => {
                setUserCardData(data.data.user);
            })
            .catch((err) => console.error(err));
    };

    const handleLikeClick = async (e, momentId) => {
        e.preventDefault();

        // Check if user is in usersWhoLiked array (aka. they already liked, now unliking post)
        if (usersWhoLiked.includes(currentUser._id)) {
            await axios
                .post(
                    `https://proud-of-me-backend.herokuapp.com/api/moments/${momentId}/likes`,
                    {
                        action: 'unlike',
                        userId: currentUser._id,
                    }
                )
                .then((response) => {
                    setLiked(false);
                    getFeedData();
                })
                .catch((err) => console.error(err));
        } else {
            await axios
                .post(
                    `https://proud-of-me-backend.herokuapp.com/api/moments/${momentId}/likes`,
                    {
                        action: 'like',
                        userId: currentUser._id,
                    }
                )
                .then((response) => {
                    setLiked(true);
                    getFeedData();
                })
                .catch((err) => console.error(err));
        }
    };

    const checkUserLiked = async () => {
        if (usersWhoLiked.includes(currentUser._id)) return setLiked(true);
        return setLiked(false);
    };

    useEffect(async () => {
        checkUserLiked();
        getUserDataForCard(userId);
    }, []);

    useEffect(() => {
        checkUserLiked();
        console.log(currentUser);
    }, [currentUser]);

    return (
        <div className='bg-white flex flex-col h-60 justify-between my-4 pt-4 px-4 shadow-md w-full rounded hover:scale-110 transform duration-300 ease-in-out cursor-pointer hover:shadow-2xl'>
            <header className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <div>
                        {userCardData.photo ? (
                            <img
                                className='h-10 w-10 rounded-full'
                                src={`${userCardData.photo}`}
                                alt='User Profile Picture'
                            />
                        ) : (
                            <div className='bg-blue-200 h-10 w-10 rounded-full' />
                        )}
                    </div>
                    <Link
                        to={`/${currentUser.googleId}/profile/${userId}`}
                        className='font-bold ml-2 text-gray-800 hover:underline'
                    >
                        {userCardData.username}
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
                    {likes !== 1 ? `${likes} likes` : `${likes} like`}
                </span>

                <div
                    className={
                        window.location.pathname.split('/')[3]
                            ? 'flex flex-row justify-end w-1/3'
                            : 'hidden'
                    }
                >
                    <button
                        className='focus:outline-none'
                        onClick={(e) => handleLikeClick(e, _id)}
                    >
                        <Heart liked={liked} />
                    </button>
                </div>
            </footer>
        </div>
    );
};
export default FeedCard;
