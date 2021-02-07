import React, { useState, useEffect } from 'react';

const Feed = () => {
    return (
        <div>
            <section className='bg-blue-200'>
                <h1>Discover</h1>
            </section>

            <section className='mx-8 flex flex-col items-center'>
                <div className='bg-red-200 m-4 w-full h-32'></div>
                <div className='bg-red-200 m-4 w-full h-32'></div>
                <div className='bg-red-200 m-4 w-full h-32'></div>
            </section>
        </div>
    );
};

export default Feed;
