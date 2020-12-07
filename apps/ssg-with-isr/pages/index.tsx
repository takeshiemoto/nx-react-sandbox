import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import fetch from 'node-fetch';

interface Response {
  count: string;
}

export function Index({ count }: Response) {
  return (
    <div>
      <div>
        <Link href={'/page-2'}>
          <a>Page-2</a>
        </Link>
      </div>
      {count}
    </div>
  );
}
export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const { count } = await fetch('http://localhost:4200/api/user')
    .then((res) => res.json())
    .then((res) => res as Response);
  return {
    props: {
      count,
    },
  };
};
