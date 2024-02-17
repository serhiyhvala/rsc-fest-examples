"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState<Date>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setTime2(new Date());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p suppressHydrationWarning>{format(time, "hh:mm:ss.S a")}</p>
      <p>{time2 ? format(time2, "hh:mm:ss.S a") : "---"}</p>
    </div>
  );
};
