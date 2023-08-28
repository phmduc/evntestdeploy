import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Countdown = ({ nextSessionTime, time }) => {
  const calculateTimeLeft = () => {
    const now = moment();
    let nextSession = moment(nextSessionTime, 'HH[h]mm')
    
    const duration = moment.duration(nextSession.diff(now));
    return {
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [remainingTime, setRemainingTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [nextSessionTime]);

  return (
    <>
      {`${String(remainingTime.hours).padStart(2, '0')}h ${String(remainingTime.minutes).padStart(2, '0')}m ${String(remainingTime.seconds).padStart(2, '0')}s`}
    </>
  );
};

export default Countdown;
