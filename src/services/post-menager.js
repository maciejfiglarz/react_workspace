import API from "./api";


const insertPost = async (params) => {

    const result = await API.post(`/posts/insert`, params);
    return result;
  };
  
  const postMenagerServices = {
    insertPost,
  };
  
  export default postMenagerServices;