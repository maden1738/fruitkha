import Breadcrumb from "../components/common/Breadcrumb";
import CartTable from "../components/cart/CartTable";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb heading="Cart" subHeading="fresh and organic" />
      <div className="wrapper my-36 flex flex-col items-center">
        <CartTable />
        <button
          className="button1 mx-auto mt-10  w-fit"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Check Out
        </button>
      </div>
    </>
  );
}
