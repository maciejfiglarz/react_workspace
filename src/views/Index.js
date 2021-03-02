import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import postActions from '../store/post/action';

const Index = ({ posts, pagination }) => {
  const { isLoading, data } = ['test', 'test2'];
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(0);

  const getData = (load) => {
    if (load) {
      pagination(page);
    }
    console.log(posts);
  };

  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('load');
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prev) => {
          setLoadMore(true);
          return prev + 1;
        });
      }
    });
  }, []);
  console.log(posts);
  return (
    <div>
      {data && <>{!isLoading && data.map((el) => el)}</>}
      {/* {posts && Object.key(posts.data).map((el) => el.title)} */}
      {isLoading && <>Loader</>}
    </div>
  );
};

Index.propTypes = {
  posts: PropTypes.objectOf({ data: PropTypes.object, isLoading: PropTypes.bool }).isRequired,
  pagination: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { posts } = state;
  return { posts };
};

const actionCreators = {
  pagination: postActions.pagination,
};

export default connect(mapStateToProps, actionCreators)(Index);
