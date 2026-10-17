import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { CONTACT } from '../data/site';
import { Btn, PageTitle, SectionTitle, useTitle } from '../components/Common';

// Placeholder team members: replace name, role and bio with real details.
// To show a real photo, put it in src/assets/team/, import it at the top and add `photo: importedName`.
// `linkedin` and `email` are optional; their icons only appear when filled in.
const TEAM = [
  {
    name: 'Team Member Name',
    role: 'Founder & Managing Director',
    bio: 'Leads the company’s vision and client relationships, with years of hands-on experience in road freight and heavy cargo transport across India.',
    linkedin: '',
    email: '',
  },
  {
    name: 'Team Member Name',
    role: 'Head of Operations',
    bio: 'Oversees fleet planning, dispatch and on-road safety, making sure every shipment is loaded, tracked and delivered on schedule.',
    linkedin: '',
    email: '',
  },
  {
    name: 'Team Member Name',
    role: 'Customer Relations Manager',
    bio: 'Your first point of contact for quotes, bookings and shipment updates, keeping clients informed from pickup to delivery.',
    linkedin: '',
    email: '',
  },
];

// Neutral silhouette shown until a real photo is added.
function Silhouette() {
  return (
    <svg viewBox="0 0 200 200" className="team-silhouette" aria-hidden="true">
      <circle cx="100" cy="78" r="38" />
      <path d="M30 200c0-44 31-72 70-72s70 28 70 72z" />
    </svg>
  );
}

export default function Team() {
  useTitle('Our Team | Ultimate Logistics Services');

  return (
    <>
      <PageTitle title="Our Team" />

      <section className="team-section pt-100 pb-100">
        <div className="container">
          <SectionTitle
            tag="Our Team"
            title="The People Behind Every Delivery"
            text="Experienced, hands-on and always reachable. Meet the team that plans, moves and tracks your cargo across India."
          />

          <div className="team-grid">
            {TEAM.map((m, i) => (
              <article className="team-card" key={i}>
                <div className="team-photo">
                  {m.photo ? <img src={m.photo} alt={m.name} /> : <Silhouette />}
                  {(m.linkedin || m.email) && (
                    <div className="team-social">
                      {m.linkedin && <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} on LinkedIn`}><FaLinkedinIn /></a>}
                      {m.email && <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`}><FaEnvelope /></a>}
                    </div>
                  )}
                </div>
                <div className="team-info">
                  <h3>{m.name}</h3>
                  <span className="team-role">{m.role}</span>
                  <p>{m.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="team-cta">
            <div>
              <h3>Want to talk to our team?</h3>
              <p>Call us for a quote or shipment update, we are happy to help.</p>
            </div>
            <div className="team-cta-actions">
              <a href={`tel:${CONTACT.phones[0].tel}`} className="team-cta-phone"><FaPhoneAlt /> {CONTACT.phones[0].label}</a>
              <Btn to="/contact-us">Contact Us</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
