import styled, { css } from 'styled-components';
import magnifierIcon from '../../../assets/icons/magnifier.svg';

interface Props {
  search: boolean;
}

const Input = styled.input<Props>`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 5px;
  background:  ${({ theme }) => theme.backgroundFunctionalColor};
  margin-bottom:20px;
  color:white;
  display:block;
  width:100%;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color:white;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
