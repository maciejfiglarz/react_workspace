import API from './api';
import fakeAPI from './api-fake';

const pagination = async () => {
  const result = await API.get(`/posts/pagination`);
  const { data } = result;
  return data;
};
const fetchAll = async () => {
  const result = await API.get(`/posts`);
  const { data } = result;
  return data;
};
const fakeFetchAll = async () => {
  const result = await fakeAPI.get(`/posts`);
  const { data } = result;
  return data;
};
const fakeFetchOneByID = async (id) => {
  const result = await fakeAPI.get(`/posts/${id}`);
  console.log('xxxx', result);
  const { data } = result;
  return data;
};

const postServices = {
  pagination,
  fetchAll,
  fakeFetchAll,
  fakeFetchOneByID,
};

export default postServices;
