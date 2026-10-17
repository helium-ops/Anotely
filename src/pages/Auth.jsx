import React from "react";

const Auth = () => {
  const headers = [
    "Welcome Back",
    "Ready to Continue?",
    "Your Learning Journey Awaits",
    "Let's Pick Up Where You Left Off",
    "Good to See You Again",
    "Your Next Chapter Starts Here",
    "Back to Your Studies",
    "Let's Keep Learning",
    "Your Goals Are Waiting",
    "Time to Get Back on Track",
    "Continue Your Journey",
    "Your Study Space Awaits",
    "Let's Make Progress",
    "Ready for Another Session?",
    "Pick Up Where You Left Off",
    "Your Future Starts Today",
    "Keep the Momentum Going",
    "Back for More?",
    "Let's Get Back to It",
    "Learning Never Stops",
    "One Step Closer to Your Goals",
    "Your Next Breakthrough Awaits",
    "Let's Make Today Count",
    "Welcome to Your Study Space",
    "Ready to Learn Something New?",
    "Your Progress Starts Here",
    "Let's Get Focused",
    "Back to Building Your Future",
    "It's Good to Have You Back",
    "Your Learning Hub Awaits",
    "Let's Continue Growing",
    "Small Steps, Big Results",
    "Your Next Goal Is Within Reach",
    "Time to Focus and Learn",
    "Make Room for New Ideas",
    "Your Journey Continues",
    "Let's Get Things Done",
    "Ready to Reach Your Goals?",
    "Back to Your Best Work",
    "A New Session Begins",
    "Your Potential Awaits",
    "Let's Keep Moving Forward",
    "Study Smarter, Every Day",
    "Your Next Idea Starts Here",
    "Back to Making Progress",
    "Turn Your Goals into Reality",
    "A Fresh Start Awaits",
    "Let's Build Better Habits",
    "Your Desk Is Ready",
    "Welcome Back to Anotely",
  ];

  return (
    <main className="w-full h-full flex justify-center items-center flex-col gap-6">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-4.2xl">{headers[Math.floor(Math.random() * headers.length)]}</h1>
        <section className=" scale-80 sm:scale-120 md:scale-140 lg:scale-100 bg-[#F3F3F3] flex justify-center items-center flex-col h-120 w-120 rounded-3xl relative dark:bg-[#09090B]">
            <h2 className="text-2xl sm:text-3xl font-semibold absolute top-2 mt-5">Login</h2>
            <section className="w-full flex justify-start items-center flex-col gap-10 mt-12">
                <form className="flex justify-center items-center flex-col w-[100%] gap-10">
                    <section className="flex justify-center items-center w-full flex-col gap-5">
                    <label htmlFor="#email" className="w-[80%] flex justify-center items-start flex-col gap-2">
                        <p>Email</p>
                        <input type="text" id="email" placeholder="name@example.com" className="w-full border border-[#EDE9E9] bg-[#FFFFFF] h-10 rounded-full w-full pl-6 placeholder:text-md placeholder:font-normal dark:bg-[#111827] dark:border-[#000450]"/>
                    </label>
                    <label htmlFor="#email" className="w-[80%] flex justify-center items-start flex-col gap-2">
                    
                        <p>Password</p>
                        <input type="text" id="password"  placeholder="●●●●●●●●" className="w-full border border-[#EDE9E9] bg-[#FFFFFF] h-10 rounded-full w-full pl-6 placeholder:text-md placeholder:font-normal dark:bg-[#111827] dark:border-[#000450]"/>
                    </label>
                    </section>
                    <button type="submit" className="h-10 w-[80%]  rounded-full font-semibold btn">Submit</button>
                </form>
                <section className="flex justify-center items-center flex-col gap-1">
                    <p className="font-medium">Forgot password? <a href="" className="text-blue-600 dark:text-blue-200">Reset password</a></p>
                    <p className="font-medium">Don't have an account? <button className="text-blue-600 dark:text-blue-200">Sign up</button></p>
                </section>
            </section>
        </section>
    </main>
  );
};

export default Auth;
