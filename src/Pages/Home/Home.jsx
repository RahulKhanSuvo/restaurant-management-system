import Category from "../Category/Category";
import Banner from "./Banner";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </section>
    </div>
  );
};

export default Home;
