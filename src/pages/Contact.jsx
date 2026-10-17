import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
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

export default function Contact() {
  useTitle('Contact Ultimate Logistics Services | Mukerian, Punjab');
  const phone = CONTACT.phones[0];

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
