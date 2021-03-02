import API from './api';

const pagination = async () => {
  const result = await API.get(`/posts`);
  return result;
};

const postServices = {
  pagination,
};

export default postServices;
