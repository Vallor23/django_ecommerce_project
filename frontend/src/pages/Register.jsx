import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/users/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await response.json();
      console.log(data)  //Debug
      if (response.ok) {
        toast.success("Registration successful");

        navigate("/")
      } else {

        let errorMessages = []
        for (const field in data) {
          errorMessages.push(`${field}: ${data[field][0]}`)
        }

        toast.error("Registration failed\n" + errorMessages.join("\n"));
      }
    } catch (err) {
      console.error(err);  //Debug
      toast("Network error", {description: "Something went wrong.",})
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900">Create Account</h2>
        <p className="text-sm text-gray-600">Join us and start your shopping journey today.</p>

        <form action="" onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Fullname</label>
            <input 
              type="text" 
              placeholder="john doe"
              className="mt-1 rounded-lg border px-3 py-2 w-full border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1  focus:ring-gray-900"
              onChange={(e) => setUsername(e.target.value)}  
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input 
              type="text" 
              placeholder="you@example.com" id="" 
              className="mt-1 rounded-lg border px-3 py-2 w-full border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1  focus:ring-gray-900"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input 
              type="text" 
              placeholder="password" id="" 
              className="mt-1 rounded-lg border px-3 py-2 w-full border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1  focus:ring-gray-900"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-gray-700 rounded-lg text-white hover:bg-gray-800 focus:outline-none py-2">
            Create Account
          </button>
        </form>
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-900 hover:underline font-medium">Sign in</Link>
          </p>
      </div>
    </div>
  );
}

