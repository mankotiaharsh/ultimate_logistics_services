import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { CONTACT, IMG, SERVICE_LINKS, ROUTE_LINKS } from '../data/site';

function Dropdown({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const active = items.some((i) => i.to === pathname);
  return (
    <li className={`nav-item has-dropdown ${open ? 'open' : ''}`} onMouseLeave={() => setOpen(false)}>
      <button className={`nav-link ${active ? 'active' : ''}`} onClick={() => setOpen((o) => !o)} onMouseEnter={() => setOpen(true)}>
        {label} <FaChevronDown className="caret" />
      </button>
      <ul className="dropdown-menu">
        {items.map((i) => (
          <li key={i.to}>
            <NavLink to={i.to} onClick={() => { setOpen(false); onNavigate(); }}>{i.label}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 120);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <div className="topbar">
        <div className="container topbar-inner">
          <ul className="topbar-left">
            <li><a href={`mailto:${CONTACT.email}`}><FaEnvelope /> {CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phones[0].tel}`}><FaPhoneAlt /> {CONTACT.phones[0].label}</a></li>
          </ul>
          {/* Social media icons, hidden for now. Remove this comment wrapper to show them again.
          <ul className="topbar-social">
            <li><a href={CONTACT.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a></li>
            <li><a href={CONTACT.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a></li>
            <li><a href={CONTACT.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
          </ul>
          */}
        </div>
      </div>

      <div className={`navbar-area ${sticky ? 'is-sticky' : ''}`}>
        <div className="container navbar">
          <Link to="/" className="brand" onClick={close}>
            <img src={IMG.logo} alt="Ultimate Logistics Services Logo" />
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
            <li className="nav-item"><NavLink to="/" end className="nav-link" onClick={close}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about-us" className="nav-link" onClick={close}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/our-team" className="nav-link" onClick={close}>Our Team</NavLink></li>
            <Dropdown label="Services" items={SERVICE_LINKS} onNavigate={close} />
            <Dropdown label="Routes" items={ROUTE_LINKS} onNavigate={close} />
            <li className="nav-item"><NavLink to="/contact-us" className="nav-link" onClick={close}>Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
