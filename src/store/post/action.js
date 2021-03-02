import postConstants from './constants';
import postServices from '../../services/post';

const loading = (bool) => ({
  type: postConstants.POSTS_ARE_LOADING,
  isLoading: bool,
});

const pagination = (page, params = {}) => (
   async (dispatch) => {
    dispatch(loading(true));
    const result = await postServices.pagination({ page, params });
    console.log('result',result);
    const { data } = result;

    // if (data.length > 0) {
    dispatch({
      type: postConstants.POSTS_FETCH_SUCCESS,
      payload: data,
      page,
    });
    // }
    dispatch(loading(false));
  }
);

const postActions = {
  pagination,
};

export default postActions;
