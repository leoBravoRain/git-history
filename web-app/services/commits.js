import axios from "axios";

export const getCommits = async () => {
  try {
    let resp = await axios({
      method: "get",
      url: "http://localhost:5000/api/commits",
    });
    let data = await resp.data;
    // get specific data
    let commits = data.map((commit) => {
      return {
        sha: commit.sha,
        date: commit.commit.author.date,
        message: commit.commit.message,
        url: commit.html_url,
        authorUrl: commit.author.html_url,
        authorAvatar: commit.author.avatar_url,
        authorName: commit.author.login,
      };
    });
    return commits;
  } catch (error) {
    return error;
  }
};
