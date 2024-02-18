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
import Enquirydata from "./components/admin/Enquirydata";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 3000,
    speedAsDuration: true,
});


const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    const [admin,setAdmin]=useState(false)
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    const url=window.location.href;
console.log(url);
function func()
{
    if(url==="http://localhost:3000/sonu@97970"||url==="https://theworktechsolution.com/sonu@97970" )
    {
        setAdmin(true);
    }
}
useEffect(()=>
{
    func();
},[])

    return (
        <div>
            {
                admin?<><BrowserRouter>
                <Routes>
                    <Route exact path="/sonu@97970" element={<Enquirydata/>}>
                        </Route></Routes></BrowserRouter></>:
                        <><Navigation />
                      <Cursole data={landingPageData.Header} />
            <TrainningProgram />

            {/* <Header data={landingPageData.Header} /> */}
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />

            {/* <Services data={landingPageData.Services} /> */}
            {/* <Gallery data={landingPageData.Gallery} /> */}
            {/* <Testimonials data={landingPageData.Testimonials} /> */}
            {/* <Team data={landingPageData.Team} /> */}
            <Contact data={landingPageData.Contact} /></>
            }
             
 
            
            
        </div>
    );
};

export default App;
