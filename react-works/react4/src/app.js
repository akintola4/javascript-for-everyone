import React from "react";
import MainContent from "./Component/MainContent";
import Nav from "./Component/Nav"
export default function App() {
    return(
        <div className="container">
            <Nav />
            <MainContent />
        </div>
    )
}
