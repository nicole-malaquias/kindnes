import { toast } from "react-toastify";

export const options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
};
export const toastErrorAddHabitRandom = () => {
  toast.error("Unable to add this habit", options);
};

export const toastErrorRegister = () => {
  toast.error("That didn't work, try another username", options);
};
export const toastSuccessRegister = () => {
  toast.success("Yes!!!You just registered");
};
export const toastLogin = () => {
  toast.dark("Couldn't login, try again");
};

export const toastLoadGroupsError = () => {
  toast.error("Couldn't load groups, try again");
};
