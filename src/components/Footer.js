import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div>
            <div id="footer" className="container-fluid m-0 p-0 d-flex  justify-content-center align-items-center flex-column footer">
                <h2 className="mb-5">mes tournées</h2>
                <ul className="list-unstyled">
                    <Link className="mx-2" to="/"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt=" tours site" /></Link>
                    <Link className="mx-2" to="/" ><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt=" tours site" /></Link>
                    <Link className="mx-2" to="/" ><img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt=" tours site" /></Link>
                    <Link className="mx-2" to="/" ><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt=" tours site" /></Link>
                </ul>
                <p >
                    copyright&#169;<strong>   mes tournées 2021</strong>
                </p>
            </div >
        </div >
    )
}

export default Footer