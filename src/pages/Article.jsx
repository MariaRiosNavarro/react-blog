import Header from "../component/Header/Header";
import { blogData } from "../db/blogdata";
import Detail from "../component/Detail/Detail";
import { useParams } from "react-router-dom";

const Article = () => {
  const { idArticle } = useParams();

  const articleDetail = blogData.find(
    (article) => article.id === Number(idArticle)
  );

  if (!articleDetail) {
    return <div>Article not found</div>;
  }
  return (
    <>
      <div className="article-wrapper">
        <Header />
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
