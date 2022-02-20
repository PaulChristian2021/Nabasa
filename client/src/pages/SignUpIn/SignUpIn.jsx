import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {FcReading} from 'react-icons/fc'
import c from "./SignUpIn.module.css";

const SignUpIn = (props) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invaldUsername, setInvaldUsername] = useState(false);
  const [invaldPassword, setInvaldPassword] = useState(false);

  function login(e) {
    e.preventDefault();
    if (!props.loggedIn) {
      if (username && password && username.length > 3 && password.length > 3) {
        props.getAccountData({
          username: username,
          password: password,
        });
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

  return (
    <section className={`${c.section} flex flexCenter flexColumn`}>
      {props.loggedIn && <div>
        <FcReading className="font70 "/>
        </div>}
      <form className={c.form} onSubmit={login}>
        {!props.loggedIn && (
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
      {props.loggedIn && <div>
          <Link to='/books' className={`${c.see} bluegreenBg shadow whiteFont smoothEdge`}>See my books</Link>
        </div>}
    </section>
  );
};

export default SignUpIn;