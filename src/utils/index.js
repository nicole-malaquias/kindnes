import { toast } from "react-toastify";

const options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
};

export const toastLogin = () => {
  toast.dark("Não foi possivel fazer o login");
};

export default toastLogin;
