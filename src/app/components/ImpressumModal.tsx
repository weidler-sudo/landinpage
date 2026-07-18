import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface ImpressumModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImpressumModal({ open, onOpenChange }: ImpressumModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] md:w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="sticky top-0 p-6 md:p-10 border-b border-slate-800 bg-slate-900 rounded-t-2xl z-10">
            <Dialog.Close className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </Dialog.Close>

            <Dialog.Title className="text-2xl md:text-4xl font-bold text-white pr-8">
              Impressum
            </Dialog.Title>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-8 md:space-y-10 text-slate-300 text-base md:text-lg leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1">
                <p className="text-white font-medium">Novastream.AI</p>
                <p>Inhaber: Justin Weidler</p>
                <p>Maschstraße 27</p>
                <p>31171 Nordstemmen</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
              <div className="space-y-1">
                <p>
                  <span className="text-slate-400">Telefon:</span>{' '}
                  <a href="tel:+4917698151650" className="text-blue-400 hover:text-blue-300 transition-colors">
                    0176 9815150
                  </a>
                </p>
                <p>
                  <span className="text-slate-400">E-Mail:</span>{' '}
                  <a href="mailto:info@novastream-ai.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    info@novastream-ai.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Umsatzsteuer</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{' '}
                <span className="text-white font-medium">DE459405805</span>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">EU-Streitschlichtung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
              </p>
              <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p className="leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
