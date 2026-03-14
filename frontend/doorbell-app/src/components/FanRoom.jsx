import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FanRoom = ({ leaveRoom }) => {

    const [time, setTime] = useState(0);

    useEffect(() => {

        console.log("Fan Started");

        const timer = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Fan stopped");
        }

    }, []);

    return (

        <div className="room">

            <h2>🚪 Room Opened</h2>

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear"
                }}
                className="fan"
            >
                🌀
            </motion.div>

            <h3>Fan running for {time} seconds</h3>

            <button onClick={leaveRoom} className="leave-btn">
                Leave Room
            </button>

        </div>
    );
};

export default FanRoom;