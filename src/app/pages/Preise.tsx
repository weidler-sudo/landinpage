import { ArrowRight, CheckCircle2, X, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Für den Einstieg',
    price: 'Auf Anfrage',
    color: '#6b7280',
    borderColor: 'rgba(255,255,255,0.1)',
    features: [
      { text: '1 KI-Agent (Basis)', included: true },
      { text: 'Standard CRM-Integration', included: true },
      { text: 'E-Mail-Benachrichtigungen', included: true },
      { text: 'Onboarding & Setup', included: true },
      { text: 'E-Mail-Support', included: true },
      { text: 'Mehrere Agenten', included: false },
      { text: 'WhatsApp-Integration', included: false },
      { text: 'Dedizierter Account Manager', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Für wachsende Teams',
    price: 'Auf Anfrage',
    color: '#0066FF',
    borderColor: 'rgba(0,102,255,0.4)',
    highlight: true,
    badge: 'Beliebteste Wahl',
    features: [
      { text: 'Bis zu 3 KI-Agenten', included: true },
      { text: 'Alle CRM-Integrationen', included: true },
      { text: 'E-Mail & WhatsApp', included: true },
      { text: 'Onboarding & Setup', included: true },
      { text: 'Priority-Support (24h)', included: true },
      { text: 'Individuelles Training', included: true },
      { text: 'Performance-Reporting', included: true },
      { text: 'Dedizierter Account Manager', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Für große Unternehmen',
    price: 'Auf Anfrage',
    color: '#7C3AED',
    borderColor: 'rgba(124,58,237,0.4)',
    features: [
      { text: 'Unbegrenzte KI-Agenten', included: true },
      { text: 'Alle Integrationen & APIs', included: true },
      { text: 'Alle Kommunikationskanäle', included: true },
      { text: 'White-Label-Option', included: true },
      { text: 'Dedizierter Account Manager', included: true },
      { text: 'SLA-Garantie', included: true },
      { text: 'Individuelle Entwicklung', included: true },
      { text: 'On-Premise-Option', included: true },
    ],
  },
];

const comparisonRows = [
  { feature: 'Anzahl Agenten', starter: '1', pro: 'Bis zu 3', enterprise: 'Unbegrenzt' },
  { feature: 'CRM-Integration', starter: 'Standard', pro: 'Alle', enterprise: 'Alle + Custom' },
  { feature: 'Kommunikationskanäle', starter: 'E-Mail', pro: 'E-Mail, WhatsApp', enterprise: 'Alle' },
  { feature: 'Support', starter: 'E-Mail', pro: 'Priority (24h)', enterprise: 'Dediziert + SLA' },
  { feature: 'Reporting', starter: 'Basis', pro: 'Erweitert', enterprise: 'Voll-Custom' },
  { feature: 'White-Label', starter: '—', pro: '—', enterprise: '✓' },
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
            Transparente Preise.{' '}
            <span className="gradient-text">Maximaler Mehrwert.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>
            Jedes Unternehmen ist einzigartig. Deshalb erstellen wir für Sie ein maßgeschneidertes Angebot – ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}>
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={(i % 4) as 0|1|2|3|4}>
                <div
                  className="glass-card"
                  style={{
                    padding: '2.5rem',
                    border: `1px solid ${pkg.borderColor}`,
                    position: 'relative',
                    overflow: 'hidden',
                    ...(pkg.highlight ? {
                      background: 'rgba(0,102,255,0.07)',
                      boxShadow: '0 0 60px rgba(0,102,255,0.2)',
                    } : {}),
                  }}
                >
                  {/* Glow */}
                  <div style={{
                    position: 'absolute', top: -80, right: -80,
                    width: 200, height: 200,
                    background: `radial-gradient(circle, ${pkg.color}25 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  {pkg.badge && (
                    <div style={{
                      position: 'absolute', top: 16, right: 16,
                      background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                      color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                      padding: '0.25rem 0.75rem', borderRadius: 999,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                    }}>
                      {pkg.badge}
                    </div>
                  )}

                  <p style={{ color: pkg.color, fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{pkg.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{pkg.subtitle}</p>

                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '2rem', fontWeight: 700,
                      color: pkg.highlight ? '#fff' : 'rgba(255,255,255,0.85)',
                    }}>
                      {pkg.price}
                    </span>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                      Individuelles Angebot nach Beratung
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                    {pkg.features.map(f => (
                      <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        {f.included
                          ? <CheckCircle2 size={15} color={pkg.color} style={{ flexShrink: 0 }} />
                          : <X size={15} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0 }} />
                        }
                        <span style={{ color: f.included ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)' }}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenContact}
                    className={pkg.highlight ? 'btn-primary' : 'btn-outline'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Angebot anfragen <ArrowRight size={15} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{
        padding: 'var(--section-py) 0',
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Vergleich im <span className="gradient-text">Überblick</span></h2>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <th style={thStyle}>Funktion</th>
                    <th style={{ ...thStyle, color: '#9ca3af' }}>Starter</th>
                    <th style={{ ...thStyle, color: '#60A5FA' }}>Professional</th>
                    <th style={{ ...thStyle, color: '#a78bfa' }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={tdStyle}>{row.feature}</td>
                      <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>{row.starter}</td>
                      <td style={{ ...tdStyle, color: '#60A5FA', textAlign: 'center' }}>{row.pro}</td>
                      <td style={{ ...tdStyle, color: '#a78bfa', textAlign: 'center' }}>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

const thStyle: React.CSSProperties = {
  padding: '1rem 1.25rem',
  textAlign: 'left',
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: 'rgba(255,255,255,0.4)',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
};

const tdStyle: React.CSSProperties = {
  padding: '0.875rem 1.25rem',
  fontSize: '0.875rem',
  color: 'rgba(255,255,255,0.7)',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
};
