import styled from 'styled-components';
import LogoIcon from '../../../assets/logo.svg';

const Logo = styled.button`
  display: block;
  width: 33px;
  height: 33px;
  border-radius: 20px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  /* background-position: 50% 50%;
  background-size: 50% 50%; */
  border: none;
`;

export default Logo;
