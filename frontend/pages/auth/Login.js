import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCurrentState } from "../../components/CurrentState";
import logo from "../../assets/logo.png";
import Image from "next/image";

function Login() {
  
  const errorSimpllifier = {
    401: "Invalid Username or Password",
  };

  const router = useRouter();
  const { changeCurrentState } = useCurrentState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, changeError] = useState("");

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
      changeCurrentState("loggedIn");
      router.push("/Dashboard");
    } catch (error) {
      console.log(error);
      changeError(errorSimpllifier[error.response.status]);
    }
  };

  return (
    <div className=" text-zinc-900 bg-zinc-200  h-screen">
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
          className="flex bg-gradient-to-br  max-w-[1440px] rounded-l-lg mx-auto h-[75vh] shadow-xl "
          id="login-card"
        >
          <div
            style={{
              backgroundImage:
                "url(https://assets.entrepreneur.com/content/3x2/2000/20191101085256-budget.jpeg)",
            }}
            className="rounded-l-lg bg-cover bg-center w-[80vw]"
          ></div>
          <div className="h-full bg-zinc-200 shadow-xl rounded-r-md flex flex-col  justify-center opacity-[80%] ">
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
              >
                Create an account
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////Register Card//////////////// */}
      <div className="hidden" id="register-card">
        <div className="flex justify-center items-center h-full text-zinc-200 mx-auto max-[750px]:">
          <div>
            <form className="w-96 p-6 shadow-full rounded-md ">
              <h1 className="text-3xl block text-center font-semibold text-">
                Register
              </h1>
              <div className="mt-3 flex gap-4">
                <div className="">
                  <label htmlFor="firstname" className="block text-base mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstname"
                    onChange={(e) => setUsername(e.target.value)}
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white rounded-md"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="mr-4">
                  <label htmlFor="lastname" className="block text-base mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    onChange={(e) => setUsername(e.target.value)}
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white rounded-md"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="username" className="block text-base mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white rounded-md"
                  placeholder="Enter Username"
                ></input>
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="block text-base mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white rounded-md"
                  placeholder="Enter Password"
                ></input>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-base mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white rounded-md"
                  placeholder="Enter Password Again"
                ></input>
              </div>
              <div className="mt-3 h-10 flex justify-center w-full items-center">
                <button
                  className="mt-3 rounded-full w-40 h-10 bg-[#734bf9] mb-2"
                  value="Register"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="my-1 text-center font-bold text-white">
              ----------- OR -----------
            </div>
            <div className="my-3 text-center">
              <div className="flex justify-center bg-[#678fde] rounded-md mx-8 p-1">
                <div
                  style={{
                    backgroundImage:
                      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png)",
                  }}
                  className="w-[12px] h-[12px]"
                ></div>
                <div>Facebook</div>
              </div>
            </div>
            <div className="my-3 text-center">
              <div className="flex justify-center bg-[#aba3eb] rounded-md mx-8 p-1">
                <div
                  style={{
                    backgroundImage:
                      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png)",
                  }}
                  className="w-[12px] h-[12px]"
                ></div>
                <div>GitHub</div>
              </div>
            </div>
            <div className="my-3 text-center">
              <div className="flex justify-center bg-[#aba3eb] rounded-md mx-8 p-1">
                <div
                  style={{
                    backgroundImage:
                      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png)",
                  }}
                  className="w-[12px] h-[12px]"
                ></div>
                <div>Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
