import React from "react";
import { Outlet } from "react-router-dom";

const Favorites = () => {

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default Favorites;