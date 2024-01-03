import { useState } from "react";
// import emailjs from "emailjs-com";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {};
export const Contact = (props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
        contact: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const clearState = () =>
        setState({ name: "", email: "", message: "", contact: "" });
    const handleSubmit = async () => {
        if (!state.email && !state.contact) {
            Swal.fire({ icon: "error", text: "All fields are mandatory!" });
            return;
        }

        try {
            const res = await axios.post(
                "https://ionic-idvv.onrender.com/ionic/worktech",
                state,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(res.data);
            if (res.data.isSuccess === true) {
                Swal.fire({
                    text: "The message send has been Successfully.",
                    icon: "success",
                });
            } else {
                alert("Something Went to  wrong!");
            }
        } catch (err) {
            console.log(err);
        } finally {
            clearState();
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(name, email, message);

    //     {
    //         /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    //     }

    //     emailjs
    //         .sendForm(
    //             "YOUR_SERVICE_ID",
    //             "YOUR_TEMPLATE_ID",
    //             e.target,
    //             "YOUR_PUBLIC_KEY"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //                 clearState();
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );
    // };
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>Get In Touch</h2>
                                <p>
                                    Please fill out the form below to send us an
                                    email and we will get back to you as soon as
                                    possible.
                                </p>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required
                                                onChange={handleChange}
                                                value={state.name}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="contact"
                                                name="contact"
                                                className="form-control"
                                                placeholder="Contact"
                                                required
                                                value={state.contact}
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                                onChange={handleChange}
                                                value={state.email}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Message"
                                        required
                                        value={state.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button
                                    type="submit"
                                    className="btn btn-custom btn-lg"
                                    onClick={handleSubmit}
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>Contact Info</h3>
                            <p>
                                <span>
                                    <i className="fa fa-map-marker"></i> Address
                                </span>
                                {props.data ? props.data.address : "loading"}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-phone"></i> Phone
                                </span>{" "}
                                {props.data ? props.data.phone : "loading"}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email
                                </span>{" "}
                                {props.data ? props.data.email : "loading"}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a
                                            href={
                                                props.data
                                                    ? props.data.facebook
                                                    : "/"
                                            }
                                        >
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                props.data
                                                    ? props.data.twitter
                                                    : "/"
                                            }
                                        >
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                props.data
                                                    ? props.data.youtube
                                                    : "/"
                                            }
                                        >
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; The WorkTech Solution © 2012-2023. All rights
                        reserved.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};
