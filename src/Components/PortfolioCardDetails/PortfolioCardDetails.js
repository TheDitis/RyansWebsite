import React from 'react';
import styles from './PortfolioCardDetails.module.css';
import {motion, AnimatePresence} from "framer-motion";


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
                <h1>TEST</h1>
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
                <img className={styles.mainImage} src={props.basicInfo.image} alt={"Project Image"}/>
            </div>

        </motion.div>
    )
};


export default PortfolioCardDetails;