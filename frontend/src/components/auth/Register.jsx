import React from 'react'

const Register = () => {
  return (
    <div>
       <form className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
          <p className="text-2xl font-semibold">Create Account</p>
          <p>Please sign up to book appointment</p>
          <div className="w-full ">
            <p>Full Name</p>
            <input
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="text"
              required=""
            //   value=""
            />
          </div>
          <div className="w-full ">
            <p>Email</p>
            <input
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="email"
              required=""
            //   value=""
            />
          </div>
          <div className="w-full ">
            <p>Password</p>
            <input
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="password"
              required=""
            //   value=""
            />
          </div>
          <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
            Create account
          </button>
          <p>
            Already have an account?{" "}
            <span className="text-primary underline cursor-pointer">
              Login here
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
