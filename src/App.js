// import Home from "./pages/home/home";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Login from "./pages/login/Login";
// import New from "./pages/new/New";
// import Single from "./pages/single/Single";
// import List from "./pages/list/List";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="other">
          other
        </div>

      </div>




    </div>
  );
}

export default App;
