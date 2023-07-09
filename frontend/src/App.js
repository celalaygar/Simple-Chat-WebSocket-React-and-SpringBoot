import logo from './logo.svg';
import Login from './component/login/login';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync, selectedAuthentication } from './redux/Authentication/AuthenticationSlice';

function App() {

  const selectedAuth = useSelector(selectedAuthentication);
  const [message, setMessage] = useState({
    messageBody: "",
    username: selectedAuth?.username,
  });
  const [room, setRoom] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const logout = e => {
    e.preventDefault();

    dispatch(logoutAsync({
      username: "",
      password: "",
      email: "",
      token: null,
    }))

  }
  const onChangeData = (e) => {
    let body = { ...message };
    body[e.target.name] = e.target.value;
    setMessage({ ...body });
  }

  const sendMessage = e => {
    e.preventDefault();

  }
  return (
    <div >

      <hr />
      {
        !selectedAuth?.isloggedIn ?
          <Login />
          :
          <div className='container'>
            <div className='row'>
              <div className="col-lg-4 ">
                <span style={{ color: "white" }}>User Name : {selectedAuth.username + ""} </span>
              </div>
              <div className="col-lg-6  ">
              </div>
              <div className="col-lg-2 login-button">
                <div
                  onClick={e => logout(e)}
                  className="btn btn-outline-primary" >Log out</div>
              </div>
              <div className="col-lg-12">
                <div className="col-lg-12 login-title">Chat</div>
                <hr />
                <form autoComplete="off">
                  <div className='row'>
                    <div className="col-lg-10 login-form">
                      <div className="form-group">
                        <label className="form-control-label">Message</label>
                        <input type="text" name="messageBody" onChange={(e) => onChangeData(e)} value={message?.messageBody} className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-1 loginbttm">
                      <div className="col-lg-1 loginbttm login-button">
                        <button
                          type='submit'
                          onClick={e => sendMessage(e)}
                          className="btn btn-outline-primary">Send</button>
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default App;
