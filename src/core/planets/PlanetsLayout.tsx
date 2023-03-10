import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "src/store/appHook";
import { fetchPlanets } from "../store/planets";

function Planets() {

  const dispatch = useAppDispatch();

  
  return (
    <Outlet />
  );
};

export default Planets;