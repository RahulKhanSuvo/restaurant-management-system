import {
  FaBookmark,
  FaCalendarAlt,
  FaHome,
  FaMoneyBill,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex lg:container mx-auto">
      {/* sidebar */}
      <div className="w-64 min-h-screen  bg-[#D1A054]">
        <div className="text-black mb-7">
          <h3 className="font-black text-3xl">BISTRO BOSS</h3>
          <p className="font-bold">Restaurant</p>
        </div>
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
        <div className="divider"></div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
