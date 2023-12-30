import React from "react";

const MarquiLine = () => {
    return (
        <div
            style={{
                height: "30px",
                backgroundColor: "red",
                marginTop: "20px",
                paddingTop: "auto",
                paddingBottom: "auto",
                marginLeft: "0px",
                marginRight: "0px",
                color: "white",
            }}
        >
            <marquee className="marquee-line">
                <span style={{ fontSize: "90%", color: "yellow" }}>
                    &#x2B50;
                </span>{" "}
                <span> 100% Interview Call Guarantee</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "90%", color: "yellow" }}>
                    &#x2B50;
                </span>
                <span> Lifetime placement support</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "90%", color: "yellow" }}>
                    &#x2B50;
                </span>
                <span>Advanced project based Training </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "90%", color: "yellow" }}>
                    &#x2B50;
                </span>
                <span>Learn at your pace with integrated LMS</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "90%", color: "yellow" }}>
                    &#x2B50;
                </span>
                <span>30+ Latest in demand tools and technologies</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "90%", color: "yellow" }}>
                    &#x2B50;
                </span>
                <span>Experienced Corporate Trainers</span> &nbsp;&nbsp;&nbsp;
            </marquee>
        </div>
    );
};

export default MarquiLine;
