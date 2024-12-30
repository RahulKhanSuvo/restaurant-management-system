import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import bg from "../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <div className="">
        <Cover
          img={bg}
          title={"OUR MENU"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
      </div>
    </div>
  );
};

export default Menu;
