import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface DatenschutzModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DatenschutzModal({ open, onOpenChange }: DatenschutzModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="sticky top-0 p-10 border-b border-slate-800 bg-slate-900 rounded-t-2xl z-10">
            <Dialog.Close className="absolute top-8 right-8 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </Dialog.Close>

            <Dialog.Title className="text-4xl font-bold text-white">
              Datenschutzerklärung
            </Dialog.Title>
          </div>

          {/* Content */}
          <div className="p-10 space-y-10 text-slate-300 text-lg leading-relaxed">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-lg font-semibold text-white mb-3">Allgemeine Hinweise</h3>
              <p className="leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Datenerfassung auf dieser Website</h3>
              <p className="font-semibold text-white mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p className="leading-relaxed mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="font-semibold text-white mb-2">Wie erfassen wir Ihre Daten?</p>
              <p className="leading-relaxed mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder in unserem KI-Chatbot hinterlassen.
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <p className="font-semibold text-white mb-2">Wofür nutzen wir Ihre Daten?</p>
              <p className="leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden oder um Ihre Kontaktanfragen (z. B. über das Formular oder die Terminbuchung) zu bearbeiten.
              </p>
            </section>

            {/* 2. Allgemeine Hinweise */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-lg font-semibold text-white mb-3">Datenschutz</h3>
              <p className="leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="leading-relaxed mb-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-slate-800 p-4 rounded-lg space-y-1 mb-4">
                <p className="text-white font-medium">Novastream.AI</p>
                <p>Inhaber: Justin Weidler</p>
                <p>Maschstraße 27</p>
                <p>31171 Nordstemmen</p>
                <p className="pt-2">Telefon: <a href="tel:+4917698151650" className="text-blue-400 hover:text-blue-300">0176 9815150</a></p>
                <p>E-Mail: <a href="mailto:info@novastream-ai.com" className="text-blue-400 hover:text-blue-300">info@novastream-ai.com</a></p>
              </div>
              <p className="leading-relaxed text-sm text-slate-400">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </section>

            {/* 3. Hosting */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Hosting</h2>

              <h3 className="text-lg font-semibold text-white mb-3">Vercel</h3>
              <p className="leading-relaxed">
                Wir hosten unsere Website bei Vercel. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
                Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit Vercel geschlossen.
              </p>
            </section>

            {/* 4. Datenerfassung */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-lg font-semibold text-white mb-3">Kontaktformular</h3>
              <p className="leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">KI-Chatbot (OpenAI)</h3>
              <p className="leading-relaxed mb-4">
                Wir setzen auf unserer Website einen KI-basierten Chatbot ein, um Ihre Anfragen schnell und automatisiert beantworten zu können. Zur Verarbeitung der von Ihnen im Chat eingegebenen Texte nutzen wir die Technologie der OpenAI Ireland Ltd, 1st Floor, The Liffey Trust Centre, 117-126 Sheriff Street Upper, Dublin 1, Irland („OpenAI").
                Bitte geben Sie im Chatbot keine sensiblen persönlichen Daten ein. Die von Ihnen eingegebenen Texte werden an Server von OpenAI (ggf. auch in den USA) übertragen und dort verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem effizienten Kundenservice).
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Datenverarbeitung im CRM-System</h3>
              <p className="leading-relaxed">
                Die Daten, die Sie uns über das Kontaktformular, den Chatbot oder bei der Terminbuchung übermitteln, werden in unserem Customer-Relationship-Management-System (CRM) gespeichert und verarbeitet, um eine reibungslose Kundenkommunikation zu gewährleisten.
              </p>
            </section>

            {/* 5. Analyse-Tools */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Analyse-Tools</h2>

              <h3 className="text-lg font-semibold text-white mb-3">Google Analytics</h3>
              <p className="leading-relaxed">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                Google Analytics verwendet sogenannte „Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die Erfassung und Speicherung dieser Daten erfolgt ausschließlich nach Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) über unser Cookie-Banner. Sie können Ihre Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </section>

            {/* 6. Plugins und Tools */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Plugins und Tools</h2>

              <h3 className="text-lg font-semibold text-white mb-3">Calendly (Terminbuchung)</h3>
              <p className="leading-relaxed mb-4">
                Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu vereinbaren. Hierfür nutzen wir das Tool Calendly. Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA.
                Zur Terminbuchung geben Sie die abgefragten Daten und den Wunschtermin in die bereitgestellte Maske ein. Diese Daten werden für die Planung, Durchführung und ggf. für die Nachbereitung des Termins verwendet. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Stripe (Zahlungsabwicklung)</h3>
              <p className="leading-relaxed">
                Wir bieten die Zahlung unserer Dienstleistungen über Stripe an. Anbieter ist die Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland. Wenn Sie sich für diese Zahlungsart entscheiden, werden die von Ihnen eingegebenen Zahlungsdaten an Stripe übermittelt. Diese Einbindung erfolgt nicht direkt auf der Website, sondern durch Links, die aus unserem CRM-System generiert werden. Die Übermittlung Ihrer Daten an Stripe erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsabwicklung).
              </p>
            </section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
