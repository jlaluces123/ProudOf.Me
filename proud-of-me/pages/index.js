import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Navigation } from '../component/navigation';
import { Mantra } from '../component/mantra';

export default function Home() {
    const [session, loading] = useSession();

    return (
        <div className='max-h-full flex flex-col h-screen'>
            <Navigation />
            {!session && <a href='/api/google'>Sign In</a>}
            {session && <Mantra />}
        </div>
    );
}
