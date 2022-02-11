import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic]);

  return (
    <>
      <ul>
        {articles.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <li>
                {article.title} <br />
                Written by {article.author} at {article.created_at} <br />
                Comments: {article.comment_count}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
