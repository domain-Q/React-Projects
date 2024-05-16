import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const{setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(username,Password)
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        id=""
      />
      <input
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
        id=""
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
