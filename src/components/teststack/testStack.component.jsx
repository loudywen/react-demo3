import React, { useState } from "react";
import "./testStack.styles.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

const TestStack = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="testStackParent">
      <div className="box1">
        box1
        <button>button 1</button>
      </div>
      <div className="box2">
        box2
        <Backdrop
          className="mybackdrop"
          open={open}
          style={{ backgroundColor: "rgba(0 0, 0, 0.5)" }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <button>button 2</button>
      </div>
    </div>
  );
};

export default TestStack;
