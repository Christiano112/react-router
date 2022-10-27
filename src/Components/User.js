import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MainImage from "../images/landing-page.png"


const User = (location) => {
    const navigate = useNavigate();
    const myLocation = location.userId.pathname;

    return (
        <div className="user">
            {myLocation === "/user" ? (
                <>
                    <h3>A User Profile Card Template</h3>

                    <img src={MainImage} alt="Main Pic" />

                    <button onClick={() => navigate("users")}
                        style={{ background: "#27ae60", color: "#fff", padding: ".5rem 1rem" }}>Show Users</button>
                </>
            ) : (
                <>
                    <Outlet />
                </>
            )}
        </div>
    )
}

export default User;