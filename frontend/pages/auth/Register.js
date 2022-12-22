import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { MdClose } from "react-icons/md";
function Register(props) {
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
  const handleClose = () => {
    props.registry();
  };

  return (
    <div className="absolute top-0 p-10 h-full left-[50%] -translate-x-[50%] backdrop-blur-sm w-full transition-all ease-out">
      <div className="justify-center items-center h-full text-zinc-200 mx-auto mt-4 max-w-[400px]   bg-gradient-to-br from-[#744cf9] to-[#cec0fd] rounded-lg p-2">
        <form className="w-96 p-6 shadow-full rounded-md ">
          <div className="flex justify-end">
            <MdClose className="cursor-pointer text-lg" onClick={handleClose} />
          </div>
          <div className="text-zinc-100 text-xl">Create a new Account</div>

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
              className="mt-3 rounded-full w-40 h-10 bg-[#734bf9] mb-2 hover:bg-[#814cff]"
              value="Register"
            >
              Register
            </button>
          </div>
        </form>
        <div className="my-1 text-center font-bold text-white">
          ----------- OR -----------
        </div>
        <div className="text-zinc-100 text-center">Sign Up with:</div>
        <div className="my-3 text-center">
          <div className="flex justify-center bg-[#734bf9] rounded-md mx-8 p-1 cursor-pointer hover:bg-[#814cff]">
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
          <div className="flex justify-center bg-[#734bf9] rounded-md mx-8 p-1 cursor-pointer hover:bg-[#814cff]">
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
          <div className="flex justify-center bg-[#734bf9] rounded-md mx-8 p-1 cursor-pointer hover:bg-[#814cff]">
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
  );
}

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
