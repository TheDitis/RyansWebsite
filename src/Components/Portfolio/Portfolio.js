import React, {useState, useEffect} from 'react';
import styles from './Portfolio.module.css';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import {AnimatePresence, AnimateSharedLayout} from "framer-motion";
import uuid from 'react-uuid';
import portfolioCardInfo from "./portfolioCardInfo";
import PortfolioCardDetails from "./PortfolioCardDetails/PortfolioCardDetails";

const Portfolio = props => {
    const [showCard, setShowCard] = useState(-1);  // set to the index of the card to show details for, or -1 if none

    useEffect(() => {
        console.log('Card Index: ', showCard)
    }, [showCard]);


    return (
        <div className={styles.Portfolio}>
            {/*<h2>Portfolio</h2>*/}
            <div className={styles.scrollSection}>
                <div  className={styles.cardRow}>
                    <AnimateSharedLayout>
                        {portfolioCardInfo.map((obj, index) => {
                            return (
                                <PortfolioCard
                                    key={uuid()}
                                    {...obj}
                                    index={index}
                                    showCard={showCard}
                                    setShowCard={setShowCard}
                                />
                            )
                        })}
                    </AnimateSharedLayout>
                </div>
            </div>
            <AnimatePresence>
                {showCard !== -1 ? (
                    <PortfolioCardDetails
                        index={showCard}
                        setShowCard={setShowCard}
                        basicInfo={portfolioCardInfo[showCard]}
                    />
                    ) : null
                }
            </AnimatePresence>

        </div>
    )
};


export default Portfolio;