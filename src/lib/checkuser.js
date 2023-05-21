import { toast } from "react-toastify";

export function CheckUser() {
  toast("You must be logged in to perform this action", {
    position: "top-center",
    type: "error",
  });
}
