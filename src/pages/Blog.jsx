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
          <Card key={info.id} url={info.img_url} title={info.title}></Card>
        ))}
      </section>
    </>
  );
};

export default Blog;
