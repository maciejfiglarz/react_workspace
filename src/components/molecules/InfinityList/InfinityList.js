import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
// import Post from "../Post";
// import { Loader } from "./../../containers/loader";


const InfiniteList = ({ posts, pagination, type, profileParams }) => {
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(0);
  const { isLoading, data } = posts;

  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   console.log("load");
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //     setPage((prev) => {
    //       setLoadMore(true);
    //       return prev + 1;
    //     });
    //   }
    // });
  }, []);

  const params = {
    waitingRoom: { isWaitingRoom: true, isActive: true },
    index: { isWaitingRoom: false, isActive: true },
    profile: profileParams,
  };

  const getData = (load) => {
    if (load) {
      pagination(page, params[type]);
    }
  };

  return (
    <>
      <ul id="list">
        {posts && (
          <>
            {!isLoading &&
              Object.keys(data).length > 0 &&
              Object.keys(data).map((key) => (
                <div>
                  {/* <Post key={data[key]._id} post={data[key]} isSingle={false} /> */}
                  post
                </div>
              ))}
          </>
        )}
      </ul>
      {isLoading && <>Loader</>}
    </>
  );
};

InfiniteList.propTypes = {
    isLoading: PropTypes.bool.isRequired
  };
  

export default InfiniteList;