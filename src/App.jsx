import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TopPage from "./components/TopPage";
import SignUpPage from "./components/SignUpPage";
import SignIn from "./components/SignIn";
import Securitypage from "./components/Securitypage";
import Loader from "./components/Loader";
import { useState } from "react";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Journey from "./components/Journey";
import NearestStation from "./components/NearestStation";
import LostAndFound from "./components/LostandFound";
import NetworkPage from "./components/NetworkPage";
import HelplineSection from "./components/HelplineSection";
import FaqSection from "./components/FaqSection";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      {/* Main App Content with Conditional Blur */}
      <div className={`${loading ? "filter blur-sm pointer-events-none" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header setLoading={setLoading} />
                <Navbar />
                <FaqSection />
                <HelplineSection />
                <NetworkPage />
                <LostAndFound />
                <NearestStation />
                <Journey />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route path="/LoginPage" element={<SignUpPage />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
