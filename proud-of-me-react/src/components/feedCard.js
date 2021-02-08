import React, { useState, useEffect } from 'react';

const FeedCard = ({ _id, createdAt, updatedAt, title, story, userId }) => {
    useEffect(() => {}, []);

    return (
        <div className='bg-white flex flex-col h-52 justify-between my-4 pt-4 px-4 shadow-md w-full'>
            <header className='flex flex-row justify-between items-center'>
                <div className='flex flex-row'>
                    <div className='h-6 w-6 bg-blue-200 rounded-full'></div>
                    <h3 className='font-bold ml-2 text-gray-800'>{'George'}</h3>
                </div>
                <span className='text-gray-400 text-xs font-semibold tracking-wider'>
                    {'02/10/21'}
                </span>
            </header>

            <section className='flex flex-col justify-between'>
                <p className='font-semibold text-gray-500'>{story}</p>
                <span className='font-bold mt-12 text-green-600'># tags</span>
            </section>

            <footer className='border-gray border-t-2 flex flex-row justify-between py-2'>
                <span className='font-bold text-gray-800 text-sm tracking-tight'>
                    223 Likes
                </span>
                <div className='flex flex-row justify-between w-1/3'>
                    <div className='h-6 w-6 bg-blue-200 rounded-full'></div>
                    <div className='h-6 w-6 bg-blue-200 rounded-full'></div>
                    <div className='h-6 w-6 bg-blue-200 rounded-full'></div>
                </div>
            </footer>
        </div>
    );
};
export default FeedCard;
