import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    loginHandler(email, password);
  };

  return (
    <div className=" mt-20">
      <h1 className="text-3xl">Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
