import React from 'react';
import Link from 'next/link';

export function Index() {
  return (
    <div>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    </div>
  );
}

export default Index;
