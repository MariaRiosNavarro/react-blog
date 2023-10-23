import Header from "../component/Header/Header";
import Button from "../component/Button/Button";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <Header />
        <section>
          <h1>Welcome to my simple Blog</h1>
          <Button href={"/blog"} buttonName="Go to the articles" />
        </section>
      </div>
    </>
  );
};

export default Home;
