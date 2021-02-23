import React, { useState, useEffect } from 'react';
import { Heart } from './icons';

const SkeletonFeedCard = () => {
    return (
        <div className='animate-pulse bg-white flex flex-col h-60 justify-between my-4 pt-4 px-4 shadow-md w-full'>
            <header className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <div>
                        <div className='bg-gray-300 h-10 w-10 rounded-full' />
                    </div>
                    <div className='bg-gray-300 font-bold h-4 ml-2 rounded text-gray-800 w-1/3' />
                </div>
                <span className='bg-gray-300 font-semibold h-4 rounded text-gray-400 text-xs tracking-wider w-1/6' />
            </header>

            <section className='flex flex-col justify-between max-h-32 h-full'>
                <div className=''>
                    <h4 className='bg-gray-300 font-semibold h-6 rounded text-gray-700 text-lg w-2/3' />
                    <p className='bg-gray-300 font-semibold h-4 line-clamp-3 mt-4 rounded text-gray-400' />
                </div>

                <span className='bg-gray-300 font-bold h-4 rounded text-green-600 w-1/30' />
            </section>

            <footer className='border-gray border-t-2 flex flex-row justify-between items-center py-2'>
                <span className='bg-gray-300 font-bold h-3 rounded text-gray-800 text-sm tracking-tight w-1/3' />

                <div>
                    <button className='focus:outline-none h-4 w-4 rounded-full bg-gray-300' />
                </div>
            </footer>
        </div>
    );
};

export default SkeletonFeedCard;
