import { formatDistanceToNow } from 'date-fns';

export interface DateDisplay2Props {
  dateInMilli: number;
}

function DateToNow({ dateInMilli }: DateDisplay2Props) {
  return (
    <>
      { formatDistanceToNow(dateInMilli, { includeSeconds: true }) }
    </>
  );
};

export default DateToNow;