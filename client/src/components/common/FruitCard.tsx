import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slice/cartSlice";
import checkAuthentication from "../../hooks/checkAuthentication";
import { toast } from "react-toastify";
import { toastSettings } from "../../constants/settings";
import { useNavigate } from "react-router-dom";

type FruitCardProps = {
  id: string;
  image: string;
  name: string;
  price: number;
};

export default function FruitCard({ image, price, name, id }: FruitCardProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticate = checkAuthentication();
  return (
    <div
      className="flex cursor-pointer flex-col items-center rounded-md pb-12 font-poppins shadow-lg hover:shadow-none"
      onClick={() => {
        navigate(`shop/${id}`);
      }}
    >
      <div className="px-8 pt-8 ">
        <img src={image} alt="" className="aspect-square h-[261px]" />
      </div>
      <h3 className=" text-center text-xl font-bold text-primary">{name}</h3>
      <div className="text-center">
        <p className="mt-3 text-sm text-primary">Per Kg</p>
        <p className="mt-3 text-2xl font-bold">Rs.{price}</p>
      </div>
      <button
        className=" button3 mt-5 "
        onClick={() => {
          authenticate(() => {
            dispatch(addToCart({ image, price, name, id }));
            toast.success("Product added to cart", toastSettings);
          });
        }}
      >
        <FaShoppingCart className="text-base" />
        <p>Add to Cart</p>
      </button>
    </div>
  );
}
