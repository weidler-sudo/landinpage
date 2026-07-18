import { Link } from 'react-router';
import { Zap, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
  onOpenAGB: () => void;
}

export function Footer({ onOpenImpressum, onOpenDatenschutz, onOpenAGB }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(3, 6, 15, 0.95)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Glow line at top */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.5), rgba(0,212,255,0.5), transparent)',
      }} />

      <div className="container" style={{ padding: '4rem clamp(1.25rem, 5vw, 3rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: 32, height: 32,
                background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                borderRadius: 9,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Zap size={16} color="#fff" fill="#fff" />
              </div>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #fff, rgba(0,212,255,0.9))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Novastream.ai</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 260 }}>
              Maßgeschneiderte KI-Agenten & professionelles Webdesign für wachsende B2B-Unternehmen.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a
                href="https://www.linkedin.com/in/justin-weidler-1a3177408"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={socialIconStyle}
                onMouseEnter={e => Object.assign((e.target as HTMLElement).style, socialIconHover)}
                onMouseLeave={e => Object.assign((e.target as HTMLElement).style, socialIconStyle)}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/novastream.ai"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                style={socialIconStyle}
                onMouseEnter={e => Object.assign((e.target as HTMLElement).style, socialIconHover)}
                onMouseLeave={e => Object.assign((e.target as HTMLElement).style, socialIconStyle)}
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:kontakt@novastream.ai"
                aria-label="E-Mail"
                style={socialIconStyle}
                onMouseEnter={e => Object.assign((e.target as HTMLElement).style, socialIconHover)}
                onMouseLeave={e => Object.assign((e.target as HTMLElement).style, socialIconStyle)}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={footerHeadingStyle}>Navigation</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { to: '/', label: 'Startseite' },
                { to: '/ki-agenten', label: 'KI-Agenten' },
                { to: '/webdesign', label: 'Webdesign' },
                { to: '/preise', label: 'Preise' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} style={footerLinkStyle}
                    onMouseEnter={e => Object.assign((e.target as HTMLElement).style, footerLinkHover)}
                    onMouseLeave={e => Object.assign((e.target as HTMLElement).style, footerLinkStyle)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={footerHeadingStyle}>Leistungen</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                'KI-Vertriebs-Agenten',
                'KI-Support-Agenten',
                'Lead-Automatisierung',
                'Webdesign & UI/UX',
                'Landing Pages',
              ].map(item => (
                <li key={item} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={footerHeadingStyle}>Rechtliches</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Impressum', action: onOpenImpressum },
                { label: 'Datenschutz', action: onOpenDatenschutz },
                { label: 'AGB', action: onOpenAGB },
              ].map(item => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    style={{ ...footerLinkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', margin: 0 }}>
            © {year} Novastream.ai – Alle Rechte vorbehalten.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', margin: 0 }}>
            Made with ⚡ in Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerHeadingStyle: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '1rem',
};

const footerLinkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.55)',
  textDecoration: 'none',
  fontSize: '0.875rem',
  transition: 'color 200ms ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem',
};

const footerLinkHover: React.CSSProperties = {
  ...footerLinkStyle,
  color: '#fff',
};

const socialIconStyle: React.CSSProperties = {
  width: 36, height: 36,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.1)',
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  transition: 'border-color 200ms, color 200ms, background 200ms',
};

const socialIconHover: React.CSSProperties = {
  ...socialIconStyle,
  borderColor: 'rgba(0,102,255,0.5)',
  color: '#fff',
  background: 'rgba(0,102,255,0.1)',
};
