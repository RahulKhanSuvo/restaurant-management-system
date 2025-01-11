import {
  FaBook,
  FaBookmark,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaMoneyBill,
  FaShoppingCart,
  FaStar,
  FaUtensils,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi2";
const Dashboard = () => {
  // Todo: get admin vale from database
  const isAdmin = true;
  return (
    <div className="flex lg:container mx-auto">
      {/* sidebar */}
      <div className="w-64 min-h-screen  bg-[#D1A054]">
        <div className="text-black mb-7">
          <h3 className="font-black text-3xl">BISTRO BOSS</h3>
          <p className="font-bold">Restaurant</p>
        </div>
        {isAdmin ? (
          <>
            <ul className="menu">
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <IoMdHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItem"}>
                  <FaUtensils /> add items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItem"}>
                  <FaList /> manage items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/mangeBooking"}>
                  <FaBook />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <HiUserGroup />
                  all users
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="menu">
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaMoneyBill /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addReview"}>
                  <FaStar /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/myBooking"}>
                  <FaBookmark /> My Booking
                </NavLink>
              </li>
            </ul>
          </>
        )}

        <div className="divider"></div>
        <div className="flex flex-col menu px-6">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/menu"}>Menu</NavLink>
          <NavLink to={"/order/salad"}>Order</NavLink>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
