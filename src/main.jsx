import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Navbar, Footer } from "./containers/containers";
import Waitlist from "./pages/Waitlist.jsx";
import { BrowserRouter } from "react-router-dom";
import Routing from "./pages/Routing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
        <Navbar />
        <div className="p-[75px] px-4 flex justify-center overflow-auto">
          <div className="w-[1000px]">
            <Routing />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
