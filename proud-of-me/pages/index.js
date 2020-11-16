import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Navigation } from '../component/navigation';
import { Mantra } from '../component/mantra';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [session, loading] = useSession();
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className='max-h-full flex flex-col h-screen'>
            {/* <Navigation /> */}
            {/* {!session && <a href='/api/google'>Sign In</a>}
            {session && <Mantra />} */}
            {loggedIn && <Mantra />}
            {!loggedIn && <a href='/api/auth/google'>Log In</a>}
        </div>
    );
}
