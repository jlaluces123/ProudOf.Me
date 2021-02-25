import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedCard from './feedCard';
import Back from './icons/back';
import { useLastLocation } from 'react-router-last-location';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const [otherUser, setOtherUser] = useState();
    const [user, setUser] = useState();
    const [publicPosts, setPublicPosts] = useState();
    const [loading, setLoading] = useState(true);
    const lastLocation = useLastLocation();

    const getCurrentUser = async () => {
        let url = window.location.pathname;
        url.split('/');
        let userGoogleId = url.split('/')[1];

        await axios
            .get(
                `https://proud-of-me-backend.herokuapp.com/api/user/${userGoogleId}`
            )
            .then((user) => {
                setUser(user.data.userFound);
            })
            .catch((err) => console.error(err));
    };

    const getOtherUserProfile = async () => {
        let userId = window.location.pathname.split('/')[3];
        await axios
            .get(
                `https://proud-of-me-backend.herokuapp.com/api/users/find/${userId}`
            )
            .then((user) => {
                setOtherUser(user.data.user);
                setPublicPosts(user.data.publicMoments);
            })
            .catch((err) => console.error(err));
    };

    useEffect(async () => {
        await getOtherUserProfile();
        await getCurrentUser();
        console.log('Last Location: ', lastLocation);
        setLoading(false);
    }, []);

    useEffect(() => console.log(otherUser), [otherUser]);

    useEffect(() => console.log(publicPosts), [publicPosts]);

    return (
        <div>
            {!loading ? (
                <div className='flex flex-col'>
                    <header className='flex flex-row justify-between pt-6 px-6 bg-white'>
                        <Link
                            to={
                                lastLocation
                                    ? lastLocation.pathname
                                    : `/user/${user.googleId}/feed`
                            }
                        >
                            <Back />
                        </Link>
                        <div></div>
                    </header>
                    <section className='bg-white'>
                        <div className='my-6 h-20 flex flex-col items-center justify-center'>
                            <img
                                className='capitalize rounded-full h-16 w-16 mb-2'
                                src={otherUser.photo}
                                alt={`Profile photo for ${otherUser.username}`}
                            />
                            <h1 className='capitalize font-semibold'>
                                {otherUser.username}
                            </h1>
                        </div>

                        <section className='mx-auto py-4 border-t flex flex-row justify-between w-full'>
                            <div className='mx-auto flex-auto text-center border-r'>
                                <h3 className='font-semibold text-lg'>
                                    {publicPosts.length}
                                </h3>
                                <span className='font-light text-sm text-gray-400'>
                                    Posts
                                </span>
                            </div>

                            <div className='mx-auto flex-auto text-center border-r'>
                                <h3 className='font-semibold text-lg'>TBD</h3>
                                <span className='font-light text-sm text-gray-400'>
                                    Following
                                </span>
                            </div>

                            <div className='mx-auto flex-auto text-center'>
                                <h3 className='font-semibold text-lg'>TBD</h3>
                                <span className='font-light text-sm text-gray-400'>
                                    Followers
                                </span>
                            </div>
                        </section>
                    </section>

                    <section className='my-4'>
                        {/* <h1 className='font-semibold text-md bg-white'>
                            Their Posts
                        </h1> */}
                        {publicPosts.map((post) => {
                            return (
                                <FeedCard
                                    currentUser={user}
                                    key={post._id}
                                    {...post}
                                />
                            );
                        })}
                    </section>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default UserProfile;
