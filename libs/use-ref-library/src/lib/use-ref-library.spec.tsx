import React from 'react';
import { render } from '@testing-library/react';

import UseRefLibrary from './use-ref-library';

describe('UseRefLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseRefLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
