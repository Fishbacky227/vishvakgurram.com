import React, { useEffect, useRef, useState } from "react";
import ParticlesBg from "particles-bg";
import Countdown from "./CountdownTimer";
import Home from "./Home";
import Div100vh from "react-div-100vh";

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

const BIRTHDAY_DATE = Date.parse("07 Dec 2020 00:00:00 PST");
const Main = () => {
  const timeToExpire = Math.max(BIRTHDAY_DATE - Date.now(), 0);
  const expired = useExpired(timeToExpire);
  if (!expired) {
    return (
      <Div100vh>
        <ParticlesBg type="random" bg={true} />
        <Countdown to={BIRTHDAY_DATE} />
      </Div100vh>
    );
  }

  return (
    <Div100vh>
      <Home />
    </Div100vh>
  );
};

export default Main;
