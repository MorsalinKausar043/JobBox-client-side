import { toast } from "react-toastify";

const toastInfo = (data) => toast.info(data);
const toastSuccess = (data) => toast.success(data);
const toastyWarning = (data) => toast.warning(data);
const toastError = (data) => toast.error(data);

export {toastError, toastInfo, toastSuccess, toastyWarning};