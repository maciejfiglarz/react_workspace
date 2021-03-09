import React from 'react';
import { Dashboard, VerifiedUser } from '@material-ui/icons';
import styled from 'styled-components';
import { yellow } from '@material-ui/core/colors';


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

const StyledMenu = styled.ul`
  margin-top:30px;
  list-style-type: none;
`;

const StyledMenuItem = styled.li`
  padding:10px;
`;

const StyledDashboardIcon = styled(Dashboard)
  `background:red;`
  ;

const iconStyle = {
  background: 'yellow',
};

const Sidebar = () => (
  <StyledWrapper>
    <StyledMenu>
      <StyledMenuItem><StyledDashboardIcon />Dashboard</StyledMenuItem>
      <StyledMenuItem><VerifiedUser style={iconStyle} />Projects</StyledMenuItem>
      <StyledMenuItem><VerifiedUser />Workers</StyledMenuItem>
    </StyledMenu>
  </StyledWrapper>
);

export default Sidebar;
