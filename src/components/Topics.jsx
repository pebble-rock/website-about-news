import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <nav className="Topic">
      {topics.map((topic) => {
        return <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>;
      })}
    </nav>
  );
};

export default Topics;
