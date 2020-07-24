import React from 'react';
import styles from './PortfolioCardDetails.module.css';
import {motion} from "framer-motion";
import PoolPredictorDetails from "../projectDetails/PoolPredictorDetails";
import Drawing2WaveformDetails from "../projectDetails/Drawing2WaveformDetails";
import BlueBoxDetails from "../projectDetails/BlueBoxDetails";
import SpirogenDetails from "../projectDetails/SpirogenDetails";
import DrawingToolDetails from "../projectDetails/DrawingToolDetails";


const projectContents = [
    SpirogenDetails,
    PoolPredictorDetails,
    DrawingToolDetails,
    Drawing2WaveformDetails,
    BlueBoxDetails
];


const PortfolioCardDetails = props => {
    return (
        <motion.div
            className={styles.PortfolioCardDetails}
            animate={{scale: 1}}
            initial={{scale: 0}}
            transition={{duration: 0.2}}
            exit={{scale: 0}}
        >
            <div className={styles.titleRow}>
                <h1 className={styles.title}>{props.basicInfo.title}</h1>
                <a
                    className={styles.exitButton}
                    onClick={() => {
                        props.setShowCard(-1);
                        console.log("exit clicked")
                    }}
                >
                    X
                </a>
            </div>
            <div className={styles.contentSection}>
                <img className={styles.mainImage} src={props.basicInfo.image} alt={"Project Image"} width={"70%"}/>
                {projectContents[props.index]()}
            </div>

        </motion.div>
    )
};


export default PortfolioCardDetails;