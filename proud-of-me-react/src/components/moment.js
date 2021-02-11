import React, { useState, useEffect } from 'react';

/*

    Props needed:
        1. Title
        2. Story

    These props will be passed down 
    in MomentList's .map(title, story)

*/

const Moment = (props) => {
    useEffect(() => {
        // generateGradient();
    }, []);

    return (
        <div className='shadow-md w-49 mb-4 border rounded-lg'>
            <div className='flex items-center bg-gray-300 h-32 pl-4 truncate rounded-t-lg'>
                {/* Story summary here */}
                <p>{props.story}</p>
            </div>

            <div className='p-2'>
                {/* Title Here */}
                <h1>{props.title.toLowerCase()}</h1>
            </div>
        </div>
    );
};

export default Moment;
