import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaSearchLocation } from 'react-icons/fa';
import { IMG } from '../data/site';

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
export function AboutTabs({ img, tag = 'About Us', title, about, mission, goal, btn }) {
  const [tab, setTab] = useState('about');
  const content = { about, mission, goal }[tab] || [];
  return (
    <section className="about-section pt-100">
      <div className="container two-col">
        <div className="about-img"><img src={img} alt={title} /></div>
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
      <div className="container narrow">
        <SectionTitle tag={tag} title={title} />
        <div className="accordions">
          {items.map(([q, a], i) => (
            <div className="accordion-item" key={q}>
              <button className={`accordion-title ${open === i ? 'active' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <h3>{q}</h3>
                {open === i ? <FaMinus /> : <FaPlus />}
              </button>
              {open === i && <div className="accordion-content"><p>{a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "Know Shipping Location" tracking box shown on the home and about pages.
export function TrackBox() {
  const [id, setId] = useState('');
  return (
    <div className="track-box">
      <FaSearchLocation className="track-icon" />
      <h3>Know Shipping Location</h3>
      <p>Track ID &amp; Order ID will be on your document file.</p>
      <form onSubmit={(e) => { e.preventDefault(); alert(id ? `Tracking for ${id}: please call 99147-08369 for live status.` : 'Please enter your Track ID'); }}>
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter Track ID / Order ID" />
        <button type="submit" className="default-btn purple">Track Now</button>
      </form>
    </div>
  );
}
