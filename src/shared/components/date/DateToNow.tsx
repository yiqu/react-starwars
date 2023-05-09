import { formatDistanceToNow } from 'date-fns';

export interface DateDisplay2Props {
  dateInMilli: number | undefined;
}

function DateToNow({ dateInMilli }: DateDisplay2Props) {
  return (
    <>
      { (dateInMilli !== undefined) && formatDistanceToNow(dateInMilli, { includeSeconds: true }) }
    </>
  );
};

export default DateToNow;