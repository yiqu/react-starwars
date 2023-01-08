import { Box } from "@mui/material";
import { ReactNode } from "react";
import classes from './LoadingBackdrop.module.scss';

export interface LoadingBackdropProps {
  isLoading?: boolean;
  children?:  ReactNode | undefined;
}

function LoadingBackdrop({ isLoading, children }: LoadingBackdropProps) {

  return (
    <Box className={ isLoading ? `${classes.loadingbackdrop}` :'' } width="100%">
      { children }
    </Box>
  );
};

export default LoadingBackdrop;