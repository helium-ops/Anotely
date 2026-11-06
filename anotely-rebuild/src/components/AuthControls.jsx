import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthProvider';

const AuthControls = () => {
  const { signUp, login } = useAuth();
  const {register, handleSubmit, formState: errors} = useForm();
  const [quotes, setQuotes] = useState([
  "Every great journey starts here.",
  "Your next chapter starts today.",
  "Small steps. Big possibilities.",
  "Dream it. Build it. Become it.",
  "The future is yours to create.",
  "Progress begins with showing up.",
  "Good to have you back.",
  "Your space. Your pace.",
  "Pick up where you left off.",
  "A little closer to your goals.",
  "Make today count.",
  "Learn something. Become something.",
  "One session closer to your goals.",
  "Your goals deserve your attention.",
  "Focus on what matters.",
  "Build knowledge, one day at a time.",
  "Every day is a new opportunity.",
  "Great things take time.",
  "Believe in your progress.",
  "Your journey, your growth."
]);
const [authMethod, setAuthMethod] = useState('login');
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

function onSubmit(data){
    if(authMethod === 'login'){
      login(data.email, data.password)
    } else {
      signUp(data.email, data.password);
    }
}

return (
  <section className="min-h-screen w-full flex flex-col justify-center items-center gap-5 p-4 lg:pb-8">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center">
      {randomQuote}
    </h1>

    <section className="surface rounded-2xl min-h-80 w-full max-w-80 sm:max-w-100 md:max-w-110 p-6 flex flex-col justify-between gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        {authMethod === 'login' ? "Login" : 'Sign up'}
      </h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', {required: "Email is required"})}
            placeholder="name@example.com"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800"
            required
          />
          {errors.email && <p className='text-red'>{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register('password', {required: "Password is required"})}
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          {authMethod === 'login' ? 'Login': 'Sign up'}
        </button>
      </form>

      <section className="flex flex-col gap-3 text-center text-sm scale-110">
        <p>
          Forgot password?{" "}
          <a href="/reset-password" className="text-blue-600 hover:underline">
            Reset password
          </a>
        </p>

        <p>
          { authMethod === 'login' ? "Don't have an account?" : 'Already have an account?'}
          <button className="text-blue-600 hover:underline ml-1" onClick={()=>{setAuthMethod(authMethod === 'login' ? 'signUp' : 'login');}}>
            {authMethod === 'login' ? 'Sign up': 'Login'}
          </button>
        </p>
      </section>
    </section>
  </section>
);

}

export default AuthControls
