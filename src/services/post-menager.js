import API from "./api";


const insertPost = async (params) => {
    const { user } = params;
  
  
    return API.post(`/post-menager/insert-post`, params);
  };
  
  const postMenagerServices = {
    insertPost,
  };
  
  export default postMenagerServices;