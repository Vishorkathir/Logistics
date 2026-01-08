import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Quote from './pages/Quote';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import TrackingPage from './pages/TrackingPage';
import AboutUs from './pages/AboutUs';
// import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-sand min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/track" element={<TrackingPage />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
          <WhatsAppButton />
          {/* <Chatbot /> */}
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
