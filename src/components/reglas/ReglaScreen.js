import React from 'react'
import { Link } from 'react-router-dom';

export const ReglasScreen = () => {
    return (
        <>
            <div className="container">
                <div>
                    <Link to="/" >
                        <img id="logo" src="../../assets/image/chiletraderslogoStandar.png"
                            width="100%"
                            alt="Chile Traders"
                        />
                    </Link>
                    <hr />
                </div>
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>Aww yeah, you successfully read this important alert message.
    This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <hr />
                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>


                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <hr />
                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>

                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <hr />
                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
                <br />

                <div className="d-grid gap-2">
                    <Link className="btn btn-outline-primary" to="/" >Volver</Link>
                </div>
            </div>

        </>
    )
}
