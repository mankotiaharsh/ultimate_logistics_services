import { FaPhoneAlt } from 'react-icons/fa';
import { CONTACT } from '../data/site';
import { Btn, PageTitle, useTitle } from '../components/Common';
import vikramVerma from '../assets/team/vikram-verma.webp';
import sameerJain from '../assets/team/sameer-jain.webp';
import deepanshuSharma from '../assets/team/deepanshu-sharma.webp';
import anuragThakur from '../assets/team/anurag-thakur.webp';
import chetanSharma from '../assets/team/chetan-sharma.webp';
import jatinJaryal from '../assets/team/jatin-jaryal.webp';
import bhabukBhatia from '../assets/team/bhabuk-bhatia.webp';

// Team members: fill in each person's real role and a one-line description.
// To show a real photo, put it in src/assets/team/, import it at the top and add `photo: importedName`;
// until then the circle shows the person's initials.
const TEAM = [
  { name: 'Vikram Verma', role: 'Admin Manager', note: 'Office administration & team coordination', photo: vikramVerma },
  { name: 'Sameer Jain', role: 'Logistics Supervisor', note: 'Fleet management, team leadership & safety compliance', photo: sameerJain },
  { name: 'Chetan', role: 'Accounts Manager', note: 'Billing, payments & GST invoicing', photo: chetanSharma },
  { name: 'Deepansh Sharma', role: 'Dispatch Coordinator', note: 'Truck allocation & departure scheduling', photo: deepanshuSharma },
  { name: 'Anurag Thakur', role: 'Dispatch Coordinator', note: 'Driver coordination & load updates', photo: anuragThakur },
  { name: 'Jatin Jaryal', role: 'Customs Coordinator', note: 'Documentation, e-way bills & compliance', photo: jatinJaryal },
  { name: 'Bhabuk Bhatia', role: 'Tracking & Tracing', note: 'Live GPS monitoring & shipment updates', photo: bhabukBhatia },
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
