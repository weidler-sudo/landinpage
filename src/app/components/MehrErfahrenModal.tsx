import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowRight } from 'lucide-react';

interface MehrErfahrenModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookMeeting: () => void;
}

export function MehrErfahrenModal({ open, onOpenChange, onBookMeeting }: MehrErfahrenModalProps) {
  const handleBookMeeting = () => {
    onOpenChange(false);
    onBookMeeting();
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="relative p-8 border-b border-slate-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

            <Dialog.Close className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Wie Ihr neuer KI-Mitarbeiter Ihre Prozesse automatisiert
            </Dialog.Title>
            <p className="text-lg text-slate-300 leading-relaxed">
              Die meisten Webseiten sind nur digitale Visitenkarten. Wir machen Ihre zu einer 24/7 Vertriebsmaschine. Ein maßgeschneiderter KI-Agent von Novastream.ai ist kein simpler Standard-Chatbot – er ist ein auf Ihr Unternehmen trainierter Vertriebsexperte, der nie schläft, nie krank wird und keine Pause macht.
            </p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Vorteile */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Ihre Vorteile auf einen Blick:</h2>

              <div className="space-y-6">
                {/* Vorteil 1 */}
                <div className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all">
                  <div className="text-3xl flex-shrink-0">🎯</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Lead-Qualifizierung in Echtzeit</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Statt unqualifizierter Anfragen im Postfach filtert die KI vorab Bedarf, Budget und Kontaktdaten. Ihr Vertriebsteam spricht nur noch mit vorqualifizierten, heißen Leads.
                    </p>
                  </div>
                </div>

                {/* Vorteil 2 */}
                <div className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all">
                  <div className="text-3xl flex-shrink-0">⚡</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Sofort-Support</h3>
                    <p className="text-slate-300 leading-relaxed">
                      80 % der Kundenfragen wiederholen sich. Die KI beantwortet diese in Sekunden – mitten in der Nacht oder am Wochenende. Das entlastet Ihre Mitarbeiter massiv.
                    </p>
                  </div>
                </div>

                {/* Vorteil 3 */}
                <div className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all">
                  <div className="text-3xl flex-shrink-0">🔗</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Nahtlose CRM-Integration</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Alle gesammelten Kontaktdaten und Chat-Verläufe fließen vollautomatisch direkt in Ihr bestehendes System. Kein manuelles Abtippen mehr.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance-Garantie */}
            <section className="p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Unsere knallharte Performance-Garantie:</h2>

              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Wir bauen keine Spielereien, wir bauen Systeme, die Umsatz bringen. Deshalb nehmen wir das komplette Risiko auf unsere Kappe:
              </p>

              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Sie erhalten eine <span className="text-white font-semibold">14-tägige Testphase</span>. Wenn der fertige KI-Agent in dieser Zeit nicht einen einzigen Lead für Sie qualifiziert oder technisch nicht einwandfrei läuft, greift unsere <span className="text-white font-semibold">100 % Geld-zurück-Garantie</span> auf das Setup.
              </p>

              <p className="text-xl font-semibold text-white">
                Sie können also nur gewinnen: Entweder Sie haben danach ein hochprofitables System – oder Sie haben keinen Cent verloren.
              </p>
            </section>

            {/* CTA Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleBookMeeting}
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-3 mx-auto"
              >
                Jetzt kostenloses Erstgespräch buchen
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
