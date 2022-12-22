import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import registerimg from "../../assets/registerimg.jpg";
import Image from "next/image";

function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const uninterceptedAxiosInstance = axios.create();

    const data = {
      username: username,
      password: password,
    };
    console.log(data);

    try {
      const response = await uninterceptedAxiosInstance.post(
        "/auth/register",
        data
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("refresh-token", response.data.refresh);
        localStorage.setItem("access-token", response.data.access);
      }
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.access;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    router.push("/Dashboard");
  };

  return (
    <div className="flex justify-center items-center h-full text-zinc-200 overflow-hidden">
      <div className="flex bg-gradient-to-br from-[#8c60e3a5] to-[#453ed376] max-w-[75vw] rounded-lg">
        <div
          style={{
            backgroundImage:
              "url(https://assets.entrepreneur.com/content/3x2/2000/20191101085256-budget.jpeg)",
          }}
          className="rounded-l-lg bg-cover bg-center"
        ></div>
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
                onClick={handleRegister}
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
  );
}

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
