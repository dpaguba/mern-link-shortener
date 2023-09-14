import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png"
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    useEffect((error) => {
        message(error)
        clearError()
    }, [error, message, clearError])

    // useEffect(() => {
    //     window.M.updateTextFields()
    //   }, [])

    const changeHandler = event => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    const registerHandler = async () => {
        try {
          const data = await request('/api/auth/register', 'POST', {...form})
          message(data.message)
        } catch (e) {}
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
                            value={form.email}
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
                            value={form.password}
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