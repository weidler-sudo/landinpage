import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight, Bot, Palette, CheckCircle2, Star,
  TrendingUp, Clock, Shield, ChevronRight, Sparkles
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Counter } from '../components/Counter';

// Typing animation hook
function useTypingEffect(words: string[], typingSpeed = 80, pauseDuration = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= word.length) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex > word.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, typingSpeed / 2);
    } else {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, typingSpeed, pauseDuration]);

  return displayed;
}

const testimonials = [
  {
    name: 'Markus Bauer',
    title: 'CEO, TechVenture GmbH',
    text: 'Novastream.ai hat unseren Vertriebsprozess revolutioniert. Wir qualifizieren jetzt 3x mehr Leads bei 60% weniger Aufwand für unser Team.',
    stars: 5,
  },
  {
    name: 'Sarah Koch',
    title: 'Head of Sales, DigitalFlow AG',
    text: 'Der KI-Agent läuft 24/7 und verpasst keinen einzigen Lead mehr. Die CRM-Integration war nahtlos. Absolute Empfehlung!',
    stars: 5,
  },
  {
    name: 'Thomas Richter',
    title: 'Geschäftsführer, Richter Consulting',
    text: 'Das neue Website-Design hat unsere Conversion-Rate um 45% erhöht. Professionell, schnell und mit echtem Verständnis für unser Business.',
    stars: 5,
  },
];

