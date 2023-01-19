import React from "react";
import { NavBar } from "./components/Navbar";
import { Main } from "./components/Main"
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="bg-slate-900 h-fit text-white">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}
