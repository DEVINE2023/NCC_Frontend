import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import FeatureCards from './components/Sections/FeatureCards';
import AboutUs from './components/Sections/AboutUs';
import KnowledgeBase from './components/Sections/KnowledgeBase';
import BoardDirectors from './components/Sections/BoardDirectors';
import Services from './components/Sections/Services';
import CertificateClasses from './components/Sections/CertificateClasses';
import VideoSection from './components/Sections/VideoSection';
import FAQ from './components/Sections/FAQ';
import NewsUpdates from './components/Sections/NewsUpdates';
import ClientsPartners from './components/Sections/ClientsPartners';
import DSCPurchase from './components/Sections/DSCPurchase';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <FeatureCards />
                <AboutUs />
                <KnowledgeBase />
                <BoardDirectors />
                <Services />
                <CertificateClasses />
                <VideoSection />
                <FAQ />
                <NewsUpdates />
                <ClientsPartners />
              </>
            } />

            {/* DSC Purchase Page */}
            <Route path="/renew-dsc" element={<DSCPurchase />} />
            <Route path="/buy-dsc" element={<DSCPurchase />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;