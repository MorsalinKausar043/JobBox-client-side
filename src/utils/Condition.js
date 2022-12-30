import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toastSuccess, toastyWarning } from "../components/toastify/Toastify";

export const Condition = () => {
  const { email, isError, errorMassage } = useSelector((state) => state.auth);

  useEffect(() => {
    
  if (email) {
    return toastSuccess("Successfully login!");
  }

  if (!email && isError) {
    return toastyWarning(errorMassage);
  } 
  },[email, isError,errorMassage])
};

