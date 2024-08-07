import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from "../rtk-query/userSlice";
import '../App.css';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailmessage, setEmailMessage] = useState('');
  const [passwordmessage, setPasswordMessage] = useState('');
  const navigate = useNavigate();
  const [loginUser, {data}] = useLoginUserMutation();

  const handleEmail = (e) => {
    let inputValue = e.target.value;

    setEmail(inputValue);
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(inputValue)) {
      setEmailMessage('Error! you have entered invalid email.');
    } else {
      setEmailMessage('');
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    if (password.length < 3) {
      setPasswordMessage('The password must be 4 characters or longer')
    }
    else {
      setPasswordMessage('');
    }
  };

  // useEffect(() => {
  //   if (data) {
  //     localStorage.setItem('token', data.token);
  //     console.log(data);
  //     navigate(`/dashboard/${data.userId}`);
  //   }
  // }, [data, navigate]);
// console.log("================",  localStorage.getItem('token'))
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({email, password}).unwrap();
      const userId = response.user._id;
      // console.log("==============", response);
      localStorage.setItem('token', response.token); 
      navigate(`/dashboard/${userId}`);
      // console.log(response);
      // if (email == emailmessage && password == passwordmessage)
      //   alert('Email or password is not correct');
      // else {
      //   console.log(`${response.userId}`);
      // }
    } catch (error) {
      console.error(error);
    }
  
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
        <div className="flex flex-col gap-6 mb-1">
          <h6 className="font-semibold text-blue-gray-900">Your Email <span className='text-red-500'> {emailmessage}</span></h6>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              placeholder="name@mail.com"
              required
              value={email}
              onChange={handleEmail}
              className=" textcolor h-full w-full rounded-md border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 focus:border-2 focus:border-gray-900"
            />
          </div>
          <h6 className="font-semibold text-blue-gray-900">Password <span className='text-red-500'> {passwordmessage}</span></h6>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              placeholder="********"
              required
              value={password}
              onChange={handlePassword}
              className=" textcolor  h-full w-full rounded-md border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 focus:border-2 focus:border-gray-900"
            />
          </div>
        </div>
        <button
          className="mt-6 w-full rounded-lg bg-gray-900 py-3 px-6 text-center text-xs font-bold text-white"
          type="submit"
        >
         LOG IN
        </button>
      </form>
    </div>
  );
}
