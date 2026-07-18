import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { to: '/',            label: 'Start' },
  { to: '/ki-agenten',  label: 'KI-Agenten' },
  { to: '/webdesign',   label: 'Webdesign' },
  { to: '/preise',      label: 'Preise' },
  { to: '/kontakt',     label: 'Kontakt' },
];

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease',
    background: scrolled
      ? 'rgba(5, 10, 24, 0.9)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
  };

  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    textDecoration: 'none',
    color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
    fontWeight: isActive ? 600 : 400,
    fontSize: '0.9375rem',
    position: 'relative',
    padding: '4px 0',
    transition: 'color 200ms ease',
  });

  return (
    <>
      <nav style={navStyle} aria-label="Hauptnavigation">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0,102,255,0.5)',
            }}>
              <Zap size={18} color="#fff" fill="#fff" />
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.2rem',
              background: 'linear-gradient(135deg, #fff 0%, rgba(0,212,255,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Novastream.ai
            </span>
          </NavLink>

          {/* Desktop Links */}
          <ul style={{
            display: 'flex', gap: '2rem', listStyle: 'none',
            margin: 0, padding: 0,
            alignItems: 'center',
          }} className="desktop-nav">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => linkStyle(isActive)}
                  className="nav-link-item"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}
              aria-label="Kostenloses Erstgespräch buchen"
            >
              Erstgespräch buchen
            </button>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              aria-label="Menü öffnen"
              style={{
                display: 'none',
                background: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8,
                color: '#fff',
                cursor: 'pointer',
                padding: '6px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        aria-label="Mobile Navigation"
        style={{
          position: 'fixed',
          top: 72,
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(5, 10, 24, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-120%)',
          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          padding: mobileOpen ? '1.5rem 1.25rem' : '0',
          pointerEvents: mobileOpen ? 'all' : 'none',
        }}
        className="mobile-nav"
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '0.875rem 1rem',
                  borderRadius: 10,
                  textDecoration: 'none',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.65)',
                  background: isActive ? 'rgba(0,102,255,0.12)' : 'transparent',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '1.05rem',
                  transition: 'background 200ms, color 200ms',
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li style={{ marginTop: '0.75rem' }}>
            <button
              onClick={() => { onOpenContact(); setMobileOpen(false); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Kostenloses Erstgespräch buchen
            </button>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #0066FF, #00D4FF);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 200ms ease;
        }
        .nav-link-item:hover::after,
        .nav-link-item.active::after { transform: scaleX(1); }
        .nav-link-item:hover { color: #fff !important; }
      `}</style>
    </>
  );
}
