import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import FeatureCards from './components/Sections/FeatureCards';
import AboutUs from './components/Sections/AboutUs';
import BoardDirectors from './components/Sections/BoardDirectors';
import Services from './components/Sections/Services';
import CertificateClasses from './components/Sections/CertificateClasses';
import VideoSection from './components/Sections/VideoSection';
import FAQ from './components/Sections/FAQ';
import NewsUpdates from './components/Sections/NewsUpdates';
import ClientsPartners from './components/Sections/ClientsPartners';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <AboutUs />
        <BoardDirectors />
        <Services />
        <CertificateClasses />
        <VideoSection />
        <FAQ />
        <NewsUpdates />
        <ClientsPartners />
      </main>
      <Footer />
    </div>
  );
}

export default App;