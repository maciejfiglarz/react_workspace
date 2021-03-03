import React from 'react';
import PropTypes from 'prop-types';

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
const StyledImage = styled.div`
  width:100%;
  height: 300px;
  background: url(${props => props.url});
`;

const Post = ({ post, isSingle }) => {
  const { title,imageLink,content } = post;
  return (
    <>
      {isSingle && <>Signle</>}
      <StyledWrapper>
        <StyledImage url={imageLink} />
        <StyledTitle>{title}</StyledTitle>
        {content}
      </StyledWrapper>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.objectOf({ title: PropTypes.bool }).isRequired,
  isSingle: PropTypes.bool.isRequired,
};

export default Post;
