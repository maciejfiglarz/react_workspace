import styled from 'styled-components';

interface Props {
  icon: string,
  activeclass: string
}


const ButtonIcon = styled.button<Props>`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.colorPrimary};
  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
