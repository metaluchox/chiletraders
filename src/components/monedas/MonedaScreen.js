import React from 'react'

export const MonedaScreen = ({ nombre, valor }) => {
    return (
        <div className="alert alert-success text-center border border-success" role="alert" >

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12"> {nombre}  <br/><i className="fa fa-usd fa-lg"></i> {valor}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
