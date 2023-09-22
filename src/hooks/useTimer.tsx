'use client';
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow, differenceInSeconds, parse } from 'date-fns';

interface CountdownProps {
  targetDate: string; // Date in the format 'MM/dd/yyyy'
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const parsedTargetDate = parse(targetDate, 'MM/dd/yyyy', new Date());
  const [timeRemaining, setTimeRemaining] = useState<string | null>(
    formatDistanceToNow(parsedTargetDate, { includeSeconds: true })
  );

  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  // const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now > parsedTargetDate) {
        clearInterval(intervalId);
        setTimeRemaining('Countdown expired');
      } else {
        const remainingSeconds = differenceInSeconds(parsedTargetDate, now);
        const days = Math.floor(remainingSeconds / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        // const seconds = remainingSeconds % 60;

        // setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setTimeRemaining(`${days}`);
        setHours(hours);
        setMinutes(minutes);
        // setSeconds(seconds);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [parsedTargetDate]);

  return (
    <div>
      <div className="flex font-itim font-normal bg-black text-white p-2 md:pt-3 md:pb-3 md:pr-4 md:pl-4 rounded-lg gap-2">
        <h3 className="font-itim">{timeRemaining}days</h3>:
        <h3>
          {hours}
          <span className="font-caveat">hrs</span>
        </h3>
        :
        <h3>
          {minutes}
          <span className="font-caveat">mins</span>
        </h3>
        {/* :
        <h3>
          {seconds}<span className="font-caveat">Secs</span>
        </h3> */}
      </div>
    </div>
  );
};

export default Countdown;
