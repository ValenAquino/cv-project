import React, { useRef } from "react";
import { NavBar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export function App() {
  const navRef = useRef();
  return (
    <div className="bg-slate-900 h-max text-white">
      <NavBar navRef={navRef}/>
      <Main navRef={navRef}/>
      <Footer />
    </div>
  );
}
