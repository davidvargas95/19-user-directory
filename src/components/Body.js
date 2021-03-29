import React from "react";

function Body(props) {
    return (
    <thead className="bg-success text-black font-weight-bold font-italic">
        <tr>
            <th className="me-1 align-middle">Image</th>
            <th className="me-4 align-middle">Name</th>
            <th className="me-2 align-middle">Age</th>
            <th className="me-3 align-middle">Email</th>
            <th className="me-3 align-middle">Cell Number</th>
        </tr>
    </thead>
    )
}

export default Body;