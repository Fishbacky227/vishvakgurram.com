import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_DAY = 86400;

const getTimeMinutes = time =>
  ((time % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE) | 0;
const getTimeHours = time => ((time % SECONDS_PER_DAY) / SECONDS_PER_HOUR) | 0;
const getTimeDays = time => (time / SECONDS_PER_DAY) | 0;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const Countdown = ({ to }) => {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = to / 1000;

  const remainingTime = Math.round(endTime - startTime);
  const days = Math.ceil(remainingTime / SECONDS_PER_DAY);
  const daysDuration = days * SECONDS_PER_DAY;
  return (
    <div className="Countdown">
      <CountdownCircleTimer
        key={"days"}
        {...timerProps}
        colors={[["#7E2E84"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ remainingTime }) => renderTime("days", getTimeDays(remainingTime))}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        key={"hours"}
        {...timerProps}
        colors={[["#D14081"]]}
        duration={SECONDS_PER_DAY}
        initialRemainingTime={remainingTime % SECONDS_PER_DAY}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > SECONDS_PER_HOUR
        ]}
      >
        {({ remainingTime }) =>
          renderTime("hours", getTimeHours(remainingTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        key={"minutes"}
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={SECONDS_PER_HOUR}
        initialRemainingTime={remainingTime % SECONDS_PER_HOUR}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > SECONDS_PER_MINUTE
        ]}
      >
        {({ remainingTime }) =>
          renderTime("minutes", getTimeMinutes(remainingTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        key={"seconds"}
        {...timerProps}
        colors={[["#218380"]]}
        duration={SECONDS_PER_MINUTE}
        initialRemainingTime={remainingTime % SECONDS_PER_MINUTE}
        onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
      >
        {({ remainingTime }) => renderTime("seconds", remainingTime)}
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
