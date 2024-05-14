import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slice/cartSlice";

type FruitCardProps = {
  image: string;
  name: string;
  price: number;
};

export default function FruitCard({ image, price, name }: FruitCardProps) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center rounded-md pb-12 font-poppins shadow-lg hover:shadow-none">
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
          dispatch(addToCart({ image, price, name }));
        }}
      >
        <FaShoppingCart className="text-base" />
        <p>Add to Cart</p>
      </button>
    </div>
  );
}
