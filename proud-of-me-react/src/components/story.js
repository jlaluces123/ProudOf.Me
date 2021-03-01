import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCurrentUser } from './hooks/useCurrentUser';
import Back from './icons/back';
import Book from './icons/book';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useLastLocation } from 'react-router-last-location';

// TODO: Handle small chance where momentID is undefined
const Story = () => {
    const momentId = window.location.pathname.split('/')[4];
    const currentUser = useCurrentUser(window.location.pathname);
    const lastLocation = useLastLocation();
    const [story, setStory] = useState({});
    const [author, setAuthor] = useState({});
    const [loading, setLoading] = useState(true);

    const getStory = async (momentId) => {
        await axios
            .get(
                `https://proud-of-me-backend.herokuapp.com/api/moments/${momentId}`
            )
            .then((res) => {
                console.log(res.data.moment);
                setStory(res.data.moment);
                getAuthorInfo(res.data.moment.userId);
            })
            .catch((err) => console.error(err));
    };

    const getAuthorInfo = async (userId) => {
        console.log('Getting author info...');
        await axios
            .get(`https://proud-of-me-backend.herokuapp.com/api/user/${userId}`)
            .then((author) => {
                console.log('Author Info Found: ', author);
                setAuthor(author.data.userFound);
            })
            .catch((err) => {
                console.log('Error getting author info: ');
                console.error(err);
            });
    };

    useEffect(async () => {
        await getStory(momentId);
    }, []);

    // * TODO [Fixed for now (03/01/2021)]: fix fetching currentUser before render
    // * Used loading === false && currentUser to prevent render before data is fetched

    useEffect(() => {
        console.log('currentUser was changed: ', currentUser);
        setLoading(false);
    }, [currentUser]);

    if (loading === false && currentUser) {
        return (
            <div className='bg-white min-h-screen'>
                <div>
                    <header className='flex flex-row justify-between items-center h-10 border-b py-8 px-4'>
                        {/* //TODO: Set up Back Button */}
                        <Link
                            to={
                                lastLocation
                                    ? lastLocation
                                    : `/user/${currentUser._id}/feed`
                            }
                        >
                            <Back />
                        </Link>
                        <Link
                            className='flex flex-row items-center hover:underline cursor-pointer'
                            to={`/user/${currentUser._id}/feed`}
                        >
                            <span className='mr-1 text-sm text-gray-700'>
                                Back to Feed
                            </span>
                        </Link>
                    </header>

                    <section className='px-6 pt-6 flex flex-col justify-evenly'>
                        <h1 className='text-3xl font-bold'>
                            Title Hello World
                        </h1>
                        <div className='my-4 flex flex-row items-center w-full'>
                            <img
                                className='h-6 w-6 mr-2 rounded-full'
                                src={author.photo}
                                alt={`Profile Picture of ${author.username}`}
                            />
                            <span className='text-sm font-medium'>
                                <Link
                                    className='cursor-pointer hover:underline text-green-500'
                                    to={`/${currentUser._id}/profile/${author._id}`}
                                >
                                    {author.username}
                                </Link>
                                <span className='text-gray-400 text-sm font-light'>
                                    {' '}
                                    • {moment(story.createdAt).format('ll')}
                                </span>
                            </span>
                        </div>

                        <article className='mt-2 font-serif leading-relaxed'>
                            <p className='whitespace-pre-wrap'>{story.story}</p>
                        </article>
                    </section>
                </div>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

export default Story;
