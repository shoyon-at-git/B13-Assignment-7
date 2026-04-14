import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <p className="text-xl text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href={"/"}
        className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition"
      >
        Go Home
      </Link>
    </div>
    );
};

export default NotFound;