import React from "react";
import logo from "../components/images/logo.png";
import MarquiLine from "./MarquiLine";
export const Navigation = (props) => {
    return (
        <>
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <div
                            className="row"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                height: "auto",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "400px",
                                }}
                            >
                                <div>
                                    <img src={logo} height={70}></img>{" "}
                                </div>{" "}
                                &nbsp;&nbsp;
                                <div>
                                    <div className="the">The</div>
                                    <div className="worktech">
                                        WORK TECH
                                    </div>{" "}
                                    <div className="solution">
                                        Training Center in Pune
                                    </div>
                                </div>
                            </div>
                            <button
                                // style={{ paddingBottom: "200px" }}
                                type="button"
                                className="navbar-toggle collapsed mb"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                            >
                                {" "}
                                <span className="sr-only">
                                    Toggle navigation
                                </span>{" "}
                                <span className="icon-bar"></span>{" "}
                                <span className="icon-bar"></span>{" "}
                                <span className="icon-bar"></span>{" "}
                            </button>
                        </div>
                    </div>

                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#features" className="page-scroll">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="page-scroll">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="page-scroll">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="page-scroll">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="page-scroll">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="page-scroll">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="page-scroll">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <MarquiLine></MarquiLine>
            </nav>
        </>
    );
};
