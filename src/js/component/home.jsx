import React from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./navbar";

// create your first component
const Home = (props) => {
    return (
        <div>
            <NavBar />
        </div>
    )
};

const root = createRoot(document.getElementById("root"));
root.render(<Home />);

export default Home;