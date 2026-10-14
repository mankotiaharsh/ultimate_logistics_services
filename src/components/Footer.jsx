import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CONTACT, IMG, SERVICE_LINKS } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="lines" aria-hidden="true"><span /><span /><span /></div>
      <div className="container footer-grid">
        <div className="footer-widget">
          <Link to="/"><img src={IMG.logo} alt="Ultimate Logistics Services" className="footer-logo" /></Link>
          <h3>Headquarter</h3>
          <ul>
            <li><FaMapMarkerAlt /> {CONTACT.address}</li>
            <li>
              <FaMapMarkerAlt />
              <span>
                <strong>Registered Office</strong><br />
                {CONTACT.registered.tradeName}<br />
                Prop. {CONTACT.registered.legalName}<br />
                {CONTACT.registered.address}
              </span>
            </li>
            <li><a href={`mailto:${CONTACT.email}`}><FaEnvelope /> {CONTACT.email}</a></li>
            {CONTACT.phones.map((p) => (
              <li key={p.tel}><a href={`tel:${p.tel}`}><FaPhoneAlt /> {p.label}</a></li>
            ))}
          </ul>
          <div className="footer-social">
            <a href={CONTACT.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={CONTACT.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={CONTACT.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-widget">
          <h3>Our Services</h3>
          <ul className="links">
            {SERVICE_LINKS.slice(0, 5).map((s) => <li key={s.to}><Link to={s.to}>{s.label}</Link></li>)}
          </ul>
        </div>

        <div className="footer-widget">
          <h3>Quick Links</h3>
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/routes/delhi">Delhi Transport</Link></li>
            <li><Link to="/routes/noida">Noida Transport</Link></li>
          </ul>
        </div>

        <div className="footer-widget">
          <h3>Support</h3>
          <ul className="links">
            <li><Link to="/b2b-logistics-company-india">B2B Logistics</Link></li>
            <li><Link to="/routes/delhi-to-ludhiana-transport">Delhi to Ludhiana</Link></li>
          </ul>
        </div>
      </div>

      <div className="copyright-area">
        <p>
          Copyright 2020-2021 Ultimate Logistics Services. All rights reserved. Powered by Quince Digital.
          {' '}| <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
