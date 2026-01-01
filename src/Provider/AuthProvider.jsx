import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from '@firebase/auth'
import { getAuth } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/firebase.config'
export const AuthContext=createContext()

function AuthProvider({children}) {
    
        const auth=getAuth(app)
        const provider=new GoogleAuthProvider()
        const[user,setUser]=useState()
        const[isLoading,setIsLoading]=useState(false)
    
        function handleSignInBtn(){
     return  signInWithPopup(auth,provider)
            // .then((response)=>{
            //     console.log(response)
            //     setUser(response.user)
            // })
            // .catch((err)=>{
            //     console.log(err)
            // })
        }

         // Email and password login 
        const handleAuthWithEmailAndPassword=(email,password)=>{
            setIsLoading(true)
            createUserWithEmailAndPassword(auth,email,password)
          .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

        }
    
        useEffect(()=>{
            const unSubscribe=onAuthStateChanged(auth,currentUser=>{
                console.log(currentUser)
                setUser(currentUser)
                setIsLoading(false  )
            }) 
            return ()=> unSubscribe()
        },[])

        const authInfo={
            handleSignInBtn,
            user,
            handleAuthWithEmailAndPassword,
            isLoading,
        }

       
    
  return (
 <>
 <AuthContext.Provider value={authInfo}>

{children}
 </AuthContext.Provider>
 </>
  )
}

export default AuthProvider