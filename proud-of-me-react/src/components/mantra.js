import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mantra = (props) => {
    const [mantra, setMantra] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:3388/api/user/${props.userId}/mantra`)
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
            .post(`http://localhost:3388/api/user/${props.userId}/mantra`, {
                mantra,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className='flex flex-col mx-6'>
            <h1>What is Your Mantra For Today?</h1>
            <form action='POST' onSubmit={(e) => handleMantra(e)}>
                <input
                    className='border-b font-medium my-4 pl-2 placeholder-gray-400 py-2 rounded'
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
