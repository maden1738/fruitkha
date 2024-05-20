import axios from "axios";
import Breadcrumb from "../components/common/Breadcrumb";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/domain";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Products from "../components/home/Products";
import { useDispatch } from "react-redux";
import { updateCart } from "../app/slice/cartSlice";
import { toast } from "react-toastify";
import { toastSettings } from "../constants/settings";

export default function ShopSingle() {
  interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
    [key: string]: any;
  }

  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/fruit/${slug}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  return (
    <>
      <Breadcrumb heading="Single Product" subHeading="see more details" />
      <div className="wrapper mt-36">
        {product ? (
          <div className="flex items-center gap-10">
            <img
              src={product.image}
              alt="Fruit Image"
              className="aspect-square w-[445px] shadow-xl"
            />
            <div className="font-open text-secondary">
              <h3 className="mb-4 font-poppins text-2xl font-semibold">
                {product.name}
              </h3>
              <p className="mb-3 text-xl">Per Kg</p>
              <p className="mb-3 text-3xl font-bold">Rs {product.price}</p>
              <p className="mb-4 text-[#555555]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                sint dignissimos, rem commodi cum voluptatem quae reprehenderit
                repudiandae ea tempora incidunt ipsa, quisquam animi perferendis
                eos eum modi! Tempora, earum.
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  dispatch(
                    updateCart({
                      id: product._id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: (event.target as HTMLFormElement).quantity
                        .value,
                    }),
                  );
                  toast.success("Product added to cart", toastSettings);
                }}
              >
                <input
                  name="quantity"
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="mb-4 block h-[42px] w-[100px] rounded-sm border p-2"
                />
                <button className="button1 flex items-center gap-2">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex h-screen w-full items-center justify-center text-4xl ">
            Loading....
          </div>
        )}
      </div>
      <Products title="Related" />
    </>
  );
}
