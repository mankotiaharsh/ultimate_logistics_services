import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaPlus, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';
import { CONTACT, IMG } from '../data/site';

// Sets the browser tab title for each page.
export function useTitle(title) {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}

export function PageTitle({ title, crumb }) {
  return (
    <section className="page-title" style={{ backgroundImage: `url(${IMG.pageBg})` }}>
      <div className="container title-text">
        <h1>{title}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>{crumb || title}</li>
        </ul>
      </div>
    </section>
  );
}

export function SectionTitle({ tag, title, text, center = true, light = false }) {
  return (
    <div className={`section-title ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      {tag && <span>{tag}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function Btn({ to, href, children, outline }) {
  const cls = `default-btn ${outline ? 'outline' : ''}`;
  if (href) return <a className={cls} href={href} target="_blank" rel="noreferrer">{children}</a>;
  return <Link className={cls} to={to}>{children}</Link>;
}

// About block with About / Our Mission / Our Goal tabs (used on home, about, service and route pages).
// `compactImg` shows the photo smaller (used for the portrait photo on the home page).
// `caption` ({ name, role }) adds a name badge over the bottom of the photo.
export function AboutTabs({ img, tag = 'About Us', title, about, mission, goal, btn, compactImg = false, caption }) {
  const [tab, setTab] = useState('about');
  const content = { about, mission, goal }[tab] || [];
  return (
    <section className="about-section pt-100">
      <div className="container two-col">
        <div className={`about-img ${compactImg ? 'compact' : ''}`}>
          <img src={img} alt={caption ? `${caption.name}, ${caption.role}` : title} />
          {caption && (
            <div className="about-caption">
              <strong>{caption.name}</strong>
              <span>{caption.role}</span>
            </div>
          )}
        </div>
        <div className="about-text">
          <SectionTitle tag={tag} title={title} center={false} />
          <div className="tabs">
            {[['about', 'About'], ['mission', 'Our Mission'], ['goal', 'Our Goal']].map(([k, l]) => (
              <button key={k} className={tab === k ? 'active' : ''} onClick={() => setTab(k)}>{l}</button>
            ))}
          </div>
          <div className="tab-content">
            {content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {btn && <div className="mt-30">{btn}</div>}
        </div>
      </div>
    </section>
  );
}

export function Faq({ items, tag = 'FAQ', title = 'Frequently Asked Questions' }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section pt-100 pb-100">
      <div className="container faq-grid">
        <div className="faq-intro">
          <SectionTitle
            tag={tag}
            title={title}
            text="Quick answers about our transport services, coverage, safety and pricing."
            center={false}
          />
          <div className="faq-help">
            <h3>Still have questions?</h3>
            <p>Our team is happy to help with routes, rates and special cargo.</p>
            <a href={`tel:${CONTACT.phones[0].tel}`} className="faq-help-phone"><FaPhoneAlt /> {CONTACT.phones[0].label}</a>
            <Btn to="/contact-us">Contact Us</Btn>
          </div>
        </div>

        <div className="accordions">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={q}>
                <button className="accordion-title" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="accordion-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{q}</h3>
                  <span className="accordion-icon"><FaPlus /></span>
                </button>
                <div className="accordion-body">
                  <div className="accordion-content"><p>{a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// "Know Shipping Location" tracking box shown on the home and about pages.
// `inline` lays it out as a wide horizontal bar (about page).
export function TrackBox({ inline = false }) {
  const [id, setId] = useState('');
  return (
    <div className={`track-box ${inline ? 'inline' : ''}`}>
      <FaSearchLocation className="track-icon" />
      <div className="track-text">
        <h3>Know Shipping Location</h3>
        <p>Track ID &amp; Order ID will be on your document file.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); alert(id ? `Tracking for ${id}: please call 77105 89837 for live status.` : 'Please enter your Track ID'); }}>
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter Track ID / Order ID" />
        <button type="submit" className="default-btn navy">Track Now</button>
      </form>
    </div>
  );
}
