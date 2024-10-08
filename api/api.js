// api/api.js
import axios from 'axios';

const API_URL = "https://alchanso.site"; // 백엔드 API URL

export const createPost = async (postData) => {
    const response = await axios.post(`${API_URL}/happy-birthday`, postData, {
      headers: {
        "Content-Type": "application/json",}
    });
    return response.data;
};


export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/happy-birthday`);
  return response.data.data; // 데이터를 반환
};


// api.js
export const deletePost = async (postId, password) => {
  const response = await axios.delete(API_URL, {
      data: { id: postId, password }, // 삭제할 게시물 ID와 비밀번호
  });
  return response.data; // 삭제 결과 반환
};