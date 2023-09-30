import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    alert(userName, userPassword);
  }
  return (
    <div>
      <form>
        <label  style={{ margin: '20px' }}>UserName</label>
        <input
          type="text"
          value={userName}
          placeholder="enter username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label  style={{ margin: '20px' }}>PassWord</label>
        <input
          type="password"
          value={userPassword}
          placeholder="enter password"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <button onClick={clickHandler} disabled={!userName || !userPassword} style={{ margin: '20px' }}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
