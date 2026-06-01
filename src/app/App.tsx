import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ContactModal } from './components/ContactModal';
import { ImpressumModal } from './components/ImpressumModal';
import { DatenschutzModal } from './components/DatenschutzModal';
import { AGBModal } from './components/AGBModal';
import { MehrErfahrenModal } from './components/MehrErfahrenModal';
import { CustomChatbotLoader } from './components/CustomChatbotLoader';
import { SEO } from './components/SEO';
import { StickyCTA } from './components/StickyCTA';
import { Bot, Zap, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [isAGBOpen, setIsAGBOpen] = useState(false);
  const [isMehrErfahrenOpen, setIsMehrErfahrenOpen] = useState(false);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pb-24">
        {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mx-auto">
                <Sparkles className="w-4 h-4" />
                <span>KI-Powered Business Automation</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Maximieren Sie Ihre Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">mit KI</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Novastream.ai entwickelt maßgeschneiderte KI-Agenten, die Ihren Vertrieb und Kundenservice vollautomatisch auf ein neues Level heben. Qualifizieren Sie Leads rund um die Uhr und entlasten Sie Ihr Team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                >
                  Kostenloses Erstgespräch buchen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsMehrErfahrenOpen(true)}
                  className="px-8 py-4 border border-slate-700 hover:border-blue-500/50 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Mehr erfahren
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-400">14-tägige Testphase</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-400">100% Geld-zurück-Garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features & Benefits */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Warum <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Novastream.ai</span>?
            </h2>
            <p className="text-xl text-slate-400">KI-Agenten, die wirklich arbeiten – während Sie wachsen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Lead-Qualifizierung</h3>
              <p className="text-slate-400 leading-relaxed">
                Ihr KI-Agent beantwortet Anfragen in Echtzeit, qualifiziert Leads automatisch und übergibt nur echte Chancen an Ihr Vertriebsteam – rund um die Uhr, auch nachts und am Wochenende.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nahtlose CRM-Integration</h3>
              <p className="text-slate-400 leading-relaxed">
                Anbindung an Ihre bestehenden Systeme wie HubSpot, Salesforce oder Pipedrive. Alle Daten werden automatisch synchronisiert – ohne manuellen Aufwand für Ihr Team.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Entlastung für Ihr Team</h3>
              <p className="text-slate-400 leading-relaxed">
                Reduzieren Sie repetitive Aufgaben um bis zu 80%. Ihr Team fokussiert sich auf strategische Aufgaben, während der KI-Agent Routineanfragen übernimmt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">So funktioniert's</h2>
            <p className="text-xl text-slate-400">In drei einfachen Schritten zu Ihrem KI-Agenten</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-blue-500/30">
                <span className="text-5xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Analyse</h3>
              <p className="text-slate-400">
                Wir analysieren Ihre Prozesse, verstehen Ihre Anforderungen und identifizieren Automatisierungspotenziale in Vertrieb und Service.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-blue-500/30">
                <span className="text-5xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Implementierung</h3>
              <p className="text-slate-400">
                Wir entwickeln Ihren maßgeschneiderten KI-Agenten, trainieren ihn auf Ihre Branche und integrieren ihn nahtlos in Ihre Systeme.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-blue-500/30">
                <span className="text-5xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Skalierung</h3>
              <p className="text-slate-400">
                Ihr KI-Agent geht live. Wir optimieren kontinuierlich die Performance und helfen Ihnen, weitere Prozesse zu automatisieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Bereit für die Zukunft Ihres Vertriebs?
          </h2>
          <p className="text-xl mb-10 text-blue-50">
            Vereinbaren Sie jetzt Ihre kostenlose Potenzialanalyse und entdecken Sie, wie KI-Agenten Ihr Business transformieren können.
          </p>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="group px-10 py-5 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-white/30 flex items-center justify-center gap-3 mx-auto"
          >
            Jetzt Potenzialanalyse sichern
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm text-blue-100 mt-6">
            ✓ Unverbindlich  ✓ Kostenlos  ✓ In 30 Minuten mehr Klarheit
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Novastream.ai
              </h3>
              <p className="text-slate-400 mb-4">
                Maßgeschneiderte KI-Agenten für Vertrieb und Kundenservice. Automatisieren Sie Ihre Prozesse und fokussieren Sie sich auf Wachstum.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button
                    onClick={() => setIsImpressumOpen(true)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDatenschutzOpen(true)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Datenschutz
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsAGBOpen(true)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    AGB
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="https://www.linkedin.com/in/justin-weidler-1a3177408?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/novastream.ai?igsh=Y3hvOHg0YWNyYzNp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>© 2026 Novastream.ai. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      {/* Impressum Modal */}
      <ImpressumModal open={isImpressumOpen} onOpenChange={setIsImpressumOpen} />

      {/* Datenschutz Modal */}
      <DatenschutzModal open={isDatenschutzOpen} onOpenChange={setIsDatenschutzOpen} />

      {/* AGB Modal */}
      <AGBModal open={isAGBOpen} onOpenChange={setIsAGBOpen} />

      {/* Mehr Erfahren Modal */}
      <MehrErfahrenModal
        open={isMehrErfahrenOpen}
        onOpenChange={setIsMehrErfahrenOpen}
        onBookMeeting={() => setIsContactModalOpen(true)}
      />

      {/* Dein eigener Chatbot - Konfiguriere ihn in src/app/components/CustomChatbotLoader.tsx */}
      {/* <CustomChatbotLoader /> */}
      <StickyCTA onOpenModal={() => setIsContactModalOpen(true)} />
      <Toaster />
    </div>
    </>
  );
}