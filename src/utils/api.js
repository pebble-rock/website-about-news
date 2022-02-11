import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://website-about-news.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", {
      params: { topic },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
