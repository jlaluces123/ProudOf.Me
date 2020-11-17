import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Navigation } from '../component/navigation';
import { Mantra } from '../component/mantra';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [session, loading] = useSession();

    return (
        <div className='max-h-full flex flex-col h-screen'>
            <Navigation />
            {session && <Mantra />}
            {!session && <button onClick={signIn}>Sign In With Google</button>}
        </div>
    );
}
