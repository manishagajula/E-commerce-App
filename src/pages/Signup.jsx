import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    signUpHandler(email, password);
  };

  return (
    <div className=" mt-20">
      <h1 className="text-3xl">Sign up</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-3"
      >
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="border"
          />
        </div>
        <button type="submit">Sign up</button>
        <p>Don't have an account ?</p>
        <button onClick={() => navigate("/login")}>Login</button>
      </form>
    </div>
  );
};
