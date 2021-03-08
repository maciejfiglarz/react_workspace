import fakeAPI from './api-fake';

const fakeFetchAll = async () => {
  const result = await fakeAPI.get(`/projects`);
  const { data } = result;
  return data;
};

const projectsServices = {
  fakeFetchAll,
};

export default projectsServices;
