'use client'
import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState({ days: 0, hours: 60, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                let { days ,hours, minutes, seconds } = prevTime;

                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return prevTime;
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            if (days > 0) {
                                days--;
                                hours = 59;
                                minutes = 59;
                                seconds = 59;
                            }
                        } else {
                            hours--;
                            minutes = 59;
                        }
                    } else {
                        minutes--;
                        seconds = 59;
                    }
                } else {
                    seconds--;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {String(time.days).padStart(2, "0")}:
            {String(time.hours).padStart(2, "0")}:
            {String(time.minutes).padStart(2, "0")}:
            {String(time.seconds).padStart(2, "0")}
        </div>
    );
};

export default CountdownTimer;
