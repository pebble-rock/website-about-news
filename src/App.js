import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Header from "./components/Header";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="Header" />
        <Topics />

        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/topics/:topic" element={<Articles />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles/:article_id/comments" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
