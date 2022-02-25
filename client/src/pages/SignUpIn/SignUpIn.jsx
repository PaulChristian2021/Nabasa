import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FcReading } from "react-icons/fc";
import c from "./SignUpIn.module.css";

const SignUpIn = (props) => {
  const navigate = useNavigate()
  const loggedIn = props.loggedIn;
  const goToBooksAfterLogin = props.goToBooksAfterLogin;
  const setGoToBooksAfterLogin = props.setGoToBooksAfterLogin;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invaldUsername, setInvaldUsername] = useState(false);
  const [invaldPassword, setInvaldPassword] = useState(false);

  function login(e) {
    e.preventDefault();
    if (!loggedIn) {
      if (username && password && username.length > 3 && password.length > 3) {
        props.getAccountData({
          username: username,
          password: password,
        });
        props.setGoToBooksAfterLogin(false)
        setUsername("");
        setPassword("");
        setInvaldUsername(false);
        setInvaldPassword(false);
      } else {
        if (!username || username.length < 4) {
          setInvaldUsername(true);
        } else {
          setInvaldUsername(false);
        }
        if (!password || password.length < 4) {
          setInvaldPassword(true);
        } else {
          setInvaldPassword(false);
        }
      }
    } else {
      props.logout();
    }
  }

  useEffect(()=>{
    if(loggedIn && !goToBooksAfterLogin) {
      navigate('/books')
      setGoToBooksAfterLogin(true)
    }
  }, [loggedIn, navigate, goToBooksAfterLogin, setGoToBooksAfterLogin])

  return (
    <section className={`${c.section} flex flexCenter flexColumn`}>
      {loggedIn && (
        <div>
          <FcReading className="font70 " />
        </div>
      )}
      <form className={c.form} onSubmit={login}>
        {!loggedIn && (
          <>
            <div>
              <label htmlFor="">Username</label>
              <br />
              <input
                type="text"
                placeholder="at least 4 characters"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              {invaldUsername && (
                <span className="errorFont">Invalid username</span>
              )}
            </div>
            <div>
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                placeholder="at least 4 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              {invaldPassword && (
                <span className="errorFont">Invalid password</span>
              )}
            </div>
          </>
        )}
        <div>
          <button
            className={`${c.button} salmonBg whiteFont noBorder padding10 width100`}
          >
            {!props.loggedIn ? "Login" : "Logout"}
          </button>
        </div>
      </form>
      {props.loggedIn && (
        <div>
          <Link
            to="/books"
            className={`${c.see} noUnderline bluegreenBg shadow whiteFont smoothEdge`}
          >
            See my books
          </Link>
        </div>
      )}
      {!props.loggedIn && <button className="bottomRightNotif blackBg whiteFont smoothEdge padding10 pointer noBorder shadow">
          <p>Username: paul</p>
          <p>Password: paul</p>
        </button>}
    </section>
  );
};

export default SignUpIn;
