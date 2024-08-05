import React from 'react'

export default function Card({ name, price, rating }) {
  return (
    <div className='flex flex-col mt-6 shadow-md  rounded-xl w-85 bg-orange-300'>
      <div
        className="h-56 mx-4 p-2 overflow-hidden text-white shadow-lg  rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="card-image" />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        Rating: {rating}
      </div>
      <div className="p-6 pt-0">
        <button
          className=" font-bold text-center  text-xs py-3 px-6 rounded-lg bg-gray-900 text-white"
          type="button">
          {price}
        </button>
      </div>
    </div>
  )
}
