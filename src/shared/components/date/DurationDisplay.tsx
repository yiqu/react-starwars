import { formatDistance } from 'date-fns';


export interface DurationDisplayProps {
  durationInMilli: number;
}

function DurationDisplay({ durationInMilli }: DurationDisplayProps) {
  return (
    <>
      { (durationInMilli > 1000) ? (formatDistance(0, durationInMilli, { includeSeconds : true })) : (durationInMilli + ' ms') }
    </>
  );
};

export default DurationDisplay;