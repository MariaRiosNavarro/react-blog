# Simple React Blog (Dynamical reendering)- Only Desktop

# [Vercel Deployment](https://react-blog-nine-zeta.vercel.app/)

Highlight: dynamic rendering through parameters with the `react-router-dom`

# Dynamical Render of Detail Page with `react-router-dom`:

1 - in App use one Parameter, in this Repository for example I used this name `:idArticle` in my path. You can choose what you want `:yourParameterName`.

```jsx
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
     {//⬇️ Here below ⬇️}
          <Route path="/blog/article/:idArticle" element={<Article />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

2 - I extract this parameter in the element that I need (in my case Article). Import {useParams} and put in your Component:

```jsx
import Header from "../component/Header/Header";
import { blogData } from "../db/blogdata";
import Detail from "../component/Detail/Detail";
//⬇️ Here below ⬇️
import { useParams } from "react-router-dom";
import "./Article.scss";

const Article = () => {
  //⬇️ Here below ⬇️
  const { idArticle } = useParams();

  // Search in your data the Object (here articleDetail ) the same id as the core matched with your parameter (here idArticle)

  const articleDetail = blogData.find(
    (article) => article.id === Number(idArticle)
  );

  if (!articleDetail) {
    return <div>Article not found</div>;
  }

  // You can give the values of the object found to your component

  return (
    <>
      <Header />
      <div className="article-wrapper">
        <Detail
          url={articleDetail.img_url}
          title={articleDetail.title}
          date={articleDetail.published_date}
          text={articleDetail.description}
          author={articleDetail.author}
        />
      </div>
    </>
  );
};

export default Article;
```

3 - In the Object that you need the dynamic reending you have to give it the property of an id in the route (in my case in the Component Card the propierty `idPropierty`)

```jsx

import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({ url, title, idPropierty }) => {
  return (
    <div className="card-wrapper">
      <div className="img-card-wrapper">
        <img src={url} alt={title} />
      </div>
      <h2>{title}</h2>
       {//⬇️ Here below ⬇️}
      <Button href={`/blog/article/${idPropierty}`} buttonName="Read more" />
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  idPropierty: PropTypes.number,
};

export default Card;

```

4 - When we do the dynamic rendering of the page we give the idPropierty the id of our data.

```jsx
import Header from "../component/Header/Header";
import Card from "../component/Card/Card";
import { blogData } from "../db/blogdata";
import "./Blog.scss";

const Blog = () => {
  return (
    <>
      <Header />
      <section className="blog-wrapper">
        {blogData.map((info) => (
          <Card
            key={info.id}
            url={info.img_url}
            title={info.title}
                  {//⬇️ Here below ⬇️}
            idPropierty={info.id}
          ></Card>
        ))}
      </section>
    </>
  );
};

export default Blog;
```

# How to set it up this repo

Clone this repository

Install all dependencies: `npm install`

Run app in dev mode: npm run dev

Open your localhost

# Used

npm install

npm install react-router-dom

npm install -D sass

npm i prop-types

<div>

<img src="./public/img/readme1.png" alt="readme picture" width="500px">
<img src="./public/img/readme2.png"alt="readme picture" width="500px">
<img src="./public/img/readme3.png" alt="readme picture" width="500px">

</div>
