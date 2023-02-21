import { Box, Tooltip, Typography } from '@mui/material';
import Moment from 'react-moment';
import moment from 'moment';

export interface DateDisplayProp {
  date: string | number;
  fromNow?: boolean;
  format?: string;
}

const DateDisplay = ({ date=0, fromNow=true, format="MM/DD/YY HH:mm" }: DateDisplayProp) => {

  return (
    <Tooltip title={ date ? moment(date).format(format) : 'No date found' }>
      <Typography component="span" display="flex" alignItems="center" justifyContent="center">
        {date ? (<Moment date={ date } fromNow={ fromNow } format={ fromNow ? undefined: format } />) : (<>N/A</>)}
      </Typography>
    </Tooltip>
  );
};

export default DateDisplay;