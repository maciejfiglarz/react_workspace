import React from 'react';
// import { Dashboard, VerifiedUser } from '@material-ui/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

const StyledMenu = styled.ul`
  margin-top: 30px;
  list-style-type: none;
`;

const StyledMenuItem = styled.li`
  padding: 10px;
`;

// const StyledDashboardIcon = styled(Dashboard)`
//   /* background: #5e72e4; */
// `;
// const iconStyle = {
//   marginRight: '10px',
//   // background: '#5e72e4',
// };

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.2 !important;
  &:hover {
    opacity: 1;
  }
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledMenu>
      <StyledLink to="/faq" activeClassName="selected">
        <StyledMenuItem>
          {/* <StyledDashboardIcon style={iconStyle} /> */}
          Dashboard
        </StyledMenuItem>
      </StyledLink>
      <StyledMenuItem>
        {/* <VerifiedUser style={iconStyle} /> */}
        Projects
      </StyledMenuItem>
      <StyledMenuItem>
        {/* <VerifiedUser style={iconStyle} /> */}
        Workers
      </StyledMenuItem>
    </StyledMenu>
  </StyledWrapper>
);

export default Sidebar;
