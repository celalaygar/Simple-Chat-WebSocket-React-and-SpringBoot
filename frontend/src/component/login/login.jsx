


import React, { useState } from 'react';
import { loginAsync } from '../../redux/Authentication/AuthenticationSlice';
import { useDispatch } from 'react-redux';
import "./login.css"

const Login = () => {
    const [loginBody, setLoginBody] = useState({
        username: "",
        password: "",
    });
    const dispatch = useDispatch();

    const onChangeData = (e) => {
        let body = { ...loginBody };
        body[e.target.name] = e.target.value;
        setLoginBody({ ...body });
    }
    const login = e => {
        e.preventDefault();
        
        dispatch(loginAsync({
            username: loginBody.username,
            password: loginBody.password,
            email: loginBody.email,
            token: loginBody.password + "+++" + loginBody.password,
        }))
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-title">
                        LOGIN PANEL
                    </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form"><form autoComplete="off">
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text" name="username"  onChange={(e) => onChangeData(e)} value={loginBody?.username} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" name="password" onChange={(e) => onChangeData(e)} value={loginBody?.password} className="form-control" />
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                    Error Message
                                </div>
                                <div className="col-lg-6 login-btm login-button">
                                    <button
                                        type='submit'
                                        onClick={e => login(e)}
                                        className="btn btn-outline-primary">LOGIN</button>
                                </div>
                            </div></form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div>





    );
};

export default Login;