import { useState, useEffect } from "react";
import"./CountdownTimer.scss"

interface CountdownProps {
  targetDate: string; // Expected in "YYYY-MM-DDTHH:mm:ss" format
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="cunt-down d-flex">
        <div>
          <div>
            Days
          </div>
          <div>
            {timeLeft.days}
          </div>
        </div>
        <div>
          <div>
            Hours
          </div>
          <div>
            {timeLeft.hours}
          </div>
        </div>
        <div>
          <div>
            Minutes
          </div>
          <div>
            {timeLeft.minutes}
          </div>
        </div>
        <div>
          <div>
            Seconds
          </div>
          <div className="neglect-last">
            {timeLeft.seconds}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
