import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function notifySuccess(message) {
    toast.success(message, {
      //position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  export function notifyError() {
    toast.error("Error Notification!", {
      //position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
  };

  export function notifyInfo(){
    toast.info("Info Notification!", {
      //position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
  };

  export function notifyWarning (){
    toast.warn("Warning Notification!", {
      //position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };