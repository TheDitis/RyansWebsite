import spiroGenImage from '../../Public/Images/SpiroGen.gif';
import poolPredictorImage from '../../Public/Images/PoolPredictor.gif';
import waveformDrawImage from '../../Public/Images/Drawing2Waveform_img2.png';
import blueBoxImage from '../../Public/Images/BlueBox_img1.png';
import drawingToolImage from '../../Public/Images/ArtToolImage.png';


const portfolioCardInfo = [
    {
        title: "Spirogen",
        image: spiroGenImage,
        description: "A Python program that allows you to easily generate cool geometric patterns and shapes, using a simple interface."
    },
    {
        title: "PoolPredictor",
        image: poolPredictorImage,
        description: "A computer vision project made with Python and OpenCV that takes overhead video of a pool " +
            "table and then detects the boundaries of a billiards table, and keeps track of each ball " +
            "frame-to-frame, estimating ball trajectory."
    },
    {
        title: "Ryan's Art Tool",
        image: drawingToolImage,
        description: "A tool for making angle and relative distance measurements on reference photos for artists."
    },
    {
        title: "Drawing2Waveform",
        image: waveformDrawImage,
        description: "Input an image of a scribble, and get back a single-cycle wav file for a synthesizer."
    },
    {
        title: "BlueBox",
        image: blueBoxImage,
        description: "A product design project of a modular MIDI controller"
    }
];


export default portfolioCardInfo;