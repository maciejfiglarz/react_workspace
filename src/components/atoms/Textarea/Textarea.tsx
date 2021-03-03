import styled from 'styled-components';



const Textarea = styled.textarea`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  border: none;
  border-radius: 5px;
  width: 100%;
  display: block;
  background-color:  ${({ theme }) => theme.backgroundFunctionalColor};
  margin-bottom:20px;
  color:white;
  min-height: 300px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color:white;
  }
`;

export default Textarea;
