import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

// import InfinityList from '../components/molecules/InfinityList/InfinityList.tsx';
// import Animation from '../components/molecules/Animation/Animation';
import postActions from '../store/post/action';
// import Slider from '../components/molecules/Slider/Slider';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import Header from '../components/organisms/Header/Header.tsx';
import Card from '../components/atoms/Card/Card';
import CardTitle from '../components/atoms/Card/CardTitle';

import Table from '../components/atoms/Input/Table/Table';



const StyledWrapper = styled.section`
  width: calc(100% - 250px);
  margin-left: 250px;
`;

const StyledContainer = styled.div`
  margin: -20px auto 0 auto;
  width: ${({ theme }) => theme.maxWidthContainer};
  max-width: ${({ theme }) => theme.widthContainer};
`;

/*eslint-disable */
const Index = ({ pagination, posts }) => (
  <StyledWrapper>
    {/* <Slider />
    <Animation /> */}
    {/* <InfinityList posts={posts} pagination={pagination} type="index" /> */}
    <Sidebar />
    <Header />
    <StyledContainer>
      <Card top={-20}>
        <CardTitle>Projects</CardTitle>
        <Table type="projects" />
      </Card>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    </StyledContainer>
  </StyledWrapper>
)

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
