import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Proud Of Me</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <h1>Welcome to ProudOf.Me!</h1>
                <Link>Get Started</Link>
            </main>
        </div>
    );
}
