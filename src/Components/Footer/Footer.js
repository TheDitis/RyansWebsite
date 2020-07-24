import React from 'react';
import styles from './Footer.module.css';
import useTime from "../hooks/useTime";

const Footer = props => {
    const time = useTime(1000);

    return (
        <div className={styles.Footer}>
            <h3>Footer</h3>
            <div className={styles.mainSection}>
                <h3>Github</h3>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.time}>
                    <h5>{time.toFormat('LLL dd, yyyy')}</h5>
                    <h5 style={{marginLeft: 10}}>{time.toFormat('hh:mm:ss')}</h5>
                </div>
            </div>
        </div>
    )
};


export default Footer;