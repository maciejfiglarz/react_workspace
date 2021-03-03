import postConstants from './constants';

const initialState = {
  data: {},
  isLoading: false,
};

const loadPosts = (state, action) => {
  const { payload, page } = action;
  let newState = {};
  // if (page > 0) {
  //   newState = [...state];
  // } else {
  //   newState = { data: {}, page };
  // }
  newState = { data: [], page };

  console.log('page', page);
  Object.keys(payload).forEach((key) => {
    newState.data.push(payload[key]);
  });

  // for (const key in payload) {
  //   newState.data[payload[key]._id] = payload[key];
  // }

  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postConstants.POSTS_FETCH_SUCCESS: {
      // const {payload} = action;
      // // const newState = { ...state, ...payload };
      // // for (const key in payload) {
      // //   newState.data[payload[key]._id] = payload[key];
      // // }
      // Object.keys(payload).forEach(key=>{
      //   // newState.data[payload[key]._id] = payload[key];
      //   console.log( payload[key]._id);
      // });

      return loadPosts(state, action);
    }
    default:
      /* code */
      break;
  }

  return state;
};
