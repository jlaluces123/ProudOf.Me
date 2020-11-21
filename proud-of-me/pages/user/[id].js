import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export function Home({ user }) {
    console.log(req.query);
    return <h1>Logged In. Hello World</h1>;
}

export async function getStaticPaths() {
    const res = await fetch(
        'https://proud-of-me-backend.herokuapp.com/api/users'
    );
    let users = await res.json();

    console.log('USERS: ', users.users);

    const paths = users.users.map((user) => ({
        params: { id: user.googleId },
    }));

    return {
        fallback: false,
        paths,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://proud-of-me-backend.herokuapp.com/api/user/${params.id}`
    );
    const user = res.json();

    return {
        props: { user },
    };
}

export default Home;
