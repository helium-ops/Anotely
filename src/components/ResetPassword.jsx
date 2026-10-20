import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import toaster from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
function resetPassword(data) {
  const storedUsers = localStorage.getItem("users");

  if (!storedUsers) {
    toaster.error("No accounts yet!");
    return;
  }

  const users = JSON.parse(storedUsers);

  const targetedUser = users.find(
    (user) => user.email === data.email
  );

  if (!targetedUser) {
    toaster.error("Account not found!");
    return;
  }

  if (data.password !== data.confirmPassword) {
    toaster.error("Passwords do not match!");
    return;
  }

  targetedUser.password = data.password;

  localStorage.setItem("users", JSON.stringify(users));

  toaster.success("Password reset successfully!");
}

   const { handleSubmit, register } = useForm();

  return (
    <>
      <section className=" scale-70 sm:scale-70 md:scale-90 lg:scale-100 flex justify-center items-center flex-col h-120 w-120 rounded-3xl relative">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-4.2xl">
          Reset Password
        </h1>
        <section className="w-full flex justify-start items-center flex-col gap-10 mt-12">
          <section className="flex justify-center items-center flex-col w-[100%] gap-10">
            <form className="flex justify-center items-center w-full flex-col gap-5" onSubmit={handleSubmit(resetPassword)}>
              <label
                htmlFor="#email"
                className="w-[80%] flex justify-center items-start flex-col gap-2"
              >
                <p>Email</p>
                <input
                  type="text"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full border border-[#EDE9E9] bg-[#FFFFFF] h-10 rounded-full w-full pl-6 placeholder:text-md placeholder:font-normal dark:bg-[#111827] dark:border-[#000450] outline-none"
                  {...register("email", { required: true })}


                />
              </label>

              <label
                htmlFor="#password"
                className="w-[80%] flex justify-center items-start flex-col gap-2"
              >
                <p>Password</p>
                <input
                  type="text"
                  id="password"
                  placeholder="●●●●●●●●"
                  className="w-full border border-[#EDE9E9] bg-[#FFFFFF] h-10 rounded-full w-full pl-6 placeholder:text-md placeholder:font-normal dark:bg-[#111827] dark:border-[#000450] outline-none"
                  {...register("password", { required: true })}

                />
              </label>
              <label
                htmlFor="#confirm-password"
                className="w-[80%] flex justify-center items-start flex-col gap-2"
              >
                <p>Confirm Password</p>
                <input
                  type="text"
                  id="password"
                  placeholder="●●●●●●●●"
                  className="w-full border border-[#EDE9E9] bg-[#FFFFFF] h-10 rounded-full w-full pl-6 placeholder:text-md placeholder:font-normal dark:bg-[#111827] dark:border-[#000450] outline-none"
                  {...register("confirmPassword", { required: true })}

                />
              </label>
              <button className="h-10 w-[80%]  rounded-full font-semibold btn" onClick={resetPassword} type='submit'>
                Submit
              </button>
            </form>
          </section>
          <button
            className="bg-green-600 dark:bg-green-300 px-5 py-2 text-white font-semibold rounded-full"
            onClick={()=>navigate("/")}
          >
            Back to logging in
          </button>
        </section>
      </section>
    </>
  );
};

export default ResetPassword;
