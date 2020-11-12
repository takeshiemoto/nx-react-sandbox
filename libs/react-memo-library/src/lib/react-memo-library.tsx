import React, { memo, useState } from 'react';

import './react-memo-library.css';

const MemoizedPageTitle = memo(() => {
  console.log('Render Memoized Page Title Component');
  return <h1>React.Memo</h1>;
});

const PageTitle = () => {
  console.log('Render Page Title');
  return <h1>React.Memo</h1>;
};

const CounterView = memo(({ count }: { count: number }) => {
  return <div>{count}</div>;
});

export const ReactMemoLibrary = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <MemoizedPageTitle />
      <PageTitle />
      <CounterView count={count} />
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
};
