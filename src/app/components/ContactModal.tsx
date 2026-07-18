import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Send, User, Mail, Building2, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Nutze Env-Variablen (Fallback auf harte Werte, falls .env in Vercel noch nicht gesetzt ist)
      const apiUrl = import.meta.env.VITE_CRM_API_URL || 'https://novastream-ai-crm.vercel.app';
      const apiKey = import.meta.env.VITE_CRM_API_KEY || 'novastream_secret_lead_key_2026';

      const response = await fetch(`${apiUrl}/api/leads/webhook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          kundeName: formData.name,
          kundeEmail: formData.email,
          kundeTelefon: formData.phone || undefined,
          kundeFirma: formData.company,
          botTyp: "Website Kontaktformular",
          plattform: "Novastream Landingpage",
          dealWert: 0,
          notes: formData.message || "Lead Anfrage über Kontaktformular"
        })
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Daten.');
      }

      toast.success('Erfolgreich gesendet!', {
        description: 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.'
      });
      onOpenChange(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submit Error:', error);
      toast.error('Senden fehlgeschlagen', {
        description: 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später noch einmal.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="relative p-10 border-b border-slate-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

            <Dialog.Close className="absolute top-8 right-8 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </Dialog.Close>

            <Dialog.Title className="text-4xl font-bold text-white mb-4">
              Kostenloses Erstgespräch
            </Dialog.Title>
            <Dialog.Description className="text-slate-400 text-lg">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </Dialog.Description>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Ihr Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Max Mustermann"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                E-Mail-Adresse *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="max@firma.de"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                Unternehmen *
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Firma GmbH"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                Telefonnummer (optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+49 123 456789"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Ihre Nachricht (optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Erzählen Sie uns kurz von Ihren Anforderungen..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group
                ${isSubmitting 
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed shadow-none' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-blue-500/30 hover:shadow-blue-500/50'
                }`}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Jetzt Termin anfragen'}
              {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>

            <p className="text-xs text-slate-500 text-center">
              Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
            </p>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
