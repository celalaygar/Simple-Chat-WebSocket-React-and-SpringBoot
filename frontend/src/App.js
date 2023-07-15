
import Login from './component/login/login';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { logoutAsync, selectedAuthentication } from './redux/Authentication/AuthenticationSlice';
import "./assets/css/message.css"
import { dateFormat } from './component/Moment/DateFormat';
function App() {

  const selectedAuth = useSelector(selectedAuthentication);
  const [message, setMessage] = useState({
    messageBody: "",
    username: selectedAuth?.username,
  });
  const [room, setRoom] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [messageList, setMessageList] = useState([
    {
      message: "Aloo geliyom",
      me: selectedAuth?.username,
      to: "aaa",
      channel: "",
      createdDate: new Date(),
    },
    {
      message: "Hazır Olun",
      me: selectedAuth?.username,
      to: "aaa",
      channel: "",
      createdDate: new Date(),
    },
    {
      message: "Geliyooom",
      me: selectedAuth?.username,
      to: "aaa",
      channel: "",
      createdDate: new Date(),
    },
  ]);



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
              <div className="col-lg-4  message-title">
                <span style={{ color: "white" }}>User Name : {selectedAuth.username + ""} </span>
                <br />
                <span style={{ color: "white" }}>Room : {selectedAuth.room + ""} </span>
              </div>
              <div className="col-lg-4  ">
              </div>
              <div className="col login-button">
                <div
                  onClick={e => logout(e)}
                  className="btn btn-outline-primary" >Log out</div>
              </div>
              <hr />
              <div className="col-lg-12 messages-panel"  >
                <div className='row message-row'>
                  <div className="col-lg-12 message-body">
                    <div className="col-lg-2 message-me">Me: {selectedAuth?.username}</div>
                    <div className='message-content'>
                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </div>
                    <div className="col-lg-2 message-to">To: {"Mamudo"}</div>
                    <div className="col-lg-1 message-createdDate">{dateFormat(new Date())}</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-lg-12 message-input-panel">
                <form autoComplete="off">
                  <div className='row ' >
                    <div className="col-lg-10">
                      <label className="form-control-label">Message</label>
                      <input type="text" name="messageBody" onChange={(e) => onChangeData(e)} value={message?.messageBody} className="form-control" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col loginbttm login-button mt-4">
                      <button
                        type='submit'
                        onClick={e => sendMessage(e)}
                        className="btn btn-outline-primary">Send</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
      }
    </div >
  );
}

export default App;
