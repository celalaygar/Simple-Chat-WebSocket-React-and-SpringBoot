
import Login from './component/login/login';
import { useEffect, useState } from 'react';
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

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setMessageList([
      {
        id: "1",
        message: "I'm gonna wait for you",
        me: selectedAuth?.username,
        to: "Micheal X Large",
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "2",
        message: "Are you ready",
        me: selectedAuth?.username,
        to: "Daniel Marcos",
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "3",
        message: "I wanna go",
        me: "George",
        to: selectedAuth?.username,
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "4",
        message: "I miss you..",
        me: "Excalm",
        to: selectedAuth?.username,
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "5",
        message: "I wanna watch a movie about fast x,I miss you.. for use fastly",
        me: selectedAuth?.username,
        to: "Daniel Marcos",
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "6",
        message: "I wanna watch a movie about fast x,I miss you..I wanna come your home to help clean for use fastly",
        me: selectedAuth?.username,
        to: "Daniel Marcos",
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "7",
        message: "I wanna watch a movie about fast x,I miss you.. for use fastly",
        me: "Obama Tarm",
        to: selectedAuth?.username,
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "8",
        message: "I wanna watch a movie about fast x,I miss you.. for use fastly",
        me: "Obama Range ",
        to: selectedAuth?.username,
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "9",
        message: "capitalize on the potential of the Metaverse. We assist our clients throughout the entire metaverse development process, ",
        me: selectedAuth?.username,
        to: "Ti Start ",
        channel: "",
        createdDate: new Date(),
      },
      {
        id: "10",
        message: "The future of communication will combine new technology with the power of reality. With 3D communication, we can connect like never before.",
        me: "Metaverse Extreme",
        to: selectedAuth?.username,
        channel: "",
        createdDate: new Date(),
      },
    ])
  }, [selectedAuth]);

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

      {
        !selectedAuth?.isloggedIn ?
          <Login />
          :
          <div className='container'>
            <div className='row  mt-2 main-header-row'>
              <div className="col-lg-5 title-spans">
                <span className='title-span' >User Name : {selectedAuth.username + ""} </span>
              </div>
              <div className="col-lg-5 title-spans ">
                <span className='title-span' >Room : {selectedAuth.room + ""} </span>
              </div>
              <div className="col login-button">
                <div
                  onClick={e => logout(e)}
                  className="btn btn-outline-primary" >Log out</div>
              </div>
            </div>
            <div className='row main-row'>

              {
                !!messageList.length && messageList.map(item => (

                  <>
                    {selectedAuth?.username === item.me &&
                      <>
                        <div className="col-lg-4"></div>
                        <div className="col"></div>
                      </>
                    }

                    <div key={item.id} className="col-lg-5"  >
                      <div className='row message-row'>
                        <div className="col-lg-7 message-me">
                          {selectedAuth?.username !== item.me && item.me}
                        </div>
                        <div className="col-lg-4 message-createdDate">{dateFormat(item.createdDate)}</div>
                        <div className='col-lg-12 message-content'>
                          {item.message}
                        </div>
                      </div>
                    </div>
                    {!(selectedAuth?.username === item.me) &&
                      <>
                        <div className="col"></div>
                        <div className="col-lg-4"></div>
                      </>
                    }
                  </>
                ))
              }

              <hr />

            </div>
            <div className='row'>
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
