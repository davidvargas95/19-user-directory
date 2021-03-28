import React from "react";
import API from "../utils/API";
import Header from "./Header";
import Body from "./Body";
import Searchbar from "./Searchbar";

function Test() {
    return(
        <div>
            <Header />
            <Searchbar />
            <Body />
            <h1>Hello</h1>
        </div>
    )
}

export default Test;