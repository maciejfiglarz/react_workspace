import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  max-width: 250px;
  width:100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

const Sidebar = () => {
  const test = '';
  return <StyledWrapper>{test}</StyledWrapper>;
};

export default Sidebar;
