import React from "react";
import { motion } from "framer-motion";
import bellSound from "../assets/doorbell.mp3";

const DoorBell = ({ enterRoom }) => {

    const ringBell = () => {

        const audio = new Audio(bellSound);
        audio.play();

        setTimeout(() => {
            enterRoom();
        }, 1000);
    };

    return (
        <div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={ringBell}
                className="bell-btn"
            >
                🔔 Press Door Bell
            </motion.button>

        </div>
    );
};

export default DoorBell;