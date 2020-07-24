import React from 'react';
import styles from '../PortfolioCardDetails/PortfolioCardDetails.module.css';


const BlueBoxDetails = props => {
    return (
        <div className={styles.projectInfo}>
            <p>A modular MIDI controller I designed in 2016.</p>
            <br/><br/>
            <img
                src="https://raw.githubusercontent.com/TheDitis/BlueBox/master/BlueBox_2.11(6x6_partial_fill).png"
                alt="Example Image"
                className="projectImage"
            />
            <br/><br/>
            <h2>Overview</h2>
            <p>
                BlueBox is a fully modular high-end MIDI controller I designed in 2016. I worked on this product idea
                for about 9 months, building prototypes and working with the Denver SBDC (Small Business Development
                Center) to figure out how to get the company going. This project has been on put on the shelf for the
                time being. I hope to continue with it in the future.
            </p>
            <img
                src="https://raw.githubusercontent.com/TheDitis/BlueBox/master/BlueBox_2.11(6x6_empty).png"
                alt="Example Image"
                className={"projectImage"}
            />
            <img
                src="https://raw.githubusercontent.com/TheDitis/BlueBox/master/BlueBox_2.11(6x6).png"
                alt="Example Image"
                className={"projectImage"}
            />

            <h2>Concept</h2>
            <ul>
                <li>Offer main base unit in several sizes, with differing numbers of slots (6x6, 9x9, & 12x12)</li>
                <li>The "slots" are just sets of magnets/clips and pogo-pin connections on the base unit, making up a grid.</li>
                <li>Modules are offered for each different control type, and take up varying numbers of slots. See below for a list of module types.</li>
                <li>Artists could configure their controler to fit their needs for any given task, meaning that they would only need one controller with dynamic functionality, rather than several controllers, each for a different task.</li>
            </ul>

            <h2>Modules:</h2>
            <ull>
                <li>Classic Fader</li>
                <li>Touch Fader</li>
                <li>Classic Knob</li>
                <li>Rotary Knob</li>
                <li>Button</li>
                <li>Velocity Sensitive Drum Pad</li>
                <li>Joystick</li>
                <li>Pitchbend Wheel</li>
                <li>Modulation Wheel</li>
                <li>Breath Controller</li>
                <li>Keyboard Module (attaches to front)</li>
            </ull>
        </div>
    )
};


export default BlueBoxDetails;