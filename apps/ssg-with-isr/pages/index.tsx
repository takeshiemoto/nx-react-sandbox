import React from 'react';
import Link from 'next/link';
import fetch from 'node-fetch';
import { GetStaticProps } from 'next';
import { RootObject } from '../types';

interface PageProps {
  time: string;
  data: RootObject;
}

export function Index({ time, data }: PageProps) {
  return (
    <div>
      <div>
        <Link href={'/page-2'}>
          <a>Page-2</a>
        </Link>
      </div>
      {time}時点でのスター数は{data.stargazers_count}
    </div>
  );
}
export default Index;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const time = new Date().toString();
  const data = await fetch('https://api.github.com/repos/zeit/next.js')
    .then((res) => res.json())
    .then((res) => res as RootObject);

  return {
    props: {
      time,
      data,
    },
    revalidate: 3,
  };
};
