import React from 'react';
import styles from './Footer.module.css';
import useTime from "../hooks/useTime";
import gitHubImage from '../../Public/Images/github.svg';

const Footer = props => {
    const time = useTime(1000);

    return (
        <div className={styles.Footer}>
            <div className={styles.mainSection}>
                <a href={"https://github.com/TheDitis/"} style={{marginTop: 20}}>
                    <img
                        className={styles.gitHubImage}
                        src={gitHubImage}
                        alt={"Github"}
                        width={50}
                        style={{marginTop: 20}}
                    />
                </a>
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