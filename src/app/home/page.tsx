'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Page() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch('https://nest-api-wg5t.onrender.com');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                console.log('Error fetching message:', error);
                if (error instanceof Error) {
                    setMessage(error.message);
                } else {
                    setMessage('An unknown error occurred');
                }
            }
        };

        fetchMessage();
    }, []);

    return (
        <div className='h-screen flex justify-center items-center flex-col gap-2'>
            <h1>Deployed 👍</h1>
            {message ? <p>{message}</p> : <span className="loading loading-spinner loading-xl"></span>} {/* Display the fetched message */}
            <Link
                passHref
                href={'/'}
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            >
                Go Back
            </Link>
        </div>
    )
}

export default Page;