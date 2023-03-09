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
  body2: {
    fontSize: '16px'
  },
  h4: {
    fontSize: '21px'
  },
  h5: {
    fontSize: '18px'
  },
  h6: {
    fontSize: '15px'
  }
};

export const ELLIPIS_STYLE = {
  whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis'
};