// export default function Clock() {
//     let hours = 12;
//     let minutes = 0;
//     let seconds = 0;

//     const interval = setInterval(() => {
//         console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

//         if (hours === 0 && minutes === 0 && seconds === 0) {
//             clearInterval(interval);
//             console.log("Tempo Esgotado!");
//             return;
//         }

//         if (seconds === 0) {
//             if (minutes === 0) {
//                 if (hours >  0) {
//                     hours--;
//                     minutes = 59;
//                     seconds = 59;
//                 }
//             } else {
//                 minutes--;
//                 seconds = 59;
//             }
//         } else {
//             seconds--;
//         }
//     }, 1000);
// }

'use client'
import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState({ hours: 12, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                let { hours, minutes, seconds } = prevTime;

                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return prevTime;
                }

                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours > 0) {
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

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {String(time.hours).padStart(2, "0")}:
            {String(time.minutes).padStart(2, "0")}:
            {String(time.seconds).padStart(2, "0")}
        </div>
    );
};

export default CountdownTimer;
