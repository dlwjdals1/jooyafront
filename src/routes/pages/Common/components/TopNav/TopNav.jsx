import React from "react";

import './TopNav.css';

export const TopNav = ({
    title
}) => {
    return (
        <div className="top-nav-container">
            <div className="top-nav-wrap">
                <button><img src=""></img></button>
                    <div className="top-nav-item">
                        <h3>{title}</h3>
                    </div>
                <button><img src=""></img></button>
            </div>
        </div>
    )
}