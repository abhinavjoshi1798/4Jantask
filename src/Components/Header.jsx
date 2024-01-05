import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='container-fluid'
            style={{
                display: "flex",
                background: "linear-gradient(to right, #ff9b44 0%, #fc6075 100%)",
                height: "60px",
                justifyContent: "space-between",
                alignItems: "center",
                left: "0",
                position: "fixed",
                right: "0",
                top: "0",
                zIndex: "1002"
            }}>
            <img src={logo} className='img-fluid center' style={{ "max-height": "60px", padding: "10px" }} />
            <div className='header-text'>
                <h3 style={{
                    fontSize: "20px",
                    color: "white",
                    paddingRight: "10px",
                    fontFamily: "CircularStd"
                }}>QPR Design template</h3>
            </div>
        </div>
    )
}

export default Header
