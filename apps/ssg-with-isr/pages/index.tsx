import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

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
  return {
    props: {
      count: new Date().toISOString(),
    },
  };
};
