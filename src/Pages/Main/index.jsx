import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../../Components/Header';
import NavBar from '../../Components/Navbar';
import Home from '../../Pages/Home';
import Maps from '../../Pages/Maps';
import Gallery from '../../Pages/Gallery';
import ContactForms from '../../Pages/Forms';

export default function Main() {
    return (
      <>
        <Header />
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/forms" element={<ContactForms />} />
            </Routes>
        </BrowserRouter>
      </>
    );
  }
