import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { CONTACT } from '../data/site';
import { PageTitle, useTitle } from '../components/Common';

// Details we ask visitors to include, so a quote can be given from the first message.
const DETAILS = [
  'Pickup location (city / PIN code)',
  'Delivery location (city / PIN code)',
  'Type of goods',
  'Approximate weight or size of the load',
  'Preferred pickup date',
  'Your name and phone number',
];

// Opens the visitor's email app with the details above as a ready-to-fill template.
const EMAIL_TEMPLATE = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Transport quote request')}&body=${encodeURIComponent(
  `Hello Ultimate Logistics Services,\n\nI would like a quote for the following shipment:\n\n${DETAILS.map((d) => `${d}: `).join('\n')}\n\nThank you.`
)}`;

// Opens Google Maps with directions to the office.
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;

export default function Contact() {
  useTitle('Contact Ultimate Logistics Services | Mukerian, Punjab');
  const phone = CONTACT.phones[0];

  return (
    <>
      <PageTitle title="Contact Us" />

      <section className="contact-card-section pt-100 pb-70">
        <div className="container grid-3">
          <div className="contact-card">
            <span className="cc-icon"><FaPhoneAlt /></span>
            <h3>Call Us</h3>
            <div className="cc-body">
              {CONTACT.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="cc-main">+91 {p.label}</a>)}
              <p>Speak directly with our team for quotes and shipment updates.</p>
            </div>
            <a href={`tel:${phone.tel}`} className="cc-action">Call now <FaArrowRight /></a>
          </div>
          <div className="contact-card">
            <span className="cc-icon"><FaEnvelope /></span>
            <h3>Email Us</h3>
            <div className="cc-body">
              <a href={`mailto:${CONTACT.email}`} className="cc-main cc-email">{CONTACT.email}</a>
              <p>Send your shipment details and we’ll reply with a clear quote.</p>
            </div>
            <a href={EMAIL_TEMPLATE} className="cc-action">Send an email <FaArrowRight /></a>
          </div>
          <div className="contact-card">
            <span className="cc-icon"><FaMapMarkerAlt /></span>
            <h3>Visit Us</h3>
            <div className="cc-body">
              <span className="cc-main">{CONTACT.registered.tradeName}</span>
              <p>{CONTACT.address}</p>
            </div>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="cc-action">Get directions <FaArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="contact-section pb-100">
        <div className="container two-col">
          <div className="contact-area">
            <h2>How to Send Us Your Query</h2>
            <p className="contact-intro">
              Have a shipment to move or a question about our services? Call or email us directly, our team will get back to you with answers and a clear quote.
            </p>

            <div className="contact-options">
              <a href={`tel:${phone.tel}`} className="contact-option">
                <span className="co-icon"><FaPhoneAlt /></span>
                <span>
                  <small>Call us</small>
                  <strong>{phone.label}</strong>
                  <em>Fastest way to get a quote</em>
                </span>
              </a>
              <a href={EMAIL_TEMPLATE} className="contact-option">
                <span className="co-icon"><FaEnvelope /></span>
                <span>
                  <small>Email us</small>
                  <strong>{CONTACT.email}</strong>
                  <em>Opens your email with a ready template</em>
                </span>
              </a>
            </div>

            <ol className="contact-steps">
              <li><strong>Choose call or email</strong> using the options above.</li>
              <li><strong>Share your shipment details</strong> from the list below.</li>
              <li><strong>Get your quote</strong>: we reply with a transparent price and pickup plan.</li>
            </ol>

            <div className="contact-checklist">
              <h3>Please include these details</h3>
              <ul>
                {DETAILS.map((d) => <li key={d}><FaCheckCircle /> {d}</li>)}
              </ul>
            </div>
          </div>
          <div className="map-wrap">
            <iframe src={CONTACT.mapEmbed} title="Ultimate Logistics Services location" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
