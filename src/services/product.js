import storeAPI from './api-store';

const fetchAllCategories = async () => {
  const result = await storeAPI.get(`/products/categories`);
  const { data } = result;
  return data;
};

const productServices = {
  fetchAllCategories
};

export default productServices;
