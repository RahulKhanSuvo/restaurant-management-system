import Category from "../Category/Category";
import Banner from "./Banner";
import Feature from "./Feature";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </section>
      <Feature></Feature>
    </div>
  );
};

export default Home;
