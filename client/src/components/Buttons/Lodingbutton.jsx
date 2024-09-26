import React from "react";
import { Button } from "react-bootstrap";

const Loadingbutton = ({ isLoading, loadingText, title, ...rest }) => {
  return (
    <Button variant="primary" disabled={isLoading} {...rest}>
      {isLoading ? loadingText : title}
    </Button>
  );
};

// Define default props for the Loadingbutton component
Loadingbutton.defaultProps = {
  isLoading: false,
  loadingText: "Loading...",
  title: "Submit",
};

export default Loadingbutton;
