import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../app/store";
import { toastSettings } from "../constants/settings";

type CallbackFunction = () => void;

export default function checkAuthentication() {
  let user = useSelector((store: RootState) => store.user.value);
  return (callback: CallbackFunction) => {
    if (user) {
      callback();
    } else {
      toast.info("Login Required", toastSettings);
    }
  };
}

// export default function useState() {
//   return [initialValiu,()=>{}]
// }
