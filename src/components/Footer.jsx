import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronRight } from 'react-icons/fa';
import { CONTACT, IMG, SERVICE_LINKS } from '../data/site';

// Destination states shown in the footer, each linking to its route page.
const STATE_LINKS = [
  { label: 'Delhi', to: '/routes/delhi' },
  { label: 'Uttar Pradesh', to: '/routes/noida' },
  { label: 'Maharashtra', to: '/routes/mukerian-to-mumbai-transport' },
  { label: 'Karnataka', to: '/routes/mukerian-to-bangalore-transport' },
  { label: 'Tamil Nadu', to: '/routes/mukerian-to-chennai-transport' },
  { label: 'Telangana', to: '/routes/mukerian-to-hyderabad-transport' },
];

export default function Footer() {
  const mainPhone = CONTACT.phones[0];

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-cta">
          <div>
            <h2>Ready to move your cargo?</h2>
            <p>Get a free, no-obligation quote for FTL, PTL or door-to-door transport anywhere in India.</p>
          </div>
          <div className="footer-cta-actions">
            <a href={`tel:${mainPhone.tel}`} className="footer-cta-phone"><FaPhoneAlt /> {mainPhone.label}</a>
            {/* "Get a Quote" button, hidden for now. Remove this comment wrapper to show it again.
            <Link to="/contact-us" className="default-btn navy">Get a Quote</Link>
            */}
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-widget footer-brand">
          <Link to="/"><img src={IMG.logo} alt="Ultimate Logistics Services" className="footer-logo" /></Link>
          <p>
            Ultimate Logistics Services moves goods for manufacturers and traders across India with
            full truck load, part load and door-to-door transport.
          </p>
          {/* Social media icons, hidden for now. Remove this comment wrapper to show them again.
          <div className="footer-social">
            <a href={CONTACT.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={CONTACT.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={CONTACT.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
          */}
        </div>

        <div className="footer-widget">
          <h3>Our Services</h3>
          <ul className="links">
            {SERVICE_LINKS.map((s) => (
              <li key={s.to}><Link to={s.to}><FaChevronRight /> {s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-widget">
          <h3>Where We Deliver</h3>
          <ul className="links">
            {STATE_LINKS.map((r) => (
              <li key={r.to}><Link to={r.to}><FaChevronRight /> {r.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-widget">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <span className="fc-icon"><FaPhoneAlt /></span>
              <span>
                {CONTACT.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>)}
              </span>
            </li>
            <li>
              <span className="fc-icon"><FaEnvelope /></span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <span className="fc-icon"><FaMapMarkerAlt /></span>
              <span>
                <strong>Our Office</strong>
                {CONTACT.registered.tradeName} (Prop. {CONTACT.registered.legalName}), {CONTACT.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container copyright-inner">
          <nav>
            <Link to="/about-us">About</Link>
            <Link to="/blogs">Blog</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
