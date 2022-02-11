import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle, getComments } from "../utils/api";

const Article = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    getArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id]);

  return (
    <div>
      <h2>{article.title}</h2>
      <h3> written by {article.author} </h3>
      <p>{article.body}</p>
      {/* <li>{comments}</li> */}
    </div>
  );
};

export default Article;
