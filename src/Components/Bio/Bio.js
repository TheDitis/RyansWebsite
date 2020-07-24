import React from 'react';
import styles from './Bio.module.css';
import ReactPlayer from "react-player";
import ryanImage from '../../Public/Images/Ryan_img1_portrait.jpg';
import chipmunkImage from '../../Public/Images/RyanAndChipmunk_small.jpg';
import jetsonImage from '../../Public/Images/Jetson_Image.jpg';


const Bio = props => {
    return (
        <div className={styles.Bio}>

            <img src={ryanImage} alt={"Photo of me"} width={"60%"}/>
            <h1 className={styles.title}>About Me</h1>
            <p>
                My name is Ryan McKay, and I live in Golden Colorado. I'm 24, and I am currently a student at Rec
                Rocks Community College and doing consulting software engineering work on the side. I have always been
                one to explore as many hobbies as possible, and in doing so I stumbled upon a few that have really
                stuck with me, and shaped who I am as a person.
            </p>
            <h1 className={styles.title}>Music</h1>
            <p>
                When I was a kid, my dream was to be a musician. It started with guitar, and after a few years, I was
                able to get a laptop and a program to start making music myself. I have been producing music at some
                capacity for about 9 years now. Throughout this process, I gathered as much info on music theory as I
                could, and I learned to play piano and saxophone
            </p>
            <ReactPlayer
                className={styles.soundCloud}
                url={"https://soundcloud.com/ditis"}
                playing={false}
                volume={1}
                controls={true}
                width={window.innerWidth < 650 ? "90%" : 650}
            />
            <h1 className={styles.title}>Programming</h1>
            <img src={jetsonImage} align={"left"} alt={"Circuit Image"} width={"20%"} style={{float: "left"}}/>
            <p>
                I started learning to code when I was about 19, and I have been doing it ever since. I started messing
                around doing projects with Arduino and Rasperry Pi. One of my favorite early projects was to rig my
                drum set to play itself using MIDI, an arduino, and a bunch of solenoids, so that I could play piano to
                a real drum beat. Later on I learned to use Python, and I was initially focused on computer vision.
                I learned how to use OpenCV to manipulate and extract useful information form images. Since I started
                to get more serious about 3 years ago, I have added Javascript, React, and C++ to my tool belt of
                languages. While I do consult as a software engineer, working mostly in React and Python, I also have a
                small local business called Lookout Mountain Tech Solutions, whre I spend my time helping people in the
                Golden/Evergreen area with their computer troubles.
            </p>
            <h1 className={styles.title}>Interests</h1>
            <table className={styles.hobbyTable}>
                <tr>
                    <th style={{width: "100px", textAlign: "center"}}>Category</th>
                    <th>Hobbies</th>
                </tr>
                <tr>
                    <td>Music</td>
                    <td>Piano, Saxophone, Music Production, Improvisation</td>
                </tr>
                <tr>
                    <td>Coding</td>
                    <td>Python, React, OpenCV, C++, Javascript, Computer Vision, Tensorflow/Keras</td>
                </tr>
                <tr>
                    <td>Art</td>
                    <td>Ceramics, Drawing, Sound Visualization</td>
                </tr>
                <tr>
                    <td>Health</td>
                    <td>Biking, Running, Ketosis, Basketball, Swimming, Weight Training</td>
                </tr>


            </table>

            <h1 className={styles.title}>Proud Moment:</h1>
            <img
                src={chipmunkImage}
                alt="" useMap="#map1595561587408"
                // width={"60%"}
            />
            <map id="map1595561587408" name="map1595561587408">
                <area shape="circle" coords="120,230, 50" title="Chipmunk" alt="Chipmunk"
                      href="https://en.wikipedia.org/wiki/Chipmunk" target="_self"/>
            </map>
        </div>
    )
};


export default Bio;