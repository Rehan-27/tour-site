import React from 'react'

function Contact() {
    return (
        <div className="container-fluid contact">
            <h1 className="title">Contact Us</h1>
            <div className="container mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address:</label>
                        <input type="email" className="form-control" placeholder="type email here" style={{ color: "white" }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name:</label>
                        <input type="text" className="form-control" placeholder="type name here" style={{ color: "white" }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Messege:</label>
                        <input type="text" className="form-control" placeholder="type name messege here" style={{ color: "white" }} />
                    </div>
                </form>
                <div className="container d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-secondary" style={{ color: "white" }}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
