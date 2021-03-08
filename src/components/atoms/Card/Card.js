import styled from 'styled-components';

const Card = styled.section`
  width: 100%;
  position: relative;
  /* display: flex;
  flex-direction: column; */
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  top: ${(props) => (props.top ? `${props.top}px` : '60px')};
  padding: 20px;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
`;

export default Card;
