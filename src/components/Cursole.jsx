import React from "react";
import "./CustomStyle/cursol.css";
import MarquiLine from "./MarquiLine";
import django from "./images/django.png";
import fullstack1 from "./images/withoutbg/fullstack-1.png";
import fullstack2 from "./images/withoutbg/fullstack-2.png";
import fullstack3 from "./images/withoutbg/fullstack-3.png";
import girlpic from "./images/withoutbg/girlpic.png";
import webdev1 from "./images/withoutbg/webdev-1.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Cursole = () => {
    return (
        <div>
            {/* style={{ marginTop: "150px" }} */}
            {/* <!-- TIPS: 
1. The carousel shouldn't be in any other div, like for example div with class container. 
2. You can align image position in classes bg1, bg2, bg3 using css background-position.
http://arturssmirnovs.com/blog/bootstrap-carousel-100-height-and-width/
--> */}
            {/* <MarquiLine /> */}
            <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#myCarousel"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item bg bg1 active">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div style={{ textAlign: "center" }}>
                                        <p
                                            style={{
                                                fontSize: "20px",
                                                color: "white",
                                                marginTop: "50px",
                                            }}
                                        >
                                            INDIA’S LEADING AND TRUSTED IT
                                            TRAINING INSTITUTE OFFERING
                                            CLASSROOM & ONLINE TRAINING
                                        </p>
                                        <img
                                            src={fullstack1}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "auto",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        style={{ textAlign: "center" }}
                                        className="pt-5"
                                    >
                                        <img
                                            src={django}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "auto",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                        <img
                                            src={webdev1}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "auto",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="carousel-caption">
                                <h1>Example headline.</h1>
                                <p>
                                    Note: If you're viewing this page via a{" "}
                                    <code>file://</code> URL, the "next" and
                                    "previous" Glyphicon buttons on the left and
                                    right might not load/display properly due to
                                    web browser security rules.
                                </p>
                                <p>
                                    <a
                                        className="btn btn-lg btn-primary"
                                        href="#"
                                        role="button"
                                    >
                                        Sign up today
                                    </a>
                                </p>
                            </div> */}
                        </div>
                    </div>
                    <div className="item bg bg2">
                        <div className="container">
                            {/* <div className="carousel-caption">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in,
                                    egestas eget quam. Donec id elit non mi
                                    porta gravida at eget metus. Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a
                                        className="btn btn-lg btn-primary"
                                        href="#"
                                        role="button"
                                    >
                                        Browse gallery
                                    </a>
                                </p>
                            </div> */}
                            <div className="row girl-banner">
                                <div className="col">
                                    <div>
                                        {/* <p
                                            style={{
                                                fontSize: "20px",
                                                color: "white",
                                            }}
                                        >
                                            INDIA’S LEADING AND TRUSTED IT
                                            TRAINING INSTITUTE OFFERING
                                            CLASSROOM & ONLINE TRAINING
                                        </p> */}
                                        <h3 style={{ color: "white" }}>
                                            The Worktech Solution
                                        </h3>
                                        <button>Enquire Now</button>
                                        <img
                                            src={girlpic}
                                            className="image-responsive girlpic"
                                        ></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        style={{ textAlign: "center" }}
                                        className="pt-5"
                                    >
                                        <img
                                            src={fullstack3}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "20px",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                        <img
                                            src={webdev1}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "20px",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in,
                                    egestas eget quam. Donec id elit non mi
                                    porta gravida at eget metus. Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a
                                        className="btn btn-lg btn-primary"
                                        href="#"
                                        role="button"
                                    >
                                        Learn more
                                    </a>
                                </p>
                            </div> */}
                    </div>
                    <div className="item bg bg3">
                        <div className="container">
                            {/* <div className="carousel-caption">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in,
                                    egestas eget quam. Donec id elit non mi
                                    porta gravida at eget metus. Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a
                                        className="btn btn-lg btn-primary"
                                        href="#"
                                        role="button"
                                    >
                                        Browse gallery
                                    </a>
                                </p>
                            </div> */}
                            <div className="row">
                                <div className="col">
                                    <div style={{ textAlign: "center" }}>
                                        <p
                                            style={{
                                                fontSize: "20px",
                                                color: "white",
                                            }}
                                        >
                                            INDIA’S LEADING AND TRUSTED IT
                                            TRAINING INSTITUTE OFFERING
                                            CLASSROOM & ONLINE TRAINING
                                        </p>
                                        <img
                                            src={fullstack2}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "auto",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        style={{ textAlign: "center" }}
                                        className="pt-5"
                                    >
                                        <img
                                            src={fullstack3}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "20px",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                        <img
                                            src={webdev1}
                                            className="image-responsive"
                                            style={{
                                                minWidth: "400px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                padding: "20px",
                                                maxWidth: "600px",
                                                width: "100%",
                                            }}
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="left carousel-control"
                    href="#myCarousel"
                    data-slide="prev"
                >
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a
                    className="right carousel-control"
                    href="#myCarousel"
                    data-slide="next"
                >
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>

            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        </div>
    );
};

export default Cursole;
