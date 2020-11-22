import React, { useEffect, useRef, useState } from "react";
import ParticlesBg from "particles-bg";
import Countdown from "./CountdownTimer";
import Home from "./Home";

const useExpired = time => {
  const [expired, setExpired] = useState(false);
  const timoutRef = useRef();
  useEffect(() => {
    timoutRef.current = setTimeout(() => {
      setExpired(true);
    }, time);
    return () => {
      clearTimeout(timoutRef.current);
    };
  }, [time]);
  return expired;
};

//const BIRTHDAY_DATE = Date.parse("07 Dec 2020 00:00:00 PST");
const BIRTHDAY_DATE = Date.now() + 5 * 1000;
const Main = () => {
  const timeToExpire = Math.max(BIRTHDAY_DATE - Date.now(), 0);
  const expired = useExpired(timeToExpire);
  if (!expired) {
    return (
      <>
        <ParticlesBg type="random" bg={true} />
        <Countdown to={BIRTHDAY_DATE} />
      </>
    );
  }

  return <Home />;
};

export default Main;
