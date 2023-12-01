import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useMemo, useState } from "react";


function App() {

  return (
      <div className="App">
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;