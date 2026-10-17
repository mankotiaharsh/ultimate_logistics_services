import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { IMG, SERVICE_LINKS, ROUTE_LINKS } from '../data/site';
import Icon, { CYCLE } from '../components/Icon';
import { AboutTabs, Btn, Faq, PageTitle, SectionTitle, useTitle } from '../components/Common';

const ALL_LINKS = [...SERVICE_LINKS, ...ROUTE_LINKS];
const labelFor = (to) => {
  const l = ALL_LINKS.find((x) => x.to === to)?.label || to;
  return l === 'Pan India Service' ? 'Pan India Transport' : l;
};

// Photo, icon and one-line summary for each card in the "Related Services" block.
const small = (url) => url.replace('w=1920', 'w=700');
const RELATED_INFO = {
  '/full-truck-load': [IMG.truck1, 'truck', 'A dedicated truck for your load with direct, non-stop delivery.'],
  '/part-truck-load': [IMG.truck2, 'fmcg', 'Share truck space and pay only for what your cargo uses.'],
  '/door-to-door-transport': [small(IMG.hero2), 'map', 'Pickup from your doorstep, delivery to the receiver.'],
  '/pan-india-transport-service': [small(IMG.quotePort), 'gps', 'Road freight to every state, city and pincode in India.'],
  '/b2b-logistics-company-india': [IMG.truck3, 'b2b', 'Freight for manufacturers and traders with GST-ready billing.'],
  '/transport-services-in-mukerian': [IMG.truck1, 'steel', 'Local and outstation transport for Mukerian and Hoshiarpur businesses.'],
};

// Shared layout for every service page and every route page.
export default function DetailPage({ data: d }) {
  useTitle(d.seoTitle);
  return (
    <>
      <PageTitle title={d.title} crumb={d.crumb} />

      <section className="transport-section pt-100 pb-70">
        <div className="container">
          <SectionTitle tag="Our Services" title={d.cardsTitle} />
          <div className="grid-3">
            {d.cards.map((c, i) => (
              <div className="transport-card" key={c.title}>
                <div className="transport-img"><img src={c.img} alt={c.title} /></div>
                <div className="transport-text">
                  <Icon name={CYCLE[i]} className="transport-icon" />
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutTabs
        img={IMG.truck2}
        title={d.aboutTitle}
        about={d.about}
        mission={d.mission}
        goal={d.goal}
        btn={<Btn to="/contact-us" outline>Get Quote</Btn>}
      />

      <section className="benefits-section pt-100">
        <div className="container two-col">
          <div>
            <SectionTitle title={d.benefitsTitle} center={false} />
            {d.benefitsIntro.map((p, i) => <p key={i}>{p}</p>)}
            <ul className="check-list">
              {d.benefits.map((b) => <li key={b}><FaCheckCircle /> {b}</li>)}
            </ul>
            <Btn to="/contact-us">Get Free Quote</Btn>
          </div>
          <div className="benefits-img"><img src={IMG.truck1} alt={d.title} /></div>
        </div>
      </section>

      <section className="choose-section pt-100 pb-70">
        <div className="container">
          <SectionTitle tag="Why Choose Us" title={d.whyTitle} text={d.whyIntro} />
          <div className="grid-3">
            {d.why.map(([t, text], i) => (
              <div className="choose-card" key={t}>
                <Icon name={CYCLE[i % CYCLE.length]} className="choose-icon" />
                <h3>{t}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={d.faqs} />

      <section className="related-section pt-100 pb-100">
        <div className="container">
          <SectionTitle tag="Explore More" title="Related Services" />
          <div className="related-grid">
            {d.related.map((to) => {
              const [img, icon, text] = RELATED_INFO[to] || [IMG.truck1, 'truck', ''];
              return (
                <Link key={to} to={to} className="related-card">
                  <div className="related-img">
                    <span className="related-photo"><img src={img} alt={labelFor(to)} loading="lazy" /></span>
                    <span className="related-icon"><Icon name={icon} /></span>
                  </div>
                  <div className="related-body">
                    <h3>{labelFor(to)}</h3>
                    {text && <p>{text}</p>}
                    <span className="related-more">View Service <FaArrowRight /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="seo-about pt-100 pb-100">
        <div className="container narrow">
          <h2>{d.footerTitle}</h2>
          <p>{d.footerText}</p>
        </div>
      </section>
    </>
  );
}
