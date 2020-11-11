import React, { useRef } from 'react';

import './use-ref-library.css';

export const UseRefLibrary = () => {
  const countRef = useRef<number>(0);

  /**
   * countRef.currentが更新されてもコンポーネントは再レンダリングされない
   */
  const handleClick = () => {
    countRef.current++;
  };

  const showLog = () => {
    console.log({ current: countRef.current });
  };

  return (
    <div>
      <button onClick={() => showLog()}>show log</button>
      <button onClick={() => handleClick()}>increment</button>
    </div>
  );
};
