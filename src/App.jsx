import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
// import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import MarquiLine from "./components/MarquiLine";
import Cursole from "./components/Cursole";
import TrainningProgram from "./components/TrainningProgram";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation />
            <Cursole data={landingPageData.Header} />
            <TrainningProgram />

            {/* <Header data={landingPageData.Header} /> */}
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />

            {/* <Services data={landingPageData.Services} /> */}
            {/* <Gallery data={landingPageData.Gallery} /> */}
            {/* <Testimonials data={landingPageData.Testimonials} /> */}
            {/* <Team data={landingPageData.Team} /> */}
            <Contact data={landingPageData.Contact} />
        </div>
    );
};

export default App;
