import React, { useState, useEffect } from 'react';
import { PlusIcon } from '../assets/index';

export function Mantra() {
    const [mantra, setMantra] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='flex my-4 items-center justify-center'>
            <input
                className='border mx-4 px-6 py-2 rounded-lg shadow w-full focus:outline-none'
                type='text'
                placeholder='What is your mantra for today?'
                value={mantra || ''}
                onChange={(e) => setMantra(e.target.value)}
            />
            <PlusIcon />
        </div>
    );
}

// export async function getStaticProps(context) {
//     const res = await fetch('http://localhost:3000/api/profile');
//     const user = await res.json();

//     return {
//         props: { user },
//     };
// }
