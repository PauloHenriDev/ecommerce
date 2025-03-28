'use client'
import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState({ days: 5, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return prevTime;
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            if (days > 0) {
                                days--;
                                hours = 23;
                                minutes = 59;
                                seconds = 59;
                            }
                        } else {
                            hours--;
                            minutes = 59;
                            seconds = 59;
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
        <div className="flex text-[32px] font-poppins font-semibold">
            <span className="pr-[17px]">{String(time.days).padStart(2, "0")}</span>
            <span className="text-gray-500">:</span>
            <span className="px-[17px]">{String(time.hours).padStart(2, "0")}</span>
            <span className="text-gray-500">:</span>
            <span className="px-[17px]">{String(time.minutes).padStart(2, "0")}</span>
            <span className="text-gray-500">:</span>
            <span className="pl-[17px]">{String(time.seconds).padStart(2, "0")}</span>
        </div>
    );
};

export default CountdownTimer;
