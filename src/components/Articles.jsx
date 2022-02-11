import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import "../App.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic]);

  return (
    <div className="articleList">
      <ul id="listEntries">
        {articles.map((article) => {
          return (
            <li id="entries">
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
              >
                {article.title}
              </Link>{" "}
              <br />
              Written by {article.author} at {article.created_at} <br />
              Comments: {article.comment_count}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
