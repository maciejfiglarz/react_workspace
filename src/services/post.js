import API from './api';

const pagination = async () => {
  const result = await API.get(`/posts`);
  console.log('result',result);
  return result;
};
const fetchAll = async () => {
  const result = await API.get(`/posts`);
  const {data} = result;
  return data;
};
const postServices = {
  pagination,
  fetchAll
};

export default postServices;
