import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/menu"}>Menu</NavLink>
    </>
  );
  return (
    <nav
      className="fixed z-50 py-5 px-12 w-full justify-between items-center flex"
      style={{ background: "rgba(21, 21, 21, 0.5)" }}
    >
      {/* logo */}
      <div className="text-white">
        <h3 className="font-black text-3xl">BISTRO BOSS</h3>
        <p className="font-bold">Restaurant</p>
      </div>
      {/* nav link */}
      <div className="text-white">
        <div className="flex gap-4">{links}</div>
      </div>
    </nav>
  );
};

export default NavBar;
