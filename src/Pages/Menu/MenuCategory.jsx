import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ item, title, img, subTitle }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid mt-16 grid-cols-2 mb-8 max-w-screen-xl mx-auto gap-6">
        {item.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="uppercase border-b-2 rounded-xl hover:bg-[#1F2937] py-5 px-7 font-semibold">
          order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
