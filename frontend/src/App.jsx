import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/auth/Register";
import SideBar from "./components/navigations/SideBar";
import Navbar from "./components/navigations/Navbar";
import Login from "./components/auth/Login";
import Footer from "./components/navigations/Footer";
import MainContent from "./components/main/MainContent";

function App() {
  return (
    <>
     
     <SideBar/>
     <Navbar/>
     <MainContent/>
     {/* <main className="w-full   lg:ml-[19rem] relative z-20 pt-10 xl:max-w-none">
      <Register/>
      <Login/>
     </main> */}
     <Footer/>
    </>
  );
}

export default App;
