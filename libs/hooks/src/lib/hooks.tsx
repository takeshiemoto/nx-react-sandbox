import { useEffect, useState } from 'react';

export const useCurrentDate = (interval: number) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, interval);
    return () => clearInterval(timer);
  });

  return date;
};
