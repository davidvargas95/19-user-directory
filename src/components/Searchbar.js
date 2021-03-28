import React from "react";

function Searchbar(props) {
    return (
        <form>
            <div className="form-group">

                <input className="form-control" placeholder="Search for an employee" 
                    value = {props.search}
                    onChange = {props.handleSearchChange}
                    type= "text"
                />
            </div>

            <div className="mb-2">Sort: {" "}
                <button className="btn btn-outline-success">A-Z</button> {" "}
                <button className="btn btn-outline-success">Z-A</button> {" "}
            </div>
        </form>
    )
}

export default Searchbar;