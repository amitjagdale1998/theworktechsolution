import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Enquirydata = () => {
    const [data, setData] = useState([]);

    const fetchEnquiryData = async () => {
        try {
            const res = await axios.get("https://ionic-idvv.onrender.com/theworktech/enquirydata");
            setData(res.data.allEnquiryData.reverse());
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchEnquiryData();
    }, []);

    return (
        <div style={{ width: "100%", marginLeft: "auto", marginRight: "auto", position: "relative" }}>
            <div className="table-responsive">
                <table className="table table-striped">
                    <caption>
                        <h1>TheWorktechSolution Candidates </h1>
                        <br />
                        <span className="summary"></span>
                    </caption>
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }}>Name</th>
                            <th style={{ width: "20%" }}>Email</th>
                            <th style={{ width: "60%" }}>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enquirydata;
