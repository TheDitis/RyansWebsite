import React from 'react';
import styles from './Navbar.module.css'


const Navbar = props => {
    return (
        <div className={styles.Navbar}>

            <div className={styles.topSection}>
                <h1 className={styles.siteTitle}>Ryan's Site</h1>
            </div>
            <div className={styles.bottomSection}>
                <a href={"/"} className={styles.navLink}>
                    <h4 >Projects</h4>
                </a>
                <a href={"about"} className={styles.navLink}>
                    <h4>About Me</h4>
                </a>
            </div>
        </div>
    )
}


export default Navbar;