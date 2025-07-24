import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* navbar  */}
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Footer  */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
