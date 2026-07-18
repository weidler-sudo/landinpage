import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';

import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ImpressumModal } from './components/ImpressumModal';
import { DatenschutzModal } from './components/DatenschutzModal';
import { AGBModal } from './components/AGBModal';
import { StickyCTA } from './components/StickyCTA';
import { Toaster } from './components/ui/sonner';

import { Home } from './pages/Home';
import { KiAgenten } from './pages/KiAgenten';
import { Webdesign } from './pages/Webdesign';
import { Preise } from './pages/Preise';
import { Kontakt } from './pages/Kontakt';

// Page transition wrapper
function AnimatedRoutes({ onOpenContact }: { onOpenContact: () => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <Routes location={location}>
          <Route path="/"            element={<Home onOpenContact={onOpenContact} />} />
          <Route path="/ki-agenten"  element={<KiAgenten onOpenContact={onOpenContact} />} />
          <Route path="/webdesign"   element={<Webdesign onOpenContact={onOpenContact} />} />
          <Route path="/preise"      element={<Preise onOpenContact={onOpenContact} />} />
          <Route path="/kontakt"     element={<Kontakt onOpenContact={onOpenContact} />} />
          {/* Fallback */}
          <Route path="*"            element={<Home onOpenContact={onOpenContact} />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  const [isContactModalOpen, setIsContactModalOpen]     = useState(false);
  const [isImpressumOpen, setIsImpressumOpen]           = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen]       = useState(false);
  const [isAGBOpen, setIsAGBOpen]                       = useState(false);

  const openContact = () => setIsContactModalOpen(true);

  return (
    <>
      {/* Neural network background canvas */}
      <AnimatedBackground />

      {/* Sticky Navbar */}
      <Navbar onOpenContact={openContact} />

      {/* Page routes with transitions */}
      <AnimatedRoutes onOpenContact={openContact} />

      {/* Footer */}
      <Footer
        onOpenImpressum={() => setIsImpressumOpen(true)}
        onOpenDatenschutz={() => setIsDatenschutzOpen(true)}
        onOpenAGB={() => setIsAGBOpen(true)}
      />

      {/* Sticky CTA button */}
      <StickyCTA onOpenModal={openContact} />

      {/* Modals */}
      <ContactModal    open={isContactModalOpen}  onOpenChange={setIsContactModalOpen} />
      <ImpressumModal  open={isImpressumOpen}     onOpenChange={setIsImpressumOpen} />
      <DatenschutzModal open={isDatenschutzOpen}  onOpenChange={setIsDatenschutzOpen} />
      <AGBModal        open={isAGBOpen}           onOpenChange={setIsAGBOpen} />

      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}