import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "src/store/appHook";
import { fetchCharacters } from "../store/characters/characters.thunks";

const Characters = () => {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <Outlet />
  );
};

export default Characters;