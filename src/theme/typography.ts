import { Palette } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const MyTypography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined  = {
  fontFamily: 'Roboto',
  subtitle1: {
    fontWeight: 300
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '12.5px',
    textTransform: 'capitalize'

  },
  body1: {
    fontSize: '14px'
  },
  h4: {
    fontSize: '21px'
  }
};