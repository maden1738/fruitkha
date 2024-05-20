import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { FaRegWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateCart } from "../../app/slice/cartSlice";

const SHIPPING_COST = 90;

export default function CartTable() {
  const cartItems = useSelector((store: RootState) => store.cart.value);
  const dispatch = useDispatch();

  interface Row {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }

  function calculateSubTotal(items: readonly Row[]) {
    return items.map(({ total }) => total).reduce((sum, i) => sum + i, 0);
  }

  function createData(
    id: string,
    image: string,
    name: string,
    price: number,
    quantity: number,
    total: number,
  ) {
    return { id, image, name, price, quantity, total };
  }

  const rows = cartItems.map((cartItem) =>
    createData(
      cartItem.id,
      cartItem.image,
      cartItem.name,
      cartItem.price,
      cartItem.quantity,
      cartItem.quantity * cartItem.price,
    ),
  );
  const subTotal = calculateSubTotal(rows);
  const grandTotal = subTotal + SHIPPING_COST;

  return (
    <TableContainer component={Paper} sx={{ width: "60vw" }}>
      <Table aria-label="spanning table">
        <TableHead className="bg-background text-base">
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Product Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Price (Rs)</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="text-sm">
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <FaRegWindowClose
                  onClick={() => {
                    dispatch(updateCart({ id: row.id, quantity: 0 }));
                  }}
                  className="cursor-pointer hover:text-red-600"
                />
              </TableCell>
              <TableCell align="center">
                <img
                  src={row.image}
                  alt=""
                  className="mx-auto aspect-square w-[60px] "
                />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">
                <input
                  name="quantity"
                  type="number"
                  min={1}
                  className="h-[42px] w-[100px] rounded-sm border p-2"
                  value={row.quantity}
                  onChange={(event) => {
                    dispatch(
                      updateCart({
                        id: row.id,
                        name: row.name,
                        image: row.image,
                        price: row.price,
                        quantity: event.target.value,
                      }),
                    );
                  }}
                />
              </TableCell>
              <TableCell align="center">{row.total}</TableCell>
            </TableRow>
          ))}
          <TableRow className="">
            <TableCell rowSpan={3} colSpan={4} />
            <TableCell align="center" className="font-bold">
              <span className=" font-bold"> Subtotal</span>
            </TableCell>
            <TableCell align="center">Rs {subTotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <span className="font-bold">Shipping</span>
            </TableCell>
            <TableCell align="center">Rs {SHIPPING_COST}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <span className="font-bold">Total</span>
            </TableCell>
            <TableCell align="center">Rs {grandTotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
