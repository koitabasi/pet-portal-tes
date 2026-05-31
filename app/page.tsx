import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ContactSection />
      <Footer />
    </main>
  );
}
