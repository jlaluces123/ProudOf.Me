import { signIn, signOut, useSession } from 'next-auth/client';

export function Navigation(props) {
    const [session, loading] = useSession();

    return (
        <div className='h-12 my-4 mx-4 flex items-center'>
            {!session && (
                <div className='flex justify-between w-full'>
                    <span>ProudOf.Me</span>
                    <button onClick={signIn}>Sign in</button>
                </div>
            )}

            <div className='flex justify-between w-full'>
                <span className='text-gray-600 text-lg'>
                    ProudOf.
                    <span className='text-black font-bold'>
                        {session.user.name.split(' ')[0]}
                    </span>
                </span>
                <button onClick={signOut}>Sign out</button>
            </div>
        </div>
    );
}
