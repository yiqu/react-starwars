import { format } from 'date-fns';


export interface DateDisplay2Props {
  dateInMilli: number;
}

function DateDisplay2({ dateInMilli }: DateDisplay2Props) {
  return (
    <>
      { format(dateInMilli, 'MM/dd/yyyy p') }
    </>
  );
};

export default DateDisplay2;