
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { ImplementationFocus } from './components/ImplementationFocus';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { DiscoveryForm } from './components/DiscoveryForm';

const App: React.FC = () => {
  const [showDiscovery, setShowDiscovery] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow">
        <Hero onCtaClick={() => setShowDiscovery(true)} />
        <Services />
        <PainPoints />
        <ImplementationFocus />
        <Contact />
      </main>
      <Footer />

      {showDiscovery && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-8 shadow-2xl">
            <button 
              onClick={() => setShowDiscovery(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <DiscoveryForm onClose={() => setShowDiscovery(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
