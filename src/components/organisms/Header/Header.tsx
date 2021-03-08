import React from 'react';
// import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
// @ts-ignore
// import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon.tsx';
// @ts-ignore
// import Logo from './Logo.tsx';

// import plusIcon from '../../../assets/icons/plus.svg';
import Bar from './Bar';

const StyledWrapper = styled.section`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.backgroundDarkColor};
  padding:10px 0;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.maxWidthContainer};
  max-width: ${({ theme }) => theme.widthContainer};
  height: 100%;
`;

const Header: React.FC = () => (
  <StyledWrapper>
    <StyledContainer>
      <Bar />
      {/* <Logo as={NavLink} to="/" />
      <ButtonIcon as={NavLink} to="/creator" icon={plusIcon} activeclass="active" /> */}
    </StyledContainer>
  </StyledWrapper>
);

export default Header;
