import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handelGoogleSignIn = () => {
    googleSignIn()
      .then(async (result) => {
        console.log(result);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        try {
          await axiosPublic.post("/users", userInfo);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-center">
      <div className="button-wrapper">
        <button
          onClick={handelGoogleSignIn}
          className="text-lg hover:before:bg-[#ff0072] hover:before:rounded-md uppercase inline-block font-bold px-4 py-2 border-[2px] rounded-md text-red-600 relative shadow-md transition-all duration-300 ease-in-out z-[1]"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default GoogleButton;
