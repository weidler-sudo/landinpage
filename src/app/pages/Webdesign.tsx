import { ArrowRight, Palette, Monitor, Smartphone, TrendingUp, Layers, CheckCircle2, Code } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Counter } from '../components/Counter';

const services = [
  { icon: <Monitor size={24} color="#0066FF" />, title: 'Website Design', desc: 'Hochwertige B2B-Websites, die Vertrauen aufbauen und Leads generieren. Responsive, schnell und SEO-optimiert.' },
  { icon: <Smartphone size={24} color="#7C3AED" />, title: 'Landing Pages', desc: 'Hochkonvertierende Landing Pages für Kampagnen, Produkte oder Events. Jede Page ist auf Conversion optimiert.' },
  { icon: <Layers size={24} color="#00D4FF" />, title: 'UI/UX Design', desc: 'Intuitive Benutzeroberflächen, die Ihre Kunden begeistern. Von der Wireframe-Konzeption bis zum finalen Design.' },
  { icon: <Palette size={24} color="#f59e0b" />, title: 'Branding & Identity', desc: 'Konsistente visuelle Identität für Ihr Unternehmen. Logo, Farbsystem, Typografie und Brand Guidelines.' },
  { icon: <Code size={24} color="#34d399" />, title: 'Webentwicklung', desc: 'Technisch saubere Umsetzung mit modernen Frameworks. React, Next.js, Vite – performant und wartbar.' },
  { icon: <TrendingUp size={24} color="#f43f5e" />, title: 'Conversion-Optimierung', desc: 'A/B-Tests, Heatmaps und UX-Audits, um das Maximum aus Ihrer bestehenden Website herauszuholen.' },
];

const timelineSteps = [
  { step: '01', title: 'Discovery Call', desc: 'Wir lernen Ihr Business kennen, verstehen Ihre Zielgruppe und definieren gemeinsam die Ziele des Projekts.' },
  { step: '02', title: 'Konzept & Wireframes', desc: 'Strukturierung der Inhalte, Informationsarchitektur und erste Wireframes – das Fundament des Designs.' },
  { step: '03', title: 'Design & Prototyp', desc: 'Entwicklung des visuellen Designs in Figma. Sie sehen jeden Schritt und geben Feedback in Echtzeit.' },
  { step: '04', title: 'Entwicklung', desc: 'Saubere, performante Code-Umsetzung. Responsive für alle Endgeräte, optimiert für Suchmaschinen.' },
  { step: '05', title: 'Launch & Übergabe', desc: 'Live-Schaltung, finale Tests und vollständige Übergabe aller Dateien und Zugänge an Sie.' },
];

export function Webdesign({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="page-wrapper page-content">
      {/* ── HERO SPLIT ── */}
      <section style={{
        padding: '6rem 0 4rem',
        position: 'relative', zIndex: 1,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.15) 0%, transparent 60%), var(--color-bg)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Left: Text */}
            <div style={{ animation: 'fadeInUp 0.7s ease both' }}>
              <span className="badge" style={{ marginBottom: '1.5rem' }}>
                <Palette size={12} /> Webdesign
              </span>
              <h1 style={{ marginBottom: '1.25rem' }}>
                Design, das{' '}
                <span className="gradient-text-violet">konvertiert</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Wir gestalten Websites, die nicht nur visuell überzeugen – sondern aktiv Ihre Geschäftsziele erreichen. Premium-Design, das Ihre Marke auf das nächste Level hebt.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {['Fertig in 2–4 Wochen', 'Keine laufenden Lizenzkosten', 'Volle Kontrolle über Ihre Website', '1 Jahr kostenloser Support'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={15} color="#a78bfa" /> {f}
                  </div>
                ))}
              </div>
              <button onClick={onOpenContact} className="btn-primary">
                Design-Gespräch buchen <ArrowRight size={16} />
              </button>
            </div>

            {/* Right: Animated Mockup */}
            <div style={{ animation: 'fadeInUp 0.7s ease 0.2s both' }}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
              }}>
                {/* Browser chrome */}
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '0.75rem 1rem',
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
                  ))}
                  <div style={{
                    flex: 1, height: 20, background: 'rgba(255,255,255,0.06)',
                    borderRadius: 6, marginLeft: '0.5rem',
                    display: 'flex', alignItems: 'center', paddingLeft: '0.5rem',
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>novastream.ai</span>
                  </div>
                </div>
                {/* Mock content */}
                <div style={{ padding: '1.5rem', background: 'linear-gradient(180deg, #0a0f2a, #050A18)' }}>
                  <div style={{ height: 12, background: 'rgba(0,102,255,0.4)', borderRadius: 6, width: '60%', marginBottom: '0.75rem', animation: 'shimmer 2s infinite' }} />
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, width: '90%', marginBottom: '0.4rem' }} />
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 4, width: '75%', marginBottom: '1.5rem' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                    {[0.15, 0.1, 0.12].map((op, i) => (
                      <div key={i} style={{ height: 70, background: `rgba(0,102,255,${op})`, borderRadius: 8, border: '1px solid rgba(0,102,255,0.2)' }} />
                    ))}
                  </div>
                  <div style={{ height: 36, background: 'linear-gradient(135deg, #0066FF, #00D4FF)', borderRadius: 8, width: '50%', opacity: 0.9 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        padding: '3rem 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.02)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: 94, suffix: '%', label: 'Kunden-Zufriedenheit' },
              { value: 45, suffix: '%', label: 'Ø Conversion-Steigerung' },
              { value: 14, suffix: ' Tage', label: 'Ø Lieferzeit' },
              { value: 30, suffix: '+', label: 'Projekte geliefert' },
            ].map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700,
                  background: 'linear-gradient(135deg, #7C3AED, #0066FF)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge section-label">Unsere Leistungen</span>
            <h2 className="section-title">Alles aus einer <span className="gradient-text-violet">Hand</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Von der ersten Idee bis zum Live-Launch – wir begleiten Sie durch jeden Schritt.</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={(i % 4) as 0|1|2|3|4}>
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{
        padding: 'var(--section-py) 0',
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge section-label">Unser Prozess</span>
            <h2 className="section-title">So arbeiten <span className="gradient-text-violet">wir zusammen</span></h2>
          </ScrollReveal>
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 28, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(180deg, #7C3AED, #0066FF, transparent)',
              borderRadius: 2,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '4rem' }}>
              {timelineSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={(i % 4) as 0|1|2|3|4}>
                  <div style={{ position: 'relative' }}>
                    {/* Dot */}
                    <div style={{
                      position: 'absolute', left: -44, top: 4,
                      width: 32, height: 32,
                      background: 'linear-gradient(135deg, #7C3AED, #0066FF)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.65rem', fontWeight: 700, color: '#fff',
                      boxShadow: '0 0 20px rgba(124,58,237,0.5)',
                    }}>
                      {step.step}
                    </div>
                    <div className="glass-card" style={{ padding: '1.5rem 1.75rem' }}>
                      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ marginBottom: '1.25rem' }}>Ihr nächstes Webprojekt <span className="gradient-text-violet">wartet</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto 2rem' }}>
              Lassen Sie uns in einem kostenlosen Gespräch herausfinden, wie wir Ihre Website auf das nächste Level bringen.
            </p>
            <button onClick={onOpenContact} className="btn-primary">
              Jetzt Design-Gespräch buchen <ArrowRight size={16} />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
