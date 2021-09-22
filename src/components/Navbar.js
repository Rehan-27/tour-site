
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {

    const darkEnabled = () => {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll(".card-body").forEach(element => {
            element.classList.toggle("dark-mode")
        });

        document.getElementById("footer").style.color = "black";

        if (document.getElementById("dark-toggle").innerHTML === "Dark") {
            document.getElementById("dark-toggle").innerHTML = "light";
        }
        else {
            document.getElementById("dark-toggle").innerHTML = "Dark";
        }
    }
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-center ">
                <h1 className="navbar-brand my-2.5 ">mes tournées</h1>
            </nav>

            <nav id="navDark" className="navbar navbar-expand-lg navbar-light bg-light ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destinations">Destinations</Link>
                        </li>
                    </ul>
                </div>
                <div><button id="dark-toggle" className="btn btn-sm btn-outline-dark" onClick={darkEnabled}>Dark</button></div>
            </nav>
        </div>
    )
}

export default Navbar
