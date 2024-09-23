import React from 'react';
import Link from 'next/link';

const LearnCraft = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/aurora-photography-demo" className="text-blue-500 hover:underline">
        Go to Aurora Photography Demo
      </Link>
    </div>
  );
};

export default LearnCraft;