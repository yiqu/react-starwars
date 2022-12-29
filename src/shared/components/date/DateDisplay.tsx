import { Tooltip } from '@mui/material';
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
      <span>
        {date ? (<Moment date={ date } fromNow={ fromNow } />) : (<>N/A</>)}
      </span>
    </Tooltip>
  );
};

export default DateDisplay;