import Category from "../Category/Category";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;
