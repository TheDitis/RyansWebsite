import React from 'react';
import styles from './Drawing2WaveformDetails.css';


const Drawing2WaveformDetails = props => {
    return (
        <div className="projectInfo">
            {/*<div className="projectHeader">*/}
            {/*    <h1>Drawing2Waveform</h1>*/}
            {/*    <p>Input an image of a scribble, and get back a single-cycle wav file for a synthesizer.</p>*/}
            {/*</div>*/}
            <br/><br/>
            <h2>To use:</h2>
            <ol>
                <li>Make a drawing of a waveform (should be like a function, with only 1 y value per x value, otherwise
                    you
                    will have jumps. Somethimes fun to play with, just important to know. See image at bottome for
                    clarification.)
                </li>
                <li>Take a picture of that waveform in decent enough light and focus, and with as little background or
                    competeing curvature as possible Here's an example:
                </li>
            </ol>
            <img
                src="https://raw.githubusercontent.com/TheDitis/Drawing2Waveform/master/Inputphotos/PhonePhoto5.jpg"
                alt="Example Image"
                className="projectImage"
                width={"100%"}
            />
            <ol>
                <li>Put the image into the <strong>Inputphotos</strong> folder.</li>
                <li>Open <strong>Pic2Wav.py</strong> and go down to the bottom where the main function is run.</li>
                <li>Replace <em>input_filename</em> with the name of the image you put into the Inputphotos folder,
                    including the extension.
                </li>
                <li>Replace <em>ouput_filename</em> with your desired output name, <strong>without
                    extension</strong>, as it
                    will always be .wav.
                </li>
                <li>Run the script</li>
                <li>Find the output file in the OutputWavs folder, and plug it into your favorite synthesizer. Note
                    that you'll
                    want to use your synthesizers tuning adjustments, as automatic tuning isn't currently
                    implemented.
                </li>
                <li>Jam with your newly drawn sound!</li>
            </ol>
            <h3>
                Note: You won't hear anything when playing this in a media player, as this generates only a single
                cycle
                waveform, and is therefore very, very short.
            </h3>
            <br/><br/>
            <h2>Checking & Debugging</h2>
            <p>
                The fastest way to check if things went as expected is to check
                the <strong>DebugImages</strong> folder. For
                each run, 2 image files are automatically generated. The first in the chain is
                <strong>ThresholdTest.png</strong> and the second is <strong>ContourCheck.png</strong>, which will
                very
                quickly tell you whether or not your sound will be easily playable. Here&#39;s what
                <em>ContourCheck.png</em> should look like on a successful run:
            </p>
            <img
                src="https://raw.githubusercontent.com/TheDitis/Drawing2Waveform/master/DebugImages/ContourCheck.png"
                alt="Example Image"
                className="projectImage"
                width={"90%"}
            />
            <p>Here is what <em>ThresholdTest.png</em> should roughly look like on a good run:</p>
            <img
                src="https://raw.githubusercontent.com/TheDitis/Drawing2Waveform/master/DebugImages/ThresholdTest.png"
                alt="Example Image"
                className="projectImage"
                width={"90%"}
            />
            <p>
                Don't worry if your threshold looks a bit more messy, as long
                as <em>ContourCheck.png</em> looks good,
                it should play just fine.</p>
            <br/><br/>
            <h2>Top-Down Model</h2>
            <p>Once the algorithm has identified the largest curve in the image, is to take the
                uppermost pixel that is part of the curve for every column of pixels. This, of course, means
                that any sort
                of concave or non-function-like curves will result in square-wave like jumps. Here is an
                example of what
                that looks like:</p>
            <img
                src="https://raw.githubusercontent.com/TheDitis/Drawing2Waveform/master/doc_resources/TopDownDemo.png"
                alt="Example Image"
                className="projectImage"
                width={"90%"}
                useMap={"#topDownMap"}
            />
            <map name={"topDownMap"}>
                <area shape={"rect"} coords={"100, 100, 400, 400"} alt={"Jump"}/>
            </map>
            <br/><br/>
            <h2>Other Things To Know</h2>
            <p>Along with understanding that any overhangs will cause jumps, it helps to know how sharp
                jumps can be avoided
                in the looping in your synthesizer.</p>
            <ul>
                <li>The algorithm takes the average of the last couple of samples, and averages that
                    with the average of
                    the first couple of samples, and then shifts the waveform values vertically so that
                    the two ends
                    straddle the center line as closely as possible
                </li>
                <li>This means that, if both of your end-points are either low or high compared to
                    the majority of the
                    rest of the drawing, you will get a sort of lopsided waveform, which isn't
                    necessarily a bad thing,
                    just know that the volume won't be as loud.
                </li>
                <li>It also means that if the endpoints of your audio file are on opposite ends
                    vertically, than you will
                    get more of a squarewave-like character when you play it through a synthesizer,
                    unless your synthesizer
                    has a crossfade parameter.
                </li>
                <li>Even when you start and end your waveform nicely on the center line, there will
                    likely still be small
                    jumps on cycling, due to anything from the angle of the photo to the bleed of the
                    marker, so it is
                    recommended to use a synthesizer that does have crossfade parameter.
                </li>
                <li>Once the wave has been centered using the front and end points, it automatically
                    scales the amplitude
                    to maximize volume, so you don't need to be concerned with how tall or short
                    your drawing is. It can
                    be very interesting to play with making as squished of a waveform you can, and
                    seeing what it sounds
                    like when the tiny bumps are amplified.
                </li>
            </ul>
            <img
                src="https://raw.githubusercontent.com/TheDitis/Drawing2Waveform/master/doc_resources/WaveformDrawDemo.png"
                alt="Example Image"
                className="projectImage"
                width={"90%"}
            />
        </div>
    )
};


export default Drawing2WaveformDetails;