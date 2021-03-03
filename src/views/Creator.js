import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../components/atoms/Input/Input';
import Textarea from '../components/atoms/Textarea/Textarea';
import Button from '../components/atoms/Button/Button';

import postMenagerActions from '../store/post-menager/action'

const StyledContainer = styled.section`
  width: 800px;
  margin: 20px auto 0 auto;
  background: ${({ theme }) => theme.backgroundColor};
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 30px;
`;

const Creator = ({createPost}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageLink, setImageLink] = useState('');

  const isValid = () => {
    if (title.length > 0 && content.length > 0 && imageLink.length > 0) {
      return true;
    }
    return false;
  }

  const handleSubmit = () => {
    console.log(title, content, imageLink);
    if (isValid()) {
      createPost({
        post: {
          title,
          content,
          imageLink
        }
      });
    }

  };

  return (
    <StyledContainer>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Input placeholder="Tytuł" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input
          placeholder="Zdjęcie do linku"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />
        <Textarea
          placeholder="Treść"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Dodaj</Button>
      </StyledForm>
    </StyledContainer>
  );
};

Creator.propTypes = {
  // alert: PropTypes.object,
  // user: PropTypes.object,
  createPost: PropTypes.func.isRequired
  // loading: PropTypes.func,
};


const actionCreators = {
  createPost: postMenagerActions.createPost,
};

export default connect(null, actionCreators)(Creator);
