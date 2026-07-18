import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface AGBModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AGBModal({ open, onOpenChange }: AGBModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] md:w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="sticky top-0 p-6 md:p-10 border-b border-slate-800 bg-slate-900 rounded-t-2xl z-10">
            <Dialog.Close className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </Dialog.Close>

            <Dialog.Title className="text-2xl md:text-4xl font-bold text-white pr-8">
              Allgemeine Geschäftsbedingungen (AGB)
            </Dialog.Title>
            <p className="text-slate-400 mt-2 text-base md:text-lg">Novastream.AI</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-8 md:space-y-10 text-slate-300 text-base md:text-lg leading-relaxed">
            {/* § 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">§ 1 Geltungsbereich</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Erstellung, Bereitstellung und Wartung von KI-basierten Softwarelösungen und Chatbots (nachfolgend „KI-Agenten") zwischen Novastream.AI, Inhaber: Justin Weidler, Maschstraße 27, 31171 Nordstemmen (nachfolgend „Auftragnehmer") und dem Kunden.
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Das Angebot des Auftragnehmers richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB (B2B), juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen.
                </p>
              </div>
            </section>

            {/* § 2 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">§ 2 Vertragsgegenstand und Leistungen</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Der Auftragnehmer entwickelt und integriert maßgeschneiderte KI-Agenten für den Vertrieb und Kundenservice des Kunden („Setup") und bietet im Anschluss die technische Aufrechterhaltung und Pflege des Systems an („monatliche Wartung").
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Die genauen Spezifikationen der Leistung ergeben sich aus dem jeweiligen Angebot.
                </p>
              </div>
            </section>

            {/* § 3 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">§ 3 Vergütung und Zahlungsbedingungen</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Die einmalige Setup-Gebühr wird vollständig im Voraus unmittelbar nach Vertragsschluss (z.B. über den zur Verfügung gestellten Stripe-Zahlungslink) und vor Beginn der Einrichtungsarbeiten fällig.
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Die monatliche Wartungsgebühr wird jeweils im Voraus für den jeweiligen Abrechnungsmonat in Rechnung gestellt oder per Abonnement eingezogen.
                </p>
              </div>
            </section>

            {/* § 4 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">§ 4 Mitwirkungspflichten des Kunden</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Der KI-Agent kann nur dann erfolgreich eingerichtet und trainiert werden, wenn der Kunde die dafür notwendigen unternehmensspezifischen Informationen (z. B. FAQs, Produktdaten, Zugänge zur Website oder zum CRM-System) rechtzeitig und vollständig zur Verfügung stellt.
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Der Kunde verpflichtet sich, aktiv an der Einrichtung mitzuwirken und die angeforderten Daten innerhalb von 7 Tagen nach Anforderung durch den Auftragnehmer zu übermitteln.
                </p>
              </div>
            </section>

            {/* § 5 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">§ 5 14-tägige Testphase und Geld-zurück-Garantie</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Der Auftragnehmer gewährt dem Kunden eine 14-tägige Testphase ab dem Tag, an dem der KI-Agent technisch fertiggestellt und in die Systeme des Kunden integriert wurde.
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Die Geld-zurück-Garantie bezieht sich ausschließlich auf die gezahlte Setup-Gebühr.
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(3)</span> Der Kunde ist nur dann berechtigt, die Setup-Gebühr zurückzufordern, wenn eine der folgenden Bedingungen erfüllt und vom Kunden nachweislich belegt ist:
                </p>
                <ul className="list-none space-y-2 ml-6">
                  <li className="leading-relaxed">a) Der KI-Agent ist technisch vollständig funktionsunfähig.</li>
                  <li className="leading-relaxed">b) Der KI-Agent hat innerhalb der 14-tägigen Testphase nicht einen einzigen Lead qualifiziert.</li>
                </ul>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(4)</span> <span className="text-white">Ausschluss der Garantie:</span> Die Geld-zurück-Garantie erlischt vollständig und ersatzlos, wenn der Kunde seiner Mitwirkungspflicht (siehe § 4) nicht nachkommt. Stellt der Kunde die für das Setup notwendigen Daten und Informationen nicht, unvollständig oder stark verzögert zur Verfügung, ist eine Inanspruchnahme der Garantie ausgeschlossen, da die mangelhafte Performance der KI in diesem Fall nicht durch den Auftragnehmer zu verantworten ist.
                </p>
              </div>
            </section>

            {/* § 6 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">§ 6 Vertragslaufzeit und Kündigung</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Der Vertrag über die monatliche Wartung und Bereitstellung des KI-Agenten wird mit einer Mindestlaufzeit von 3 (drei) Monaten geschlossen.
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Nach Ablauf der Mindestlaufzeit verlängert sich der Vertrag jeweils automatisch um einen weiteren Monat, sofern er nicht von einer der Parteien mit einer Frist von 14 Tagen zum Ende der jeweiligen Vertragslaufzeit gekündigt wird.
                </p>
              </div>
            </section>

            {/* § 7 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">§ 7 Haftung</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Der Auftragnehmer haftet für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht).
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Der Auftragnehmer übernimmt keine Haftung für Umsatzausfälle oder fehlerhafte Antworten der KI, die darauf beruhen, dass der Kunde fehlerhafte oder unvollständige Trainingsdaten bereitgestellt hat.
                </p>
              </div>
            </section>

            {/* § 8 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">§ 8 Schlussbestimmungen</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(1)</span> Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
                <p className="leading-relaxed">
                  <span className="text-white font-medium">(2)</span> Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz des Auftragnehmers (Nordstemmen), sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>
              </div>
            </section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
