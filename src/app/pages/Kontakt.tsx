import { ArrowRight, Mail, Linkedin, Instagram, Clock, MessageSquare, Phone } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Kontakt({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="page-wrapper page-content">
      {/* ── HERO ── */}
      <section style={{
        padding: '6rem 0 4rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.15) 0%, transparent 60%), var(--color-bg)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1.5rem' }}>
            <MessageSquare size={12} /> Kontakt
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Lassen Sie uns <span className="gradient-text">sprechen</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>
            Starten Sie noch heute Ihre kostenlose Potenzialanalyse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* Left: Contact Info */}
            <ScrollReveal>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>So erreichen Sie uns</h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                  Wir sind Ihr Partner für KI-Agenten und Webdesign in Deutschland. Melden Sie sich einfach – per E-Mail, Social Media oder direkt über das Formular.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {[
                    {
                      icon: <Mail size={20} color="#60A5FA" />,
                      label: 'E-Mail',
                      value: 'kontakt@novastream.ai',
                      href: 'mailto:kontakt@novastream.ai',
                    },
                    {
                      icon: <Clock size={20} color="#34d399" />,
                      label: 'Reaktionszeit',
                      value: 'Innerhalb von 24 Stunden',
                    },
                    {
                      icon: <Phone size={20} color="#a78bfa" />,
                      label: 'Erstgespräch',
                      value: '30 Minuten, kostenlos & unverbindlich',
                    },
                  ].map(item => (
                    <div key={item.label} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>{item.value}</a>
                        ) : (
                          <p style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem', margin: 0 }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>Folgen Sie uns</p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a
                      href="https://www.linkedin.com/in/justin-weidler-1a3177408"
                      target="_blank" rel="noopener noreferrer"
                      className="glass-card"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.6rem 1rem', textDecoration: 'none', color: '#fff',
                        fontSize: '0.875rem', fontWeight: 500,
                      }}
                    >
                      <Linkedin size={16} color="#60A5FA" /> LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/novastream.ai"
                      target="_blank" rel="noopener noreferrer"
                      className="glass-card"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.6rem 1rem', textDecoration: 'none', color: '#fff',
                        fontSize: '0.875rem', fontWeight: 500,
                      }}
                    >
                      <Instagram size={16} color="#f472b6" /> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: CTA Card */}
            <ScrollReveal delay={2}>
              <div className="glass-card" style={{
                padding: '3rem 2.5rem',
                textAlign: 'center',
                background: 'rgba(0,102,255,0.06)',
                border: '1px solid rgba(0,102,255,0.2)',
              }}>
                <div style={{
                  width: 70, height: 70,
                  background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                  borderRadius: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 0 40px rgba(0,102,255,0.5)',
                  animation: 'pulseGlow 3s infinite',
                }}>
                  <MessageSquare size={32} color="#fff" />
                </div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                  Kostenloses Erstgespräch buchen
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  In nur 30 Minuten analysieren wir gemeinsam, welches Potenzial KI und professionelles Webdesign für Ihr Business hat – kostenlos und völlig unverbindlich.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    '✓ 30 Minuten Video-Call',
                    '✓ Individuelle Potenzialanalyse',
                    '✓ Konkrete Handlungsempfehlungen',
                    '✓ Kein Verkaufsgespräch – wir hören zu',
                  ].map(item => (
                    <div key={item} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{item}</div>
                  ))}
                </div>

                <button onClick={onOpenContact} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '1rem' }}>
                  Jetzt Termin sichern
                  <ArrowRight size={18} />
                </button>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                  Normalerweise innerhalb von 24h bestätigt
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ Mini ── */}
      <section style={{
        padding: 'var(--section-py) 0',
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Häufige <span className="gradient-text">Fragen</span></h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Für wen ist Novastream.ai geeignet?', a: 'Wir arbeiten mit B2B-Unternehmen jeder Größe – vom Startup bis zum etablierten Mittelstand. Ideal für Unternehmen, die ihren Vertrieb automatisieren oder ihre Online-Präsenz professionalisieren möchten.' },
              { q: 'Wie läuft das Erstgespräch ab?', a: 'Das 30-Minuten-Gespräch findet per Video-Call statt. Wir lernen Ihr Business kennen, identifizieren Potenziale und zeigen Ihnen konkrete Möglichkeiten – ohne Verkaufsdruck.' },
              { q: 'Gibt es eine Mindestlaufzeit?', a: 'Nein. Wir bieten sowohl Einmalprojekte als auch langfristige Partnerschaften an. Sie entscheiden, welches Modell am besten zu Ihnen passt.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={(i % 4) as 0|1|2|3|4}>
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
