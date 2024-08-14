'use client'; 

import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 px-4 py-2 bg-white text-blue-500 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300"
      >
        Logout
      </button>
      <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
    </div>
  );
};

export default Page;
