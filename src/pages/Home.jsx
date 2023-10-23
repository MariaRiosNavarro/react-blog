import Header from "../component/Header/Header";
import Button from "../component/Button/Button";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <Header imgpath="/img/home.png" />
      <section className="home-body">
        <h1>Welcome to my simple Blog</h1>
        <Button href={"/blog"} buttonName="Go to the articles" />
      </section>
    </>
  );
};

export default Home;
