import logo from './logo.svg';
import Login from './component/login/login';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedAuthentication } from './redux/Authentication/AuthenticationSlice';

function App() {

  const selectedAuth = useSelector(selectedAuthentication);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div >
      <span style={{ color: "white" }}>isloggedIn : {selectedAuth.isloggedIn + ""} </span>
      <hr />
      <hr />
      {
        !selectedAuth?.isloggedIn ?
          <Login />
          :
          ""
      }
    </div>
  );
}

export default App;
