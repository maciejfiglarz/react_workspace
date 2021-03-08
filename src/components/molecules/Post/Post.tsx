import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  margin-bottom: 20px;
`;

const StyledTitle = styled.h1`
  padding: 7px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;


interface IImage {
  url: string
}


const StyledImage = styled.div<IImage>`
  width:100%;
  height: 300px;
  background: url(${props => props.url});
`;

interface IPost {
  title: string,
  imageLink: string,
  content: string
}

interface IProps {
  isSingle: boolean,
  post: IPost
}


const Post: React.FC<IProps> = ({ post, isSingle }) => {
  const { title, imageLink, content } = post;
  return (
    <>
      {isSingle && <></>}
      <StyledWrapper>
        <StyledImage url={imageLink} />
        <StyledTitle>{title}</StyledTitle>
        {content}
      </StyledWrapper>
    </>
  );
};

export default Post;
