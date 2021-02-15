import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../assets/custom.css';

const MomentForm = () => {
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [id, setId] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    useEffect(() => {
        let url = window.location.pathname;
        url.split('/');
        setId(url.split('/')[2]);
    }, []);

    useEffect(() => {
        console.log('Is Public: ', isPublic);
    }, [isPublic]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                `https://proud-of-me-backend.herokuapp.com/api/user/${id}/moments`,
                {
                    title,
                    story,
                    public: isPublic,
                }
            )
            .then((data) => {
                console.log(data);
                window.location = `/user/${id}`;
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className='mx-6 lg:flex lg:flex-col lg:h-screen lg:items-center lg:justify-center'>
            <form action='POST' onSubmit={(e) => handleSubmit(e)}>
                {/* X Button */}
                <section className='flex items-center justify-end pt-6'>
                    <Link to={`/user/${id}/`}>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            ></path>
                        </svg>
                    </Link>
                </section>
                {/* Remind yourself... */}
                <section className='w-4/6 my-6'>
                    <h1 className='font-bold capitalize text-3xl'>
                        remind yourself why you're great.
                    </h1>
                </section>

                {/* Title Section */}
                <section className='w-full my-6 flex flex-col'>
                    <h1 className='mb-2 font-bold capitalize text-xl'>
                        give yourself victory a title
                    </h1>
                    <input
                        autoComplete='off'
                        className='bg-gray-200 rounded placeholder-gray-400 p-2 text-gray-700'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        name='title'
                        placeholder='Got my first job!'
                    />
                </section>
                {/* Story Section */}
                <section className='my-6 flex flex-col'>
                    <h1 className='mb-2 font-bold capitalize text-xl'>
                        tell the tale
                    </h1>
                    <textarea
                        rows='4'
                        cols='50'
                        placeholder='After 80+ applications and 999 rejections...'
                        className='h-auto resize-none bg-gray-200 rounded placeholder-gray-400 p-2 text-gray-700'
                        type='text'
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        name='story'
                    />
                </section>

                <div className='my-4 flex flex-row w-full items-center justify-between'>
                    <div className='flex flex-col w-2/3'>
                        <label
                            htmlFor='collab-switch'
                            className='block text-md font-medium text-gray-700 mb-1'
                        >
                            Public
                        </label>
                        <p className='text-sm text-gray-600'>
                            Allow other users to read your stories to get
                            inspired!
                        </p>
                    </div>

                    <label id='collab-switch' className='switch'>
                        <input
                            className='switch-input'
                            type='checkbox'
                            onClick={(e) => setIsPublic(!isPublic)}
                        />
                        <span className='slider round'></span>
                    </label>
                </div>

                <button
                    className='p-2 bg-green-500 rounded text-white'
                    onSubmit={(e) => handleSubmit(e)}
                >
                    I am a champion.
                </button>
            </form>
        </div>
    );
};

export default MomentForm;
