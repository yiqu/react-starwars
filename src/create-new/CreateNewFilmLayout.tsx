import React from "react";
import { Outlet } from "react-router-dom";

const CreateNewFilmLayout = () => {

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default CreateNewFilmLayout;