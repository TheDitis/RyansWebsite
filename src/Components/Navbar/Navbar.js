import React from 'react';
import styles from './Navbar.module.css'


const Navbar = props => {
    return (
        <div className={styles.Navbar}>

            <div className={styles.topSection}>
                <h1 className={styles.siteTitle}>Ryan's Site</h1>
            </div>
            <div className={styles.bottomSection}>

            </div>
        </div>
    )
}


export default Navbar;