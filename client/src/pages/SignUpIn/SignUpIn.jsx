import React, {useState} from "react";
import c from './SignUpIn.module.css'

const SignUpIn = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function login(e){
    e.preventDefault()
    if(username && password){
      props.getAccountData({
        username: username, password: password
      })
    }
  }

  return (
    <section className={`${c.section} flex flexCenter`}>
      <form className={c.form} onSubmit={login}>
        <div>
          <label htmlFor="">Username</label><br />
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Password</label><br />
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
            <button className={`${c.button} salmonBg whiteFont noBorder padding5 width100`}>{!props.loggedIn ? 'Login' : 'Logout'}</button>
        </div>
      </form>
    </section>
  );
};

export default SignUpIn;
