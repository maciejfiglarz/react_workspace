import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.article`
  width: 100%;
  min-height: 350px;
  position: relative;
  z-index: 1;
`;
const StyledInner = styled.div`
  position: absolute;
  bottom: 0;
  padding: 3%;
`;

interface IImage {
  url: string
}
const StyledImage = styled.div<IImage>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

const StyledTitle = styled.h1``;
const StyledContent = styled.p``;

const StyledLink = styled(NavLink)`
  color: white;
`;

interface ICard {
  imageLink: string,
  title: string,
  content: string,
  id: string
}

const Card: React.FC<ICard> = ({ imageLink, title, content, id }) => {
  const prepareContent = (text: string) =>
    text.length > 50 ? `${text.substring(0, 50)}...` : text;

  return (
    <StyledLink to={`/post/${id}`}>
      <StyledWrapper>
        <StyledImage url={imageLink} />
        <StyledInner>
          <StyledTitle>{title}</StyledTitle>
          <StyledContent>{prepareContent(content)}</StyledContent>
        </StyledInner>
      </StyledWrapper>
    </StyledLink>
  );
};

export default Card;