export function Home({ onOpenContact }: { onOpenContact: () => void }) {
  const typingText = useTypingEffect([
    'Vertrieb automatisieren',
    'Leads qualifizieren',
    'Kunden begeistern',
    'Prozesse skalieren',
  ]);

  return (
    <div className="page-wrapper">
      {/* ── HERO ── */}
      <section
        aria-label="Hero – KI-Agenten & Webdesign für B2B"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--gradient-hero)',
        }}
      >
        {/* Radial glow decorations */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: 900, height: 500,
          background: 'radial-gradient(ellipse, rgba(0,102,255,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', right: '-10%',
          width: 500, height: 500,
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <span className="badge" style={{ animation: 'fadeInUp 0.6s ease forwards' }}>
              <Sparkles size={12} />
              KI-Agentur der nächsten Generation
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            marginBottom: '1.5rem',
            animation: 'fadeInUp 0.7s ease 0.1s both',
          }}>
            Mit KI{' '}
            <span className="gradient-text" style={{ display: 'inline-block', minWidth: 380 }}>
              {typingText}
              <span style={{ animation: 'blink 1s infinite', marginLeft: 2 }}>|</span>
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 680,
            margin: '0 auto 2.5rem',
            animation: 'fadeInUp 0.7s ease 0.2s both',
          }}>
            Novastream.ai entwickelt maßgeschneiderte <strong style={{ color: '#fff' }}>KI-Agenten</strong> und{' '}
            <strong style={{ color: '#fff' }}>Premium-Webdesign</strong> für B2B-Unternehmen, die wirklich wachsen wollen.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
            animation: 'fadeInUp 0.7s ease 0.3s both',
          }}>
            <button onClick={onOpenContact} className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              Kostenloses Erstgespräch
              <ArrowRight size={18} />
            </button>
            <Link to="/ki-agenten" className="btn-outline" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              KI-Agenten entdecken
            </Link>
          </div>

          {/* Trust pills */}
          <div style={{
            display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap',
            marginTop: '2rem',
            animation: 'fadeInUp 0.7s ease 0.4s both',
          }}>
            {['14 Tage kostenlos testen', '100% Geld-zurück', 'Keine Bindung'].map(text => (
              <span key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={14} color="#22d3ee" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section aria-label="Kennzahlen" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '3.5rem 0',
        background: 'rgba(255,255,255,0.02)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}>
            {[
              { value: 50, suffix: '+', label: 'Kunden betreut' },
              { value: 10000, suffix: '+', label: 'Leads automatisiert' },
              { value: 80, suffix: '%', label: 'Zeitersparnis Ø' },
              { value: 24, suffix: '/7', label: 'Agent-Verfügbarkeit' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO CORE SERVICES ── */}
      <section aria-label="Unsere Kernleistungen" style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge section-label">Was wir machen</span>
            <h2 className="section-title">Zwei Kernleistungen. <span className="gradient-text">Ein Ziel: Ihr Wachstum.</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Wir kombinieren KI-Automatisierung mit erstklassigem Webdesign – für Unternehmen, die mehr wollen.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* KI-Agenten Card */}
            <ScrollReveal delay={1}>
              <Link to="/ki-agenten" style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{
                  padding: '2.5rem',
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  {/* Gradient orb */}
                  <div style={{
                    position: 'absolute', top: -60, right: -60,
                    width: 200, height: 200,
                    background: 'radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />

                  <div style={{
                    width: 60, height: 60,
                    background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                    borderRadius: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 0 30px rgba(0,102,255,0.4)',
                  }}>
                    <Bot size={28} color="#fff" />
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>KI-Agenten</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                    Maßgeschneiderte KI-Agenten für Vertrieb & Support. Qualifizieren Sie Leads 24/7, beantworten Sie Anfragen automatisch und integrieren Sie sich nahtlos in Ihr CRM.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['24/7 Lead-Qualifizierung', 'CRM-Integration (HubSpot, Salesforce)', 'Vollautomatische Follow-Ups'].map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                        <CheckCircle2 size={14} color="#22d3ee" /> {f}
                      </li>
                    ))}
                  </ul>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    color: '#60A5FA', fontWeight: 600, fontSize: '0.9rem',
                  }}>
                    Mehr erfahren <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Webdesign Card */}
            <ScrollReveal delay={2}>
              <Link to="/webdesign" style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{
                  padding: '2.5rem',
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    position: 'absolute', top: -60, right: -60,
                    width: 200, height: 200,
                    background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />

                  <div style={{
                    width: 60, height: 60,
                    background: 'linear-gradient(135deg, #7C3AED, #0066FF)',
                    borderRadius: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 0 30px rgba(124,58,237,0.4)',
                  }}>
                    <Palette size={28} color="#fff" />
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>Webdesign</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                    Hochkonvertierende Websites & Landing Pages, die nicht nur schön aussehen – sondern aktiv Kunden gewinnen. Modern, schnell und auf Ihr Business zugeschnitten.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['Premium UI/UX Design', 'SEO-optimiert & blitzschnell', 'Conversion-fokussierte Struktur'].map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                        <CheckCircle2 size={14} color="#a78bfa" /> {f}
                      </li>
                    ))}
                  </ul>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    color: '#a78bfa', fontWeight: 600, fontSize: '0.9rem',
                  }}>
                    Mehr erfahren <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section aria-label="Unsere Vorteile" style={{
        padding: 'var(--section-py) 0',
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge section-label">Warum Novastream.ai?</span>
            <h2 className="section-title">Was uns <span className="gradient-text">von anderen unterscheidet</span></h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <TrendingUp size={24} color="#60A5FA" />, title: 'Messbare Ergebnisse', desc: 'Wir liefern keine Versprechen, sondern Zahlen. Klare KPIs, transparentes Reporting, echte Resultate.' },
              { icon: <Clock size={24} color="#a78bfa" />, title: 'Schnelle Umsetzung', desc: 'Von der Idee zum fertigen KI-Agenten in unter 2 Wochen. Kein endloses Hin und Her.' },
              { icon: <Shield size={24} color="#34d399" />, title: 'DSGVO-konform', desc: 'Alle Lösungen sind vollständig DSGVO-konform. Ihre Daten bleiben in Deutschland.' },
              { icon: <Bot size={24} color="#fb923c" />, title: 'Individuell entwickelt', desc: 'Keine Off-the-shelf Lösungen. Jeder Agent wird speziell für Ihr Business entwickelt und trainiert.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={(i % 4) as 0|1|2|3|4}>
                <div className="glass-card" style={{ padding: '1.75rem' }}>
                  <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section aria-label="Kundenstimmen" style={{ padding: 'var(--section-py) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge section-label">Kundenstimmen</span>
            <h2 className="section-title">Was unsere <span className="gradient-text">Kunden sagen</span></h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 4) as 0|1|2|3|4}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} color="#FBBF24" fill="#FBBF24" />
                    ))}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    "{t.text}"
                  </p>
                  <div>
                    <p style={{ fontWeight: 600, margin: 0 }}>{t.name}</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>{t.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section aria-label="Jetzt starten" style={{
        padding: 'var(--section-py) 0',
        position: 'relative', zIndex: 1,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(124,58,237,0.15) 100%)',
          borderTop: '1px solid rgba(0,102,255,0.2)',
          borderBottom: '1px solid rgba(124,58,237,0.2)',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ marginBottom: '1.25rem' }}>
              Bereit, Ihr Business auf das{' '}
              <span className="gradient-text">nächste Level</span> zu heben?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto 2.5rem' }}>
              Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und erfahren Sie in 30 Minuten, welches Potenzial in Ihrem Business steckt.
            </p>
            <button onClick={onOpenContact} className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
              Jetzt Potenzialanalyse sichern
              <ArrowRight size={18} />
            </button>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginTop: '1rem' }}>
              ✓ Unverbindlich &nbsp; ✓ Kostenlos &nbsp; ✓ In 30 Minuten mehr Klarheit
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
