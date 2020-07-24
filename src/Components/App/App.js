import React, {useState, useEffect} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Portfolio from "../Portfolio/Portfolio";
import Bio from "../Bio/Bio";
import Footer from '../Footer/Footer';

function App() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const newTime = new Date();
        if (time.getMinutes() !== newTime.getMinutes()) {
            setTime(newTime);
            console.log(time);
        }
    });

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} component={Portfolio}/>
                    <Route exact path={"/about"} component={Bio}/>
                </Switch>
                <Footer time={time}/>
            </div>
        </BrowserRouter>
  );
}

export default App;
