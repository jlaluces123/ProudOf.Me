import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
    const [session, loading] = useSession();

    return (
        <div>
            {!session && <button onClick={signIn}>Sign In</button>}
            {session && <h1>Signed in</h1>}
        </div>
    );
}
