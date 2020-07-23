import React from 'react';


const PoolPredictorDetails = props => {
    return (
        <div className="projectInfo">
            <div className="projectHeader">
                <h1>SpiroGen</h1>
                <p>A Playground for Making Geometric Patterns</p>
            </div>
            <br/><br/>
            <img
                src="https://github.com/TheDitis/SpiroGen/blob/master/spirogen/interface/settings/tutorial/images/TutorialWelcome.gif?raw=true"
                alt="Example Image"
                className="projectImage"
            />
            <br/><br/>
            <h2>Overview</h2>
            <p>
                SpiroGen is an easy-to-use interface for generating geometric patterns using the classic turtle
                protocol.
                The interface consists of 2 control panels; one for the shape/form of the pattern, and another for
                the color
                scheme.
            </p>
            <div className="imagesSideBySide">
                <img
                    src="https://github.com/TheDitis/SpiroGen/blob/master/spirogen/interface/settings/tutorial/images/PatternTabTut1.png?raw=true"
                    alt="Example Image"
                />
                <img
                    src="https://github.com/TheDitis/SpiroGen/blob/master/spirogen/interface/settings/tutorial/images/HueShiftTut.gif?raw=true"
                    alt="Example Image"
                />
            </div>

            <h2>How To Use:</h2>
            <ol>
                <li>Mess with the parameters</li>
                <li>Hit run</li>
                <li>See what comes out</li>
                <li>Repeat</li>
            </ol>
        </div>
    )
};


export default PoolPredictorDetails;