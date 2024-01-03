import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/login";
import { createTheme } from "@mui/material";
import FilteredProduct from "./Components/FilteredProduct";
import Sale from "./Pages/Sale";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";

function App() {
  // const [count, setCount] = useState(0);
  const theme =useMemo(
    () =>
      createTheme({
        breakpoints :{
          keys:["xs" , "sm" , "md" ,"lg", "xl" ],
      values:{
          xs:300,
          sm :400,
          md:820,
          lg:1280
      }
        }
      }),
    
  );
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Dashboard />}></Route>
          <Route path="/sale" element={<Sale />}></Route>
          <Route path="/shop" element={<FilteredProduct />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />


        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
