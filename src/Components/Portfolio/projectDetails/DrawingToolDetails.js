import React from 'react';
import styles from '../PortfolioCardDetails/PortfolioCardDetails.module.css';


const DrawingToolDetails = props => {
    return (
        <div className={styles.projectInfo}>
            {/*<h1>Drawing Tool</h1>*/}
            <p>A tool for making angle and relative distance measurements on reference photos for artists.</p>
            <br/><br/>
            <a href={"https://ryan-s-cool-drawing-tool.firebaseapp.com/"} ><p>Check it out here!</p></a>
        </div>
    )
};


export default DrawingToolDetails;