import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const handelAddToCart = async () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      try {
        const { data } = await axiosSecure.post("/carts", cartItem);
        console.log(data);
        Swal.fire({
          toast: true,
          icon: "success",
          timer: 1500,
          text: `${name} added to your cart`,
        });
        refetch();
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        toast: true,
        text: "please login to add the cart",
      });
      navigate("/login", { state: { form: location } });
    }
  };
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-black text-white absolute top-3 px-2 right-3">
        {" "}
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handelAddToCart} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
