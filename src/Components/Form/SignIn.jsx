import React, { useContext, useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Provider/AuthProvider'


function SignIn() {
    const{handleSignInBtn,user}=useContext(AuthContext)
console.log(user,"next page")
  return (
  <>
 <div onClick={()=>handleSignInBtn()} className="flex justify-center my-10 cursor-pointer">
  <button
    className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-lg bg-white 
               hover:bg-gray-100 transition duration-300 shadow-sm"
  >
    <FcGoogle className="text-2xl" />
    <span className="text-gray-700 font-medium">
      Sign in with Google
    </span>
  </button>
</div>
{/* <div>
{user?.photoURL}
{user?.displayName}
{user?.email}
</div> */}

  </>
  )
}

export default SignIn