import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Banner from "./Banner";
import Feature from "./Feature";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <section className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </section>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
