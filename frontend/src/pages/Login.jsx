import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data) //Debug

      if (response.ok) {
        localStorage.setItem("access", data.tokens.access);
        localStorage.setItem("refresh", data.tokens.refresh);

        toast.success("Login successful");
        navigate("/")
      } else {
        let errorMessages = []
        console.log(errorMessages)
        for (const field in data) {
          errorMessages.push(`${field}: ${data[field][0]}`)
        }

        toast.error("Login failed\n" + errorMessages.join("\n"));
      }
    } catch (err) {
      console.error(err); //Debug
      toast.error("Network error", {description: "Please try again later."})
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
        <p className="text-sm text-gray-600">Sign in to continue shopping with us.</p>

        <form action="" onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Username</label>
            <input 
              type="text" 
              placeholder="john doe" id="" 
              className="mt-1 rounded-lg border px-3 py-2 w-full border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1  focus:ring-gray-900"
              onChange={(e) => setUsername(e.target.value)}  
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
            Sign In
          </button>
        </form>
          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-gray-900 hover:underline font-medium">Create one</Link>
          </p>
      </div>
    </div>
  );
}