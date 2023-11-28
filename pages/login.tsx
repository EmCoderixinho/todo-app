import { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isPending} = useLogin()
  const router = useRouter()
  const {user} = useAuthContext()

  const handleSubmit = (e) =>{
    
    e.preventDefault();
    login(email, password)
  }

  if(user) router.push('/')

  return (
    <main className="mx-auto flex w-full items-center justify-center bg-gray-900 text-white relative mt-16">
      <form className="flex w-[30rem] flex-col space-y-10" onSubmit={handleSubmit}>
        <div className="text-center text-4xl font-medium">Log In</div>
  
        <div className="w-full transform border-b-2 dark:border-indigo-500">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-none bg-transparent outline-none placeholder-italic dark:text-white focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
  
        <div className="w-full transform border-b-2 dark:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder-italic dark:text-white focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
  
        {!isPending && (
          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold hover:bg-indigo-400 dark:hover:bg-indigo-500">
            LOG IN
          </button>
        )}
        {isPending && (
          <button
            className="transform rounded-sm bg-indigo-600 py-2 font-bold hover:bg-indigo-400 dark:hover:bg-indigo-500"
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