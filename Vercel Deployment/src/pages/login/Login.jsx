import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./style.scss"; // Import the SCSS file

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login successful. Welcome!");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Your Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
