import React, {useState, useEffect} from 'react';
import styles from './PortfolioCard.module.css';
import {motion, AnimateSharedLayout} from "framer-motion";


const PortfolioCard = props => {

    return (
        <motion.div
            className={styles.PortfolioCard}
            onClick={() => props.setShowCard(props.index)}  // call the function to show details, passing the index
            // while hovering over the card, englarge it if the details window isn't showing:
            whileHover={props.showCard === -1 ? {scale: 1.1, marginLeft: 100, marginRight: 100} : {scale: 1}}
        >
            <h2 className={styles.title}>{props.title}</h2>
            <img className={styles.image}
                 src={props.image}
                 alt={"Project Image"}
                 width={"90%"}
            />
            <div className={styles.bottomSection}>
                <p className={styles.description}>{props.description}</p>
            </div>
        </motion.div>
    )
};

export default PortfolioCard;