import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  width: 100%;
  width: ${({ theme }) => theme.maxWidthContainer};
  max-width: ${({ theme }) => theme.widthContainer};
`;

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
