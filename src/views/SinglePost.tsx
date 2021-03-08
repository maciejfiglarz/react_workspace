import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import postServices from '../services/post';

//@ts-ignore
import Post from '../components/molecules/Post/Post.tsx';

const StyledWrapper = styled.article`
  width: ${({ theme }) => theme.widthContainer};
  max-width: 700px;
  margin: 20px auto 0 auto;
`;

const SinglePost: React.FC = () => {
  //@ts-ignore
  const { id } = useParams();
  const [item, setItem] = useState<{ title: string; imageLink: string; content: string } | {}>({});
  const fetchData = async () => {
    const result = await postServices.fakeFetchOneByID(id);
    setItem(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <StyledWrapper>{item && <Post post={item} isSingle />}</StyledWrapper>;
};

export default SinglePost;
