import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // in ms
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1200,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let frame: number;
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
