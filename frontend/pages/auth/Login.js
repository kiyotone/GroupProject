import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCurrentState } from "../../components/CurrentState";
import logo from "../../assets/logo.png";
import Image from "next/image";

import Register from "./Register";

function Login() {
  const errorSimpllifier = {
    401: "Invalid Username or Password",
  };

  const router = useRouter();
  const { changeCurrentState } = useCurrentState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, changeError] = useState("");
  const [registerVisible, setRegisterVisible] = useState(false);

  const handleLogin = async (e) => {
    const uninterceptedAxiosInstance = axios.create();
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(username, password);
    try {
      const response = await uninterceptedAxiosInstance.post(
        "/auth/token",
        data
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("refresh-token", response.data.refresh);
        localStorage.setItem("access-token", response.data.access);
      }
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.access;
      console.log(response.data);
  
      
      router.push("/Dashboard");
    } catch (error) {
      console.log(error);
      changeError(errorSimpllifier[error.response.status]);
    }
  };
  const manageRegistryVisibility = () => {
    setRegisterVisible(!registerVisible);
  };

  return (
    <div className=" text-zinc-900 bg-zinc-200  h-screen relative">
      <div>
        <div className="text-center mb-5 p-3 flex justify-center items-center bg-zinc-300 shadow-sm rounded-b-md">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="company logo"
            className=""
          />
          <div>Company</div>
        </div>
        <div className="flex justify-center items-center ">
          <div
            className="flex bg-gradient-to-br  max-w-[1440px] rounded-l-lg mx-auto  shadow-xl "
            id="login-card"
          >
            <div
              style={{
                backgroundImage:
                  "url(https://assets.entrepreneur.com/content/3x2/2000/20191101085256-budget.jpeg)",
              }}
              className="rounded-l-lg bg-cover bg-center w-[80vw]"
            ></div>
            <div className="h-full bg-zinc-200 shadow-xl rounded-r-md flex flex-col  justify-center opacity-[80%] py-[7rem]">
              <form className="w-96 p-6">
                <h1 className="text-3xl block text-center font-semibold">
                  Login
                </h1>
                <div className={`${!error && "hidden"} text-red-600 `}>
                  {error}
                </div>
                <hr className="mt-3"></hr>
                <div className="mt-3">
                  <label htmlFor="username" className="block text-base mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white rounded-lg"
                    name="username"
                    placeholder="Enter Username"
                  ></input>
                </div>
                <div className="mt-3">
                  <label htmlFor="password" className="block text-base mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white rounded-lg"
                    name="password"
                    placeholder="Enter Password"
                  ></input>
                </div>
                <div className="text-center">
                  <button
                    className="mt-3 rounded-full w-40 h-10 bg-[#734bf9] mb-2"
                    value="Register"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center">
                <div>Don't have an account?</div>
                <div
                  className="text-[#734bf9] cursor-pointer"
                  id="create-account"
                  onClick={manageRegistryVisibility}
                >
                  Create an account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {registerVisible && <Register registry={manageRegistryVisibility} className="transition-all animate-bounce ease-out" />}
    </div>
  );
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
