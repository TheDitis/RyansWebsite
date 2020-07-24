import React from 'react';
import styles from '../PortfolioCardDetails/PortfolioCardDetails.module.css';


const PoolPredictorDetails = props => {
    return (
        <div className={styles.projectInfo}>
            <div className="projectHeader">
                <p>Looks at overhead video of billiards table, detects boundaries and balls, and predicts the angles and motion of balls.</p>
            </div>
            <br/><br/>
            <h2>Overview</h2>
            <p>
                Currently, it will play the video, circling each ball with it's color, and draw trajectories when the
                ball starts moving. It currently does a decent job with single bounce reflections, but the bounce
                algorithm still needs to be made recursive. The reflection algorithm also needs to be tweaked so that
                the reflection vector doesn't grow larger as the ball approaches the wall. Balls turn red when they are
                going to be hit by a ball in motion. This area still needs a little work as well. OpenGL is required
                to acheive necessary speed, and so it may not run out of the box.
            </p>

            <h2>The Goal:</h2>
            <p>
                To be able to mount a camera and projector over a pool table, and project lines of motion. The hope is
                to identify when a que is lined up, so that a forecasted line of motion can be projected for the
                queball in realtime, showing which balls or walls might be hit, and draw any trajectory lines for
                those balls.
            </p>
        </div>
    )
};


export default PoolPredictorDetails;