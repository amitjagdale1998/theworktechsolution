import React from "react";
import logo from "../components/images/logo.png";
import MarquiLine from "./MarquiLine";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
                                    <div
                                        className="the"
                                        style={{ color: "blue" }}
                                    >
                                        The
                                    </div>
                                    <div className="worktech">WORK TECH</div>{" "}
                                    <div
                                        className="solution"
                                        style={{ color: "blue" }}
                                    >
                                        Training Center in Pune
                                    </div>
                                </div>
                            </div>
                            <button
                                style={{ border: "none" }}
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
                    {/* ///CONTACT INFO */}
                    <div className="navbar-header">
                        <div className="text-center">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "300px",
                                    justifyContent: "center",
                                }}
                            >
                                <div className="tps">
                                    <span className="tps-training">
                                        Training
                                    </span>
                                    |
                                    <span className="tps-placement">
                                        Placement
                                    </span>
                                    |
                                    <span className="tps-solution">
                                        Solution
                                    </span>
                                </div>
                            </div>
                            <div
                                className="contact-section row"
                                style={{
                                    justifyContent: "center",
                                    width: "265px",
                                }}
                            >
                                <WhatsAppIcon id="whatsapp-icon" />
                                <span className="contactno">+918432005680</span>
                            </div>
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
                            {/* <li>
                                <a href="#services" className="page-scroll">
                                    Services
                                </a>
                            </li> */}
                            {/* <li>
                                <a href="#portfolio" className="page-scroll">
                                    Gallery
                                </a>
                            </li> */}
                            {/* <li>
                                <a href="#testimonials" className="page-scroll">
                                    Testimonials
                                </a>
                            </li> */}
                            {/* <li>
                                <a href="#team" className="page-scroll">
                                    Team
                                </a>
                            </li> */}

                            <li>
                                <a href="#contact" className="page-scroll">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#courses" className="page-scroll">
                                    courses
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
