import Head from 'next/head';
import Link from 'next/link';
// import { signIn, signOut, useSession } from 'next-auth/client';

import { Navigation } from '../component/navigation';
import { Mantra } from '../component/mantra';
import React, { useState, useEffect } from 'react';

export default function Home() {
    // const [session, loading] = useSession();
    const [user, setUser] = useState(null);

    return (
        <div className='max-h-full flex flex-col h-screen'>
            {/* <Navigation /> */}
            {user && <Mantra />}
            {!user && (
                <a href='https://proud-of-me-backend.herokuapp.com/api/auth/google'>
                    Sign In With Google
                </a>
            )}
        </div>
    );
}
