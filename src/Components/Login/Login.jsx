import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import { LuLoaderCircle } from "react-icons/lu"

function Login() {
    const{handleAuthWithEmailAndPassword,user,isLoading}=useContext(AuthContext)
    console.log(user)

    const handleLoginBtn=(e)=>{
        e.preventDefault()
        const email=e.target.form.email.value
        const password=e.target.form.pass.value
console.log(email,password)
handleAuthWithEmailAndPassword(email,password)
    }
  return (
   <>
  <div className="min-h-screen flex items-center justify-center from-indigo-500 to-purple-600">
  <form className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Login
    </h2>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Password
      </label>
      <input
        type="text"
        name="pass"
      
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <button onClick={(e)=>handleLoginBtn(e)} className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
    {isLoading ? <LuLoaderCircle className="animate-spin mx-auto text-xl"/>:"Login"}
    </button>
  </form>
</div>


   </>
  )
}

export default Login