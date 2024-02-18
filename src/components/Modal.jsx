import React from "react";
import modalImage from "./images/modalbanner.jpg";
const Modal = () => {
    return (
        <div>
            <div className="container">
                <button
                    type="button"
                    className="btn  btn-sm"
                    data-toggle="modal"
                    data-target="#myModal"
                    style={{ backgroundColor: "red" }}
                >
                    <span style={{ color: "white" }}>Enquire Now</span>
                </button>

                <div
                    className="modal fade"
                    id="myModal"
                    role="dialog"
                    style={{ background: "disable", overflow: "hidden" }}
                >
                    <div
                        className="modal-dialog modal-sm-lg"
                        style={{ borderRadius: "10px" }}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    style={{ color: "red" }}
                                >
                                    &times;
                                </button>
                                <span
                                    style={{
                                        fontSize: "15px",
                                        fontFamily: "serif",
                                        fontWeight: "bolder",
                                    }}
                                    className="modal-title"
                                >
                                    Become a Full-Stack Developer the World
                                    Wants to Hire
                                </span>
                                <div>
                                    <img
                                        src={modalImage}
                                        width={"90%"}
                                        height={"40%"}
                                        loading="lazy"
                                    ></img>
                                </div>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Full Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">
                                            Contact
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Contact"
                                        />
                                    </div>
                                    {/* <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="exampleCheck1"
                                        >
                                            Check me out
                                        </label>
                                    </div> */}
                                    <button
                                        type="submit"
                                        className="btn"
                                        style={{
                                            color: "white",
                                            backgroundColor: "red",
                                        }}
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                {/* <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
