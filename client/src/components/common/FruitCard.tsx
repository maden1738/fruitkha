import { FaShoppingCart } from "react-icons/fa";

type FruitCardProps = {
  image: string;
  name: string;
  price: number;
};

export default function FruitCard({ image, price, name }: FruitCardProps) {
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
      <button className=" button3 mt-5 ">
        <FaShoppingCart className="text-base" />
        <p>Add to Cart</p>
      </button>
    </div>
  );
}
