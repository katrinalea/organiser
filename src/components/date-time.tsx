import React from "react";
import { useState, useEffect } from "react";

export const DateTime = (): JSX.Element => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000); // date time sets at an interval every 1000ms (1s), clean up resets the process prevents memory leaks

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};
