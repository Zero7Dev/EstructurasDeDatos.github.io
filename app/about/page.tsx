


// pages/about.tsx

import React from 'react';
import Head from 'next/head';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="About our application" />
            </Head>
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-7xl font-bold mb-6">About Page</h1>
                <p className="text-lg mb-4">
                    Welcome to our application! Our mission is to provide the best service to our customers
                    and ensure a seamless experience. We believe in innovation, quality, and customer satisfaction.
                </p>
                <h2 className="text-4xl font-semibold mb-3">Our Features</h2>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2">User-friendly Interface</li>
                    <li className="mb-2">High Performance</li>
                    <li className="mb-2">24/7 Customer Support</li>
                    <li className="mb-2">Regular Updates</li>
                </ul>
                <div className="flex justify-between items-center mt-10">
                    <div>
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                        <p>Email: contact@ourapp.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Follow Us</h3>
                        <p>Twitter: @ourapp</p>
                        <p>Facebook: fb.com/ourapp</p>
                        <p>Instagram: @ourapp</p>
                    </div>
                </div>
                <footer className="mt-10 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Our App. All rights reserved.
                </footer>
            </div>
        </>
    );
};

export default AboutPage;
