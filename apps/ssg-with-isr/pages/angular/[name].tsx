import React from 'react';
import fetch from 'node-fetch';
import { GetStaticPaths, GetStaticProps } from 'next';
import { RootObject } from '../../respos-types';
import { RootObject as SingleRoot } from '../../types';

interface PageProps {
  name: string;
  star: number;
}

export function Angular({ name, star }: PageProps) {
  return (
    <div>
      {name}
      {star}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repositories = await fetch('https://api.github.com/orgs/angular/repos')
    .then((res) => res.json())
    .then((res) => res as RootObject[]);
  const paths = repositories.map((repo) => `/angular/${repo.name}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { name: string }
> = async ({ params }) => {
  const name = params.name;
  const date = await fetch(`https://api.github.com/repos/angular/${name}`)
    .then((res) => res.json())
    .then((res) => res as SingleRoot);

  return {
    props: { name: date.name, star: date.stargazers_count },
  };
};

export default Angular;
