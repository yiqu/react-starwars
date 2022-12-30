import { Palette } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const MyTypography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined  = {
  fontFamily: ['Roboto', 'Poppins'].join(','),
  subtitle1: {
    fontWeight: 300
  },
  subtitle2: {
    fontWeight: 400,
  },
  
};