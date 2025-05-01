import React from "react";

const Zerodha: React.FC = () => {
  return (<div>
    <div className="fixed border-b-2 bg-white w-full border-gray-100 " >
      <div className="flex justify-between items-center h-5 px-[15%]  py-7.5">
        <div className="w-sm">
          <img src="https://github.com/Prasadkadam03/Zerodha_frontend_clone/blob/main/Zerodha/src/assets/logo.svg" alt="Logo" className="w-30 h-auto" />
        </div>
        <div className="flex justify-center text-sm text-gray-500 font-medium space-x-10">
          <h6 className="cursor-pointer hover:text-blue-400">Signup</h6>
          <h6 className="cursor-pointer hover:text-blue-400">About</h6>
          <h6 className="cursor-pointer hover:text-blue-400">Product</h6>
          <h6 className="cursor-pointer hover:text-blue-400">Pricing</h6>
          <h6 className="cursor-pointer hover:text-blue-400">Support</h6>
          <h6 className="cursor-pointer hover:text-blue-400">Menu</h6>
        </div>
      </div>
    </div>



    <div className="flex flex-col items-center font-sans pt-15 text-gray-800 h-screen">
      <div className="h-auto w-220 p-15">
        <img src="https://github.com/Prasadkadam03/Zerodha_frontend_clone/blob/main/Zerodha/src/assets/landing.png" alt="landing" />
      </div>
      <h1 className="text-5xl text-bold ">Invest in everything</h1>
      <p className="text-xl py-5 text-center ">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <div className="pt-4">
        <button className="bg-blue-500 text-lg py-2 px-7 rounded text-white font-semibold">Sign up for free</button>
      </div>
    </div>



    <div className="flex justify-center text-gray-700 pt-20 px-[10%] ">
      <div className="justify-start basis-2/3 auto px-20 py-5 ">
        <p className="text-4xl font-bold py-8" >Trust with confidence</p>
        <div>
          <div>
            <p className="text-xl font-semibold py-3">Customer-first always</p>
            <p className="text-md font-normal pb-3">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div>
            <p className="text-xl font-semibold py-3">No spam or gimmicks</p>
            <p className="text-md pb-3">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span className="text-blue-500 hover:text-black">Our philosophies.</span></p>
          </div>
          <div>
            <p className="text-xl font-semibold py-3">The Zerodha universe</p>
            <p className="text-md pb-3">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div>
            <p className="text-xl font-semibold py-3">Do better with money</p>
            <p className="text-md pb-3">With initiatives like <span className="text-blue-500 text-lg hover:text-black">Nudge</span>  and <span className="text-blue-500 hover:text-black">Kill Switch,</span>  we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
      </div>
      <div className=" items-center py-15 ">
        <img className="" src="https://github.com/Prasadkadam03/Zerodha_frontend_clone/blob/main/Zerodha/src/assets/ecosystem.png" alt="ecosystem" />
        <div className="flex justify-center">
          <span className="text-blue-500 hover:text-black">Explore our products </span> <span  className="ps-5 text-blue-500 hover:text-black">Try Kite demo </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Zerodha;
