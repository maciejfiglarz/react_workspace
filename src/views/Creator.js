import React, { useState } from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';



import Input from '../components/atoms/Input/Input';
import Textarea from '../components/atoms/Textarea/Textarea';
import Button from '../components/atoms/Button/Button';



const StyledContainer = styled.section`
  width: 800px;
  margin: 20px auto 0 auto;
  background: ${({ theme }) => theme.backgroundColor};
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 30px;
`;

const Creator = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageLink, setImageLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // createPost({
    //   post: {
    //     title,
    //     content,
    //     imageLink
    //   }
    // });
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

// Creator.propTypes = {
//   // alert: PropTypes.object,
//   // user: PropTypes.object,
//   createPost: PropTypes.func,
//   loading: PropTypes.func,
// };

// const mapStateToProps = (state) => {
//   const { alert, user } = state;
//   return { alert, user };
// };

// const actionCreators = {
//   createPost: postMenagerActions.createPost,
//   loading: postMenagerActions.loading,
// };

// export default connect(mapStateToProps, actionCreators)(Creator);

export default Creator;