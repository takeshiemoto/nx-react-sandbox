import React from 'react';

import styled from 'styled-components';
import { useCurrentDate } from '@nx-react-sandbox/hooks';

/* eslint-disable-next-line */
export interface CustomHooksProps {}

const StyledCustomHooks = styled.div`
  color: pink;
`;

export const CustomHooks = (props: CustomHooksProps) => {
  const date = useCurrentDate(1000);
  return (
    <StyledCustomHooks>
      <h1>Welcome to CustomHooks! {date.toLocaleTimeString()}</h1>
    </StyledCustomHooks>
  );
};

export default CustomHooks;
