import React from 'react';
import { render } from '@testing-library/react';

import ReactMemoLibrary from './react-memo-library';

describe('ReactMemoLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactMemoLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
