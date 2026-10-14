import { IMG, WHY_CHOOSE } from '../data/site';
import Icon from '../components/Icon';
import { AboutTabs, Btn, PageTitle, SectionTitle, TrackBox, useTitle } from '../components/Common';

const STATS = [['22+', 'Years in Operation'], ['19K+', 'Pincodes Covered'], ['28', 'States Served'], ['100%', 'B2B Focused']];

const TIMELINE = [
  ['2002 — Founded in Ludhiana, Punjab', "Ultimate Logistics Services was established on G.T. Road, Ludhiana, with a focus on serving local manufacturers and traders in Punjab's textile and hosiery belt."],
  ['2006–2010 — Expanded to North India Corridors', 'Scaled operations to cover Delhi, Haryana, Himachal Pradesh, Jammu & Kashmir, and Rajasthan, establishing regular freight routes on the Ludhiana–Delhi NH-44 corridor.'],
  ['2012–2015 — Pan-India Network Launch', 'Extended freight operations to Western India (Mumbai, Ahmedabad, Surat, Pune), Southern India (Bangalore, Chennai, Hyderabad), and Eastern India (Kolkata, Bhubaneswar), building a true Pan-India road freight network.'],
  ['2018 — GPS Fleet Tracking Deployed', 'Equipped the entire fleet with live GPS tracking, giving clients real-time shipment visibility and enabling our operations team to proactively manage route delays.'],
  ['2024–Present — 19,000+ Pincodes, All 28 States', 'Today Ultimate Logistics Services covers the entire Indian mainland, serving manufacturers, wholesalers, distributors, and exporters with FTL, PTL, and door-to-door transport solutions backed by transit insurance and 24/7 support.'],
];

export default function About() {
  useTitle('About Us | Ultimate Logistics Services – Est. 2002');
  return (
    <>
      <PageTitle title="About Us" />

      <AboutTabs
        img={IMG.aboutPage}
        title="We Provide Fast & Safe Service to Our Customers"
        about={[
          'Ultimate Logistics Services in Ludhiana is a reliable name in the industry as they aim to deliver the best experience to their customers. This has helped them build up a loyal customer base. They started their journey in 2002 and ever since, they have ensured that the customer remains at the centre of their business operations and philosophy.',
          'As they are located in a favourable neighbourhood at SCO-74, 1st Floor, Transport Nagar-141003, it is easy to locate Ultimate Logistics Services. We specialize in car transportation, industrial machinery relocation, residential and commercial moving services across India.',
        ]}
        mission={[
          'Our mission is to provide reliable, efficient, and customer-focused transport and logistics solutions that exceed expectations. We are committed to ensuring safe delivery of goods while maintaining the highest standards of professionalism and integrity.',
          'We strive to build long-term relationships with our clients by consistently delivering quality service, maintaining transparent communication, and adapting to their evolving transportation needs across India.',
        ]}
        goal={[
          'Our goal is to become the most trusted and preferred transport service provider in North India by 2030. We aim to expand our fleet, enhance our service offerings, and leverage technology to provide real-time tracking and seamless logistics solutions.',
          'We are committed to sustainable growth while maintaining our core values of reliability, safety, and customer satisfaction. Through continuous improvement and innovation, we aspire to set new benchmarks in the transportation industry.',
        ]}
        btn={<Btn to="/contact-us" outline>Contact Us</Btn>}
      />

      <section className="why-choose-section about-why" style={{ backgroundImage: `url(${IMG.quotePort})` }}>
        <div className="container">
          <SectionTitle
            tag="Why Choose Us"
            title="Why Businesses Choose Ultimate Logistics Services"
            text="You need a logistics partner who solves problems before they happen. We combine a modern fleet with real-time technology to guarantee safety. Here is why leading manufacturers across India trust us."
            light
          />
          <div className="about-why-grid">
            {WHY_CHOOSE.map((w, i) => (
              <div className="about-why-card" key={w.title}>
                <div className="about-why-head">
                  <Icon name={w.icon} className="about-why-icon" />
                  <span className="about-why-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <TrackBox inline />
        </div>
      </section>

      <section className="journey-section pt-100 pb-100">
        <div className="container">
          <SectionTitle tag="Our Journey" title="Two Decades of Delivering Trust" text="From a single truck in Ludhiana to a Pan-India B2B logistics partner — here's how Ultimate Logistics Services grew." />
          <div className="grid-4 stats">
            {STATS.map(([n, l]) => <div className="stat" key={l}><h3>{n}</h3><p>{l}</p></div>)}
          </div>
          <div className="timeline">
            {TIMELINE.map(([t, d]) => (
              <div className="timeline-item" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-about pb-100">
        <div className="container narrow">
          <h2>About Ultimate Logistics Services — Ludhiana, Punjab</h2>
          <p>Ultimate Logistics Services is a B2B road freight and logistics company established in 2002, headquartered at Transport Nagar, G.T. Road, Ludhiana, Punjab 141003, India. The company provides Full Truck Load (FTL), Part Truck Load (PTL), and door-to-door transport services covering all 28 states and over 19,000 pincodes across India. Ultimate Logistics serves business clients in sectors including textiles, hosiery, automotive components, pharmaceuticals, FMCG, steel, chemicals, industrial machinery, and consumer electronics. Primary origin hubs include Ludhiana, Delhi, Noida, Gurgaon, Mumbai, Pune, Ahmedabad, Bangalore, Chennai, Hyderabad, and Kolkata. The company operates an Eicher truck fleet with live GPS tracking on every vehicle, and provides transit insurance on all shipments. Phone: <a href="tel:9914708369">+91-99147-08369</a> | Email: <a href="mailto:info@rajindertransports.com">info@rajindertransports.com</a></p>
        </div>
      </section>
    </>
  );
}
