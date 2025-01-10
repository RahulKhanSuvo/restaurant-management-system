import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../Hooks/useCart";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handelLogout = () => {
    logOut();
  };
  const activeStyle = {
    color: "#EEFF25",
    fontWeight: "bold",
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to={"/menu"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Menu
      </NavLink>
      <NavLink
        to={"/order/salad"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Order
      </NavLink>
      <NavLink to={"/dashboard/cart"}>
        <div className="relative">
          <button className="flex justify-center rounded-full border border-[#E08F21] size-11 items-center bg-[#006837]">
            <TiShoppingCart size={25} />
          </button>
          <div className="absolute bottom-0 right-0 bg-[#FF0000] size-5 flex justify-center text-sm border border-[#E08F21] rounded-full text-[#382A1F]">
            {cart.length}
          </div>
        </div>
      </NavLink>

      {user ? (
        <>
          <button onClick={handelLogout} className=" btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to={"/login"}>Login</NavLink>
        </>
      )}
    </>
  );
  return (
    <nav
      className="fixed z-50 py-5 px-12 w-full justify-between backdrop-blur-sm  items-center flex"
      style={{ background: "rgba(21, 21, 21, 0.5)" }}
    >
      {/* logo */}
      <div className="text-white">
        <h3 className="font-black text-3xl">BISTRO BOSS</h3>
        <p className="font-bold">Restaurant</p>
      </div>
      {/* nav link */}
      <div className="text-white">
        <div className="flex items-center gap-4">{links}</div>
      </div>
    </nav>
  );
};

export default NavBar;
