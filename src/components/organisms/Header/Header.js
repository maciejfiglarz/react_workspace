import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

// import Button from '../../atoms/Button/Button';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Logo from './Logo';

import plusIcon from '../../../assets/icons/plus.svg';

const StyledWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.maxWidthContainer};
  max-width: ${({ theme }) => theme.widthContainer};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100%;
`;

const Header = () => (
  <StyledWrapper>
    <StyledContainer>
      <Logo />
      <ButtonIcon as={NavLink} to="/creator" icon={plusIcon} activeclass="active" />
    </StyledContainer>
  </StyledWrapper>
);

export default Header;
