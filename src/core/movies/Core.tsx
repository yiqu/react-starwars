import React from "react";
import { Outlet } from "react-router-dom";

const Core = () => {

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default Core;