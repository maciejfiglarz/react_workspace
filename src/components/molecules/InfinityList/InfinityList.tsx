import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//@ts-ignore
import Post from '../Post/Post';

const StyledWrapper = styled.div`
  width: ${({ theme }) => theme.widthContainer};
  max-width: 700px;
  margin: 20px auto 0 auto;
`;

interface Props {
  pagination: (page: number, params: any) => void,
  type: any,
  posts: any
}

const InfiniteList: React.FC<Props> = ({ posts, pagination, type }) => {
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(0);
  const { isLoading, data } = posts;

  const params = {
    waitingRoom: { isWaitingRoom: true, isActive: true },
    index: { isWaitingRoom: false, isActive: true },
  };

  const getData = (load: boolean) => {
    if (load) {
      //@ts-ignore
      pagination(page, params[type]);
    }
  };

  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('loadPage');
        setPage((prev) => {
          setLoadMore(true);
          return prev + 1;
        });
      }
    });
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


export default InfiniteList;
