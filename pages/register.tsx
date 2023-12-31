// Import necessary modules and components
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSignup } from "../hooks/useSignup";

// Define the Login component
export default function Register() {
  // State variables to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  // Custom hook for user authentication
  const { signup, isPending, error } = useSignup();
  const router = useRouter();
  const { user } = useAuthContext();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call signup function from useSignup hook
    signup(email, password, fullName);
  };

  // Redirect to home page if user is already authenticated
  if (user) router.push("/");

  // Render the login form
  return (
    <main className="mx-auto flex w-full items-center justify-center bg-gray-900 text-white mt-16">
      <form
        className="flex w-[30rem] flex-col space-y-10"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <div className="text-center text-4xl font-medium">Register</div>

        {/* Email Input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password Input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* Full Name Input */}
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>

        {/* Submit Button */}
        {!isPending && (
          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            REGISTER
          </button>
        )}

        {/* Loading Button */}
        {isPending && (
          <button
            disabled
            type="button"
            className="transform rounded-sm bg-indigo-600 py-2 font-bold hover:bg-indigo-500 "
          >
            {/* Loading Spinner */}
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Loading Spinner Paths */}
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        )}

        {/* Display error message if there is an error */}
        {error && <p>{error}</p>}
      </form>
    </main>
  );
}
