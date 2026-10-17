import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT } from '../data/site';
import { PageTitle, useTitle } from '../components/Common';

export default function Contact() {
  useTitle('Contact Ultimate Logistics Services | Mukerian, Punjab');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // No backend yet: this opens the visitor's email app with the message filled in.
  // Swap this for a call to your own API or a form service (e.g. Formspree) later.
  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(form.subject || 'Website enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageTitle title="Contact Us" />

      <section className="contact-card-section pt-100 pb-70">
        <div className="container grid-3">
          <div className="contact-card">
            <FaPhoneAlt className="cc-icon" />
            {CONTACT.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>)}
          </div>
          <div className="contact-card">
            <FaEnvelope className="cc-icon" />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="contact-card">
            <FaMapMarkerAlt className="cc-icon" />
            <p>
              <strong>{CONTACT.registered.tradeName}</strong><br />
              Prop. {CONTACT.registered.legalName}<br />
              {CONTACT.address}
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section pb-100">
        <div className="container two-col">
          <div className="contact-area">
            <h2>Ask Any Question</h2>
            <form onSubmit={submit}>
              <div className="form-row">
                <input required placeholder="Your Name" value={form.name} onChange={set('name')} />
                <input required type="email" placeholder="Your Email" value={form.email} onChange={set('email')} />
              </div>
              <div className="form-row">
                <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={set('phone')} />
                <input placeholder="Subject" value={form.subject} onChange={set('subject')} />
              </div>
              <textarea required rows={6} placeholder="Your Message" value={form.message} onChange={set('message')} />
              <button type="submit" className="default-btn">Send Message</button>
              {sent && <p className="form-note">Your email app should now open with the message ready to send.</p>}
            </form>
          </div>
          <div className="map-wrap">
            <iframe src={CONTACT.mapEmbed} title="Ultimate Logistics Services location" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
