import { useState } from "react";
import styles from "../styles/signup.module.css";
//import { useSignup } from "../hooks/useSignup";
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSignup } from "../hooks/useSignup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { signup, isPending, error } = useSignup();
  const router = useRouter();
  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, fullName);
  };

  if (user) router.push("/");

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <form
        className="flex w-[30rem] flex-col space-y-10"
        onSubmit={handleSubmit}
      >
        <div className="text-center text-4xl font-medium">Register</div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>

        {!isPending && (
          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            REGISTER
          </button>
        )}
        {isPending && (
          <button
            className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
            disabled
          >
            Loading...
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </main>
  );
}
