import React from "react";

export const Features = (props) => {
    return (
        <div id="features" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>Features</h2>

                    <p>
                        {" "}
                        We provide IT Training with course materials, Interview
                        preparation, internship on real time projects on IT
                        Industry. We Provide day time classes, weekend training
                        classes and fast track training classes for the
                        students, Staff & Working Professionals.
                    </p>
                    <p>
                        We Are providing training in most demanding technologies
                        in market where candidates meet there expectation
                        survive in global market.
                    </p>

                    <p>
                        We are renowned name in IT Institute for offering wide
                        range of courses with excellent track record of our
                        faculty in terms of transforming student’s skills by
                        scaling up his talent and skills to become disruptive in
                        the industry. We provide real-time scenario to our
                        students to have hands on experience on technology so
                        they can perform their duties easily.
                    </p>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                              <div
                                  key={`${d.title}-${i}`}
                                  className="col-xs-6 col-md-3 "
                              >
                                  {" "}
                                  <i className={d.icon}></i>
                                  <h3>{d.title}</h3>
                                  {/* <p>{d.text}</p> */}
                              </div>
                          ))
                        : "Loading..."}
                </div>
            </div>
        </div>
    );
};
