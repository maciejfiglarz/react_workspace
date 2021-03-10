import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import Input from '../../atoms/Input/Input.tsx';

const StyledContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: white;
`;

const Bar = () => (
  <StyledContainer>
    <StyledTitle>DASHBOARD</StyledTitle>
    <Input search />
  </StyledContainer>
);

export default Bar;
