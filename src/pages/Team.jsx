import { FaPhoneAlt } from 'react-icons/fa';
import { CONTACT } from '../data/site';
import { Btn, PageTitle, useTitle } from '../components/Common';
import sameerJain from '../assets/team/sameer-jain.webp';

// Team members: fill in each person's real role and a one-line description.
// To show a real photo, put it in src/assets/team/, import it at the top and add `photo: importedName`;
// until then the circle shows the person's initials.
const TEAM = [
  { name: 'Chetan Sharma', role: 'Role / Title', note: 'Short line about what they handle' },
  { name: 'Sameer Jain', role: 'Logistics Supervisor', note: 'Loading, dispatch & on-time deliveries', photo: sameerJain },
  { name: 'Deepansh Sharma', role: 'Role / Title', note: 'Short line about what they handle' },
  { name: 'Anurag', role: 'Role / Title', note: 'Short line about what they handle' },
  { name: 'Jaitin', role: 'Role / Title', note: 'Short line about what they handle' },
];

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

export default function Team() {
  useTitle('Our Team | Ultimate Logistics Services');

  return (
    <>
      <PageTitle title="Our Team" />

      <section className="team-section pt-100 pb-100">
        <div className="container">
          <div className="team-head">
            <span>The people behind every load</span>
            <h2>Meet the team.</h2>
          </div>

          <div className="team-grid">
            {TEAM.map((m) => (
              <article className="team-member" key={m.name}>
                <div className="team-avatar">
                  {m.photo ? <img src={m.photo} alt={m.name} /> : <span aria-hidden="true">{initials(m.name)}</span>}
                </div>
                <h3>{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p>{m.note}</p>
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
