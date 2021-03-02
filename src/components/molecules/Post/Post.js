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

const Post = ({ post, isSingle }) => {
  const { title } = post;
  console.log(post);
  return (
    <>
      {isSingle && <>Signle</>}
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
      </StyledWrapper>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.objectOf({ title: PropTypes.bool }).isRequired,
  isSingle: PropTypes.bool.isRequired,
};

export default Post;
