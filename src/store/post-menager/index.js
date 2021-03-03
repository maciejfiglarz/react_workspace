import postMenagerConstants from './constants';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postMenagerConstants.CHECKING_DATA:
      return { ...state, isLoading: action.isLoading };
    default:
      /* code */
      break;
  }

  return state;
};
