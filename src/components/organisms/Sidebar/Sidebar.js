import React, { useState } from 'react';
// import { Dashboard, VerifiedUser } from '@material-ui/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../../../assets/icons/dashboard.svg';
import { ReactComponent as ListIcon } from '../../../assets/icons/list.svg';

const StyledDashboardIcon = styled(DashboardIcon)`

`;
const StyledProductsIcon = styled(ListIcon)`

`;

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 20px;
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  overflow-y: auto;
`;

const StyledMenu = styled.ul`
  margin-top: 30px;
  list-style-type: none;
`;


const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.7;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  display:flex;
  align-items:center;
  position:relative;
  &:hover {
    opacity: 1;
    transition: all .5s;
  }
`;
const StyledItem = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.7;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  display:flex;
  align-items:center;
  position:relative;
  cursor:pointer;
  &:hover {
    opacity: 1;
    transition: all .5s;
  }
`;

const  productCategories = ['electronics','jewelery','men clothing','women clothing'];


const StyledLinkLabel = styled.h4`line-height:15px;`;

const styleIcon = {
  width: '14px',
  height: '14px',
  marginRight: '15px'
};

const StyledSubmenu = styled.div`
 visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  &.active {
  visibility: visible;
  opacity: 1;
  
  }
`;
const StyledSubmenuLink = styled(StyledLink)`
  /* font-size: ${({ theme }) => theme.fontSize.xs}; */
  padding: 7px 0 0 15px;
  &:before {
  content: '';
   display: inline-block;
   width: 8px;
   height: 8px;
   -moz-border-radius: 7.5px;
   -webkit-border-radius: 7.5px;
   border-radius: 7.5px;
   background-color: #69b6d5;
   position:absolute;
   left:0;
   top:12px;
  }
`;

const productCategories = ['electronics', 'jewelery', 'men clothing', 'women clothing'];

const Sidebar = () => {
  const [isProductsListVisible, setProductsListVisible] = useState(false);
  const handleClickProducts = () => (setProductsListVisible(!isProductsListVisible));
  return (
    <StyledWrapper>
      <StyledMenu>
        <StyledLink to="/faq" activeClassName="selected">
          <StyledDashboardIcon style={styleIcon} />
          <StyledLinkLabel>
            Dashboard
        </StyledLinkLabel>
        </StyledLink>

        <StyledItem onClick={handleClickProducts}>
          <StyledProductsIcon style={styleIcon} />
        Products
        </StyledItem>

      </StyledMenu>

      <StyledSubmenu className={isProductsListVisible ? 'active' : ''}>
        {productCategories && productCategories.map((s) => (
          <StyledSubmenuLink to="/products">{s}</StyledSubmenuLink>
        ))}
      </StyledSubmenu>



    </StyledWrapper>
  )
};


export default Sidebar;