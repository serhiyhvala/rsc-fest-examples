"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <p>{format(time, "hh:mm:ss.S a")}</p>;
};
