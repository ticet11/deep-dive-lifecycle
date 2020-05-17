import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
    return (
        <div>
            <div>
                <NavLink exact to="/">
                    Discussion
                </NavLink>
            </div>
            <div>
                <NavLink exact to="/Rules">
                    Rules
                </NavLink>
            </div>
            <div>
                <NavLink exact to="/WorkFlow">
                    WorkFlow
                </NavLink>
            </div>
        </div>
    );
}
