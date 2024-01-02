import { forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export const FeedBack = ({key,open,handleClose,message,type}) => {
  return (
    <Snackbar
    key={key}
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>
  )
}
