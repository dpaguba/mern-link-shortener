import React, { useState } from "react";
import logo from "../assets/images/logo.png"
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
    const { loading, request } = useHttp()

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const changeHandler = event => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', "POST", { ...form })
            console.log("Data:", data);
        } catch (e) {
        }
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
                        <button
                            className="btn login"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="image" />
        </div>
    )
}