import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Navigation } from '../component/navigation';
import { Mantra } from '../component/mantra';
import React, { useState, useEffect } from 'react';

export default function Home(props) {
    const [session, loading] = useSession();
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className='max-h-full flex flex-col h-screen'>
            <Navigation />
            {props.user && <Mantra />}
            {!props.user && <a href='/api/auth/google'>Log In</a>}
        </div>
    );
}

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/profile');
    const user = await res.json();

    return {
        props: { user },
    };
}
