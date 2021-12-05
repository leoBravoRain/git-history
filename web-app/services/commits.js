import axios from 'axios';

export const getCommits = async () => {
  try {
    let resp = await axios({
      method: "get",
      url: "http://localhost:5000/api/commits",
    });
    let data = await resp.data;
    return data;
  } catch (error) {
    return (error);
    
  }
};
