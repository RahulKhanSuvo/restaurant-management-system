import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //  tan stack query
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/carts/${user?.email}`);
      return data;
    },
  });
  return [cart, refetch];
};

export default useCart;
