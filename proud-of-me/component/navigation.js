// import { signIn, signOut, useSession } from 'next-auth/client';

export function Navigation(props) {
    // const [session, loading] = useSession();
    const [user, setUser] = useState(null);

    return (
        <div className='h-12 my-4 mx-4 flex items-center'>
            {!user && (
                <div className='flex justify-between w-full'>
                    <span className='text-gray-600 text-lg border-b-2 border-gray-300'>
                        ProudOf.Me
                    </span>
                    <a href='/api/auth/google'>Sign in</a>
                </div>
            )}

            {user && (
                <div className='flex justify-between w-full'>
                    <span className='text-gray-600 text-lg border-b-2 border-gray-300'>
                        ProudOf.&nbsp;
                        <span className='text-black font-bold capitalize'>
                            {props.user.username}
                        </span>
                    </span>
                    <a href='/api/auth/logout'>Sign Out</a>
                </div>
            )}
        </div>
    );
}

// export async function getStaticProps(context) {
//     const res = await fetch('http://localhost:3000/api/profile');
//     const user = await res.json();

//     return {
//         props: { user },
//     };
// }
