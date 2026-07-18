import { useState } from 'react';
import { ArrowRight, Bot, MessageSquare, Calendar, Zap, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const agentTypes = [
  {
    id: 'vertrieb',
    label: 'Vertriebs-Agent',
    icon: <Zap size={20} />,
    color: '#0066FF',
    headline: 'Ihr 24/7 Vertriebsmitarbeiter',
    desc: 'Der Vertriebs-Agent qualifiziert eingehende Leads vollautomatisch. Er stellt die richtigen Fragen, erkennt echtes Kaufpotenzial und übergibt nur qualifizierte Prospects an Ihr Team – egal ob Tag oder Nacht.',
    features: [
      'Automatische Lead-Qualifizierung nach Ihren Kriterien',
      'Integration in HubSpot, Salesforce, Pipedrive & mehr',
      'Sofortige Follow-Up-Sequenzen per E-Mail & WhatsApp',
      'Echtzeit-Benachrichtigung bei Hot-Leads',
      'Detailliertes Lead-Scoring und Reporting',
    ],
    demo: [
      { from: 'user', text: 'Hallo, ich interessiere mich für Ihre Software.' },
      { from: 'bot', text: 'Guten Tag! Toll, dass Sie sich melden. Darf ich fragen, für welchen Bereich Sie eine Lösung suchen – Vertrieb, Marketing oder Operations?' },
      { from: 'user', text: 'Vertrieb, wir haben ein Team von 15 Leuten.' },
      { from: 'bot', text: 'Perfekt, bei 15 Vertriebsmitarbeitern sehen wir regelmäßig 40-60% Zeitersparnis durch Automatisierung. Wann hätten Sie Zeit für ein 20-minütiges Gespräch?' },
    ],
  },
  {
    id: 'support',
    label: 'Support-Agent',
    icon: <MessageSquare size={20} />,
    color: '#7C3AED',
    headline: 'Ihr intelligenter Support-Agent',
    desc: 'Der Support-Agent beantwortet Kundenanfragen sofort und rund um die Uhr. Er lernt aus Ihrer Wissensdatenbank, eskaliert komplexe Fälle automatisch und entlastet Ihr Support-Team um bis zu 70%.',
    features: [
      'Beantwortet 80%+ aller Anfragen vollautomatisch',
      'Trainiert auf Ihrer Wissensdatenbank & FAQs',
      'Automatische Eskalation bei komplexen Fällen',
      'Ticket-Erstellung in Zendesk, Freshdesk & mehr',
      'Mehrsprachig: DE, EN, FR und weitere',
    ],
    demo: [
      { from: 'user', text: 'Wie kann ich mein Passwort zurücksetzen?' },
      { from: 'bot', text: 'Das geht ganz einfach! Klicken Sie auf "Passwort vergessen" auf der Login-Seite, geben Sie Ihre E-Mail-Adresse ein und folgen Sie dem Link in Ihrer Mail.' },
      { from: 'user', text: 'Die E-Mail kommt nicht an.' },
      { from: 'bot', text: 'Kein Problem – ich eskaliere das sofort an unser Support-Team. Bitte geben Sie Ihre Kunden-ID an und wir lösen das innerhalb von 30 Minuten.' },
    ],
  },
  {
    id: 'buchung',
    label: 'Buchungs-Agent',
    icon: <Calendar size={20} />,
    color: '#059669',
    headline: 'Vollautomatische Terminbuchung',
    desc: 'Der Buchungs-Agent erledigt die komplette Terminkoordination ohne manuellen Aufwand. Er prüft Verfügbarkeiten, bucht Termine direkt in Ihrem Kalender und versendet automatische Erinnerungen.',
    features: [
      'Integration in Google Calendar, Outlook & Calendly',
      'Automatische Terminerinnerungen per Mail & SMS',
      'Qualifizierung vor der Buchung',
      'Stornierung und Umbuchung vollautomatisch',
      'Vorbereitung: Vorab-Fragebogen für Meetings',
    ],
    demo: [
      { from: 'user', text: 'Ich würde gerne einen Beratungstermin buchen.' },
      { from: 'bot', text: 'Sehr gerne! Vorab eine kurze Frage: Geht es um einen Neukunden-Termin oder sind Sie bereits Kunde bei uns?' },
      { from: 'user', text: 'Neukunde. Wir sind ein Mittelstandsunternehmen mit 80 Mitarbeitern.' },
      { from: 'bot', text: 'Perfekt! Ich habe diese Zeitfenster diese Woche frei: Di 14:00, Mi 10:00 oder Do 16:00. Was passt Ihnen?' },
    ],
  },
];

const faqs = [
  { q: 'Wie lange dauert die Implementierung eines KI-Agenten?', a: 'Je nach Komplexität und Integration dauert die Einrichtung 1–3 Wochen. Einfache Agenten sind oft schon in wenigen Tagen live. Wir begleiten Sie dabei von A bis Z.' },
  { q: 'Welche Systeme kann der Agent integrieren?', a: 'Wir integrieren in alle gängigen CRM-Systeme (HubSpot, Salesforce, Pipedrive), Kalendertools (Google, Outlook), Support-Systeme (Zendesk, Freshdesk) und viele weitere via API.' },
  { q: 'Ist der KI-Agent DSGVO-konform?', a: 'Ja, absolut. Alle Daten werden auf deutschen Servern gespeichert und verarbeitet. Wir stellen Ihnen auch einen Auftragsverarbeitungsvertrag (AVV) zur Verfügung.' },
  { q: 'Kann der Agent auf Ihre Branche trainiert werden?', a: 'Das ist unser Kernversprechen. Jeder Agent wird individuell auf Ihre Branche, Ihre Produkte und Ihre Unternehmenssprache trainiert.' },
  { q: 'Was kostet ein KI-Agent?', a: 'Die Kosten hängen vom Umfang und den gewünschten Integrationen ab. Vereinbaren Sie ein kostenloses Erstgespräch, um ein individuelles Angebot zu erhalten.' },
];

export function KiAgenten({ onOpenContact }: { onOpenContact: () => void }) {
  const [activeTab, setActiveTab] = useState('vertrieb');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeAgent = agentTypes.find(a => a.id === activeTab)!;

  return (
    <div className="page-wrapper page-content">
      {/* ── HERO ── */}
      <section style={{
        padding: '6rem 0 4rem',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.2) 0%, transparent 60%), var(--color-bg)',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1.5rem' }}>
            <Bot size={12} /> KI-Agenten
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Ihr KI-Agent arbeitet –<br />
            <span className="gradient-text">während Sie schlafen</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', maxWidth: 620, margin: '0 auto 2.5rem' }}>
            Maßgeschneiderte KI-Agenten für Vertrieb, Support und Buchung. Vollautomatisch, DSGVO-konform und direkt in Ihre bestehenden Systeme integriert.
          </p>
          <button onClick={onOpenContact} className="btn-primary" style={{ fontSize: '1.05rem' }}>
            Kostenlosen Agenten-Check starten
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── WHAT IS AN AGENT ── */}
      <section style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <ScrollReveal>
              <span className="badge section-label">Was ist ein KI-Agent?</span>
              <h2 className="section-title">Mehr als nur ein Chatbot</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Ein KI-Agent ist kein einfacher Regelbasierter Bot. Er versteht Kontext, führt echte Gespräche, trifft eigenständige Entscheidungen und verbindet sich nahtlos mit Ihren Geschäftssystemen.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                Durch den Einsatz modernster Large Language Models (LLMs) kann unser Agent auf natürliche Sprache reagieren, lernen und sich kontinuierlich verbessern.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div style={{
                background: 'rgba(0,102,255,0.06)',
                border: '1px solid rgba(0,102,255,0.2)',
                borderRadius: 20,
                padding: '2rem',
              }}>
                {[
                  { label: 'Einfacher Chatbot', items: ['Starre Entscheidungsbäume', 'Keine echte Sprachverarbeitung', 'Manuelle Konfiguration'], color: '#6b7280' },
                  { label: 'Novastream KI-Agent', items: ['Echtes Sprachverständnis (NLP)', 'Lernt und verbessert sich', 'CRM & Tool-Integration', 'Individuelle Persönlichkeit'], color: '#0066FF' },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontWeight: 700, color: item.color, marginBottom: '0.75rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                    {item.items.map(i => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <CheckCircle2 size={14} color={item.color} />
                        <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>{i}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── AGENT TYPES WITH TABS ── */}
      <section style={{
        padding: 'var(--section-py) 0',
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge section-label">Unsere Agenten</span>
            <h2 className="section-title">Wählen Sie Ihren <span className="gradient-text">KI-Agenten</span></h2>
          </ScrollReveal>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {agentTypes.map(agent => (
              <button
                key={agent.id}
                onClick={() => setActiveTab(agent.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.65rem 1.4rem',
                  borderRadius: 12,
                  border: `1px solid ${activeTab === agent.id ? agent.color : 'rgba(255,255,255,0.1)'}`,
                  background: activeTab === agent.id ? `${agent.color}20` : 'transparent',
                  color: activeTab === agent.id ? '#fff' : 'rgba(255,255,255,0.5)',
                  fontWeight: activeTab === agent.id ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  fontSize: '0.9rem',
                }}
              >
                <span style={{ color: agent.color }}>{agent.icon}</span>
                {agent.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}>
            {/* Info */}
            <ScrollReveal>
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>{activeAgent.headline}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{activeAgent.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {activeAgent.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)' }}>
                      <CheckCircle2 size={15} color={activeAgent.color} style={{ marginTop: 2, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={onOpenContact} className="btn-primary" style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}>
                  Diesen Agenten anfragen
                  <ArrowRight size={16} />
                </button>
              </div>
            </ScrollReveal>

            {/* Demo Chat */}
            <ScrollReveal delay={2}>
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: 10,
                  marginBottom: '1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 8px #22d3ee', animation: 'pulseGlow 2s infinite' }} />
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Live Demo – {activeAgent.label}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeAgent.demo.map((msg, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                    }}>
                      <div style={{
                        maxWidth: '80%',
                        padding: '0.65rem 1rem',
                        borderRadius: msg.from === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                        background: msg.from === 'user'
                          ? 'rgba(255,255,255,0.08)'
                          : `linear-gradient(135deg, ${activeAgent.color}22, ${activeAgent.color}11)`,
                        border: msg.from === 'bot' ? `1px solid ${activeAgent.color}30` : '1px solid rgba(255,255,255,0.06)',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: 1.6,
                      }}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.75rem', opacity: 0.4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', animation: 'nodePulse 1.2s 0s infinite' }} />
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', animation: 'nodePulse 1.2s 0.3s infinite' }} />
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', animation: 'nodePulse 1.2s 0.6s infinite' }} />
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginLeft: '0.25rem' }}>Agent tippt...</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Von der Idee zum <span className="gradient-text">fertigen Agenten</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>In drei Schritten zu Ihrem individuellen KI-Agenten</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Analyse', desc: 'Wir analysieren Ihre Prozesse, Ihr CRM und Ihre Anforderungen – kostenlos und unverbindlich.', color: '#0066FF' },
              { step: '02', title: 'Entwicklung', desc: 'Wir entwickeln und trainieren Ihren individuellen KI-Agenten auf Ihre Branche und Sprache.', color: '#7C3AED' },
              { step: '03', title: 'Launch & Optimierung', desc: 'Ihr Agent geht live. Wir optimieren kontinuierlich auf Basis echter Performance-Daten.', color: '#00D4FF' },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={(i % 4) as 0|1|2|3|4}>
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '3rem', fontWeight: 800,
                    background: `linear-gradient(135deg, ${s.color}, transparent)`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    marginBottom: '1rem', lineHeight: 1,
                  }}>{s.step}</div>
                  <h3 style={{ marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: 'var(--section-py) 0',
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Häufige <span className="gradient-text">Fragen</span></h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={(i % 4) as 0|1|2|3|4}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${openFaq === i ? 'rgba(0,102,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 14, padding: '1.25rem 1.5rem',
                    cursor: 'pointer', color: '#fff', fontFamily: 'inherit',
                    transition: 'border-color 200ms',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={18} color="#60A5FA" /> : <ChevronDown size={18} color="rgba(255,255,255,0.4)" />}
                  </div>
                  {openFaq === i && (
                    <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.9rem', fontWeight: 400 }}>
                      {faq.a}
                    </p>
                  )}
                </button>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={onOpenContact} className="btn-primary">
              Jetzt Erstgespräch buchen <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
