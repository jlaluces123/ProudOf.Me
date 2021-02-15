import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mantra = (props) => {
    const [mantra, setMantra] = useState('');

    useEffect(() => {
        axios
            .get(
                `https://proud-of-me-backend.herokuapp.com/api/user/${props.userId}/mantra`
            )
            .then((res) => {
                // res.data --> {mantra: 'some mantra'}
                if (res.data.mantra !== '') {
                    setMantra(res.data.mantra);
                }
            })
            .catch((err) => console.log('Error: ', err));
    }, []);

    // useEffect(() => {
    //     console.log('mantra was changed: ', mantra);
    // }, [mantra]);

    const handleMantra = (e) => {
        e.preventDefault();

        axios
            .post(
                `https://proud-of-me-backend.herokuapp.com/api/user/${props.userId}/mantra`,
                {
                    mantra,
                }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className='flex flex-col mx-6 mt-6 items-center'>
            <h1 className='font-semibold text-xl'>
                What is Your Mantra For Today?
            </h1>
            <form action='POST' onSubmit={(e) => handleMantra(e)}>
                <input
                    className='border-b-2 font-medium mb-4 mt-2 placeholder-gray-400 py-2 rounded text-center text-green-500'
                    placeholder='Only I can control my thoughts.'
                    value={mantra}
                    type='text'
                    onChange={(e) => setMantra(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Mantra;
