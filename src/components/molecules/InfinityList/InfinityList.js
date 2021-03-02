import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from '../Post/Post';

// import { Loader } from './../../containers/loader';

const StyledWrapper = styled.div`
  width: ${({ theme }) => theme.widthContainer};
  max-width: 700px;
  margin: 0 auto;
`;

const InfiniteList = ({ posts, pagination, type }) => {
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(0);
  const { isLoading, data } = posts;

  const params = {
    waitingRoom: { isWaitingRoom: true, isActive: true },
    index: { isWaitingRoom: false, isActive: true },
  };

  const getData = (load) => {
    if (load) {
      pagination(page, params[type]);
    }
  };

  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    // window.addEventListener('scroll', () => {
    //   console.log('load');
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setPage((prev) => {
      setLoadMore(true);
      return prev + 1;
    });
    //   }
    // });
  }, []);

  return (
    <StyledWrapper>
      {posts && (
        <>
          {!isLoading &&
            Object.keys(data).length > 0 &&
            Object.keys(data).map((key) => (
              <Post key={data[key]._id} post={data[key]} isSingle={false} />
            ))}
        </>
      )}
      {/* {isLoading && <Loader extraClass="loader--center" />} */}
    </StyledWrapper>
  );
};

InfiniteList.propTypes = {
  type: PropTypes.string,
  posts: PropTypes.objectOf({ data: PropTypes.array, isLoading: PropTypes.bool }).isRequired,
  pagination: PropTypes.func.isRequired,
};

InfiniteList.defaultProps = {
  type: 'index',
};

export default InfiniteList;
