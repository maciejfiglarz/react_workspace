import postMenagerConstants from './constants';
import postMenagerServices from '../../services/post-menager'
// import alertActions from "../alert/action";
// import { history } from "../../helper/history";

const loading = (bool) => ({
  type: postMenagerConstants.CHECKING_DATA,
  isLoading: bool,
});

const createPost = (params) => async (dispatch) => {
  //   dispatch(loading(true));
  const { post } = params;

  const result = await postMenagerServices.insertPost({
    post,
  });


  
  console.log('successPost', result);

  //   dispatch(alertActions.clear());
  // let { post} = params;
  // const { type } = post;
  // let validation = null;

  // if (validation.isValid) {
  //   const result = await postMenagerServices.insertPost({
  //     post,
  //     user,
  //   });
  //   console.log('result',result);
  //   const { data } = result;
  //   const { success, postId } = data;
  //   console.log('successPost',success);
  //   if (success) {
  //     history.push(`/post/${postId}`);
  //     console.log("post dodany");
  //   } else {
  //     console.log("coś poszło nie tak");
  //   }
  // } else {
  //   console.log('error');
  //   dispatch(alertActions.error(validation.errors));
  // }

  dispatch(loading(false));
};

const postMenagerActions = {
  createPost,
};

export default postMenagerActions;
