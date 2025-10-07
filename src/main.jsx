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
      <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200">
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
