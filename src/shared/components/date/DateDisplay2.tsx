import { format } from 'date-fns';


export interface DateDisplay2Props {
  dateInMilli: number | undefined;
}

function DateDisplay2({ dateInMilli }: DateDisplay2Props) {
  return (
    <>
      { (dateInMilli !== undefined) && format(dateInMilli, 'MM/dd/yyyy p') }
    </>
  );
};

export default DateDisplay2;