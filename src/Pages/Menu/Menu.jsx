import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import bg from "../../assets/menu/banner3.jpg";
import dbg from "../../assets/menu/dessert-bg.jpeg";
import pbg from "../../assets/menu/pizza-bg.jpg";
import saladbg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  console.log(salad);

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={bg}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      {/* main cover */}
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>
      {/* offer menu item */}
      <MenuCategory img={bg} item={offered}></MenuCategory>
      {/* dessert item */}
      <MenuCategory
        title={"dessert"}
        img={dbg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        item={dessert}
      ></MenuCategory>
      <MenuCategory
        title={"pizza"}
        img={pbg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        item={pizza}
      ></MenuCategory>
      <MenuCategory
        title={"salad"}
        img={saladbg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        item={salad}
      ></MenuCategory>
      <MenuCategory
        title={"soup"}
        img={soupBg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        item={soup}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
