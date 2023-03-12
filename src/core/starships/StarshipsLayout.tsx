import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "src/store/appHook";
import { fetchPlanets } from "../store/planets";

function Starships() {
  return (
    <Outlet />
  );
};

export default Starships;