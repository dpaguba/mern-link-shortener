import React, { useState } from "react";
import logo from "../assets/images/logo.png"

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const changeHandler = event => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    return (
        <div className="row">
            <div className="auth">
                <div className="sign-in">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="title">
                        Hey, welcome back
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="blue-input"
                            onChange={changeHandler}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="blue-input"
                            onChange={changeHandler}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="action">
                        <button className="btn login">Login</button>
                    </div>
                </div>
            </div>
            <div className="image" />
        </div>
    )
}