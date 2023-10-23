import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/article/:idArticle" element={<Article />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
