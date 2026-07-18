import { ArrowRight, CheckCircle2, MessageSquare, Bot, Palette } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const agentPackages = [
  {
    id: 'lead-agent',
    name: 'Lead-Vorqualifizierung',
    subtitle: 'Für den Vertrieb',
    price: 'Auf Anfrage',
    color: '#0066FF',
    borderColor: 'rgba(0,102,255,0.4)',
    features: [
      { text: 'Vollautomatische Lead-Erfassung', included: true },
      { text: 'Qualifizierung nach Ihren Kriterien', included: true },
      { text: 'Nahtlose CRM-Integration', included: true },
      { text: 'E-Mail & WhatsApp Benachrichtigungen', included: true },
      { text: 'Individuelles Training auf Ihr Business', included: true },
    ],
  },
  {
    id: 'support-agent',
    name: 'Kundensupport',
    subtitle: 'Für den Service',
    price: 'Auf Anfrage',
    color: '#7C3AED',
    borderColor: 'rgba(124,58,237,0.4)',
    features: [
      { text: '24/7 Beantwortung von Kundenanfragen', included: true },
      { text: 'Training mit Ihrer Wissensdatenbank', included: true },
      { text: 'Automatische Ticket-Erstellung', included: true },
      { text: 'Eskalation an menschliche Mitarbeiter', included: true },
      { text: 'Mehrsprachiger Support möglich', included: true },
    ],
  },
];

export function Preise({ onOpenContact }: { onOpenContact: () => void }) {
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
          <span className="badge" style={{ marginBottom: '1.5rem' }}>Preismodelle</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Individuelle Lösungen.{' '}
            <span className="gradient-text">Maßgeschneiderte Preise.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 680, margin: '0 auto' }}>
            Jedes Unternehmen ist einzigartig. Wir bieten keine starren Pakete, sondern berechnen unsere Preise transparent anhand Ihrer spezifischen Anforderungen.
          </p>
        </div>
      </section>

      {/* ── KI AGENTEN ── */}
      <section style={{ padding: '3rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Bot size={32} color="#0066FF" />
             </div>
            <h2 className="section-title">KI-Agenten</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Zwei fokussierte Lösungen für maximalen ROI.</p>
          </ScrollReveal>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
            maxWidth: 900,
            margin: '0 auto'
          }}>
            {agentPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={(i % 2) as 0|1}>
                <div
                  className="glass-card"
                  style={{
                    padding: '2.5rem',
                    border: `1px solid ${pkg.borderColor}`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: -80, right: -80,
                    width: 200, height: 200,
                    background: `radial-gradient(circle, ${pkg.color}20 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  <p style={{ color: pkg.color, fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{pkg.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{pkg.subtitle}</p>

                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '2rem', fontWeight: 700,
                      color: '#fff',
                    }}>
                      {pkg.price}
                    </span>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                      Nach kostenlosem Beratungsgespräch
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                    {pkg.features.map(f => (
                      <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <CheckCircle2 size={15} color={pkg.color} style={{ flexShrink: 0 }} />
                        <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="btn-outline"
                    style={{ width: '100%', justifyContent: 'center', borderColor: pkg.borderColor }}
                  >
                    Angebot anfragen <ArrowRight size={15} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEBDESIGN (Kerngeschäft) ── */}
      <section style={{
        padding: '5rem 0',
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Palette size={32} color="#00D4FF" />
             </div>
            <h2 className="section-title">Webdesign (Kerngeschäft)</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>100% Individuell. 100% SEO-Optimiert.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card" style={{ 
              maxWidth: 800, 
              margin: '0 auto', 
              padding: '3rem',
              textAlign: 'center',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              background: 'rgba(0, 212, 255, 0.03)',
              boxShadow: '0 0 50px rgba(0, 212, 255, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Keine Pakete. Keine Kompromisse.</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem' }}>
                Beim Webdesign richten wir uns komplett nach dem, was Sie wirklich brauchen. 
                Egal ob eine messerscharfe Single-Page Landingpage oder ein umfangreicher Multi-Page Auftritt.
                Der Preis berechnet sich fair nach dem tatsächlichen Aufwand.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem', textAlign: 'left' }}>
                 {[
                   'Single-Page Landingpages', 
                   'Multi-Page Corporate Websites',
                   'Vollständige SEO-Optimierung inklusive',
                   'Premium UI/UX Gestaltung',
                   'Performance & Pagespeed',
                   'Individuelle Funktionen'
                 ].map(feature => (
                   <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                     <CheckCircle2 size={16} color="#00D4FF" />
                     <span style={{ color: 'rgba(255,255,255,0.8)' }}>{feature}</span>
                   </div>
                 ))}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '2rem', fontWeight: 700,
                  color: '#fff',
                }}>
                  Preis auf Anfrage
                </span>
              </div>

              <button onClick={onOpenContact} className="btn-primary" style={{ fontSize: '1.05rem' }}>
                Projekt besprechen <ArrowRight size={16} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'var(--section-py) 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 60, height: 60, borderRadius: 16,
              background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
              marginBottom: '1.5rem',
              boxShadow: '0 0 30px rgba(0,102,255,0.4)',
            }}>
              <MessageSquare size={28} color="#fff" />
            </div>
            <h2 style={{ marginBottom: '1.25rem' }}>
              Noch Fragen zu den <span className="gradient-text">Preisen?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto 2rem' }}>
              In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre Anforderungen und erstellen ein maßgeschneidertes Angebot.
            </p>
            <button onClick={onOpenContact} className="btn-primary" style={{ fontSize: '1.05rem' }}>
              Kostenloses Beratungsgespräch <ArrowRight size={16} />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

