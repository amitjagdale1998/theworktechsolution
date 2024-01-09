import React from "react";
import AboutImage from "./images/aboutus.jpg";

export const About = (props) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img
                            src={AboutImage}
                            className="img-responsive"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <h3>
                                {props.data ? (
                                    <>
                                        {props.data.MainTitle}
                                        <h3 style={{ color: "red" }}>
                                            {" "}
                                            WorktechSolution!
                                        </h3>
                                    </>
                                ) : (
                                    "loading..."
                                )}
                            </h3>
                            <p>
                                {props.data
                                    ? props.data.paragraph
                                    : "loading..."}
                            </p>
                            <h3>Why Choose Us?</h3>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((d, i) => (
                                                  <li key={`${d}-${i}`}>{d}</li>
                                              ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((d, i) => (
                                                  <li key={`${d}-${i}`}>
                                                      {" "}
                                                      {d}
                                                  </li>
                                              ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="about-text">
                        {props.data
                            ? props.data.vision.map((d, i) => (
                                  <div>
                                      <h4>{d.title}</h4>
                                      <div>{d.paragraph}</div>
                                  </div>
                              ))
                            : "loading"}
                    </div>
                    <div className="about-text">
                        {props.data
                            ? props.data.mission.map((d, i) => (
                                  <div>
                                      <h4>{d.title}</h4>
                                      <div>{d.paragraph}</div>
                                  </div>
                              ))
                            : "loading"}
                    </div>
                </div>
            </div>
        </div>
    );
};
