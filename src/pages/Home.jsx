import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaNewspaper } from 'react-icons/fa';
import { IMG, CONTACT, WHY_CHOOSE } from '../data/site';
import Icon from '../components/Icon';
import FleetGallery from '../components/FleetGallery';
import flatbedPhoto from '../assets/trucks/web/tractor-truck.webp';
import bhelLogo from '../assets/clients/bhel.png';
import jcbLogo from '../assets/clients/jcb.png';
import relianceLogo from '../assets/clients/reliance.png';
import tataHitachiLogo from '../assets/clients/tata-hitachi.png';
import birlaTmtLogo from '../assets/clients/birla-tmt.png';
import amazonLogo from '../assets/clients/amazon.png';
import fedexLogo from '../assets/clients/fedex.png';
import dhlLogo from '../assets/clients/dhl.png';
import walmartLogo from '../assets/clients/walmart.png';
import { AboutTabs, Btn, Faq, SectionTitle, TrackBox, useTitle } from '../components/Common';

// Add more reviews here; the arrows and dots appear once there is more than one.
const TESTIMONIALS = [
  {
    name: 'Harsh Mankotia',
    role: 'Customer',
    text: 'I picked 3 of my lathe machines and found very supportive, humble and respectful... Must use in case u require any service.',
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const many = TESTIMONIALS.length > 1;
  const go = (d) => setI((i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('');

  return (
    <section className="feedback-section" id="testimonial">
      <div className="container feedback-grid">
        <div className="feedback-intro">
          <SectionTitle
            tag="Testimonial"
            title="What Our Customers Say"
            text="Businesses across India trust us with their most valuable cargo. Here is what they say about working with Ultimate Logistics Services."
            center={false}
            light
          />
          <Btn to="/contact-us">Work With Us</Btn>
        </div>

        <div className="feedback-card-wrap">
          <figure className="feedback-card" key={i}>
            <FaQuoteLeft className="feedback-quote" />
            <blockquote>{t.text}</blockquote>
            <figcaption>
              <span className="feedback-avatar" aria-hidden="true">{initials}</span>
              <span>
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </span>
            </figcaption>
          </figure>
          {many && (
            <div className="feedback-nav">
              <button onClick={() => go(-1)} aria-label="Previous review"><FaChevronLeft /></button>
              {TESTIMONIALS.map((_, n) => (
                <button key={n} className={`dot ${n === i ? 'active' : ''}`} onClick={() => setI(n)} aria-label={`Review ${n + 1}`} />
              ))}
              <button onClick={() => go(1)} aria-label="Next review"><FaChevronRight /></button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const SLIDES = [
  {
    bg: IMG.hero,
    title: 'India’s Most Reliable Logistics Service',
    text: 'Behind every successful business is logistics that works quietly and consistently. Ultimate Logistics Services delivers across India with reliable planning, honest timelines, and real accountability. Join hundreds of businesses that trust us every day to move their goods safely!',
  },
  {
    bg: IMG.hero2,
    title: 'Fast & Secure Transport Solutions',
    text: 'From full truck loads to part loads, we handle your cargo with care. Our pan-India network ensures timely delivery to every corner of the country.',
  },
];

const FEATURES = [
  ['8+', 'Years of Experience', 'Serving Indian businesses with honest and reliable logistics for over 8 years.', 'truck'],
  ['28', 'States Delivery', 'We deliver your goods all over India, to every city and village, daily.', 'map'],
  ['500+', 'Happy Clients', 'Trusted by small businesses and large factories across the country.', 'b2b'],
  ['100%', 'Safe Delivery', 'Your inventory arrives safely and intact, exactly as you packed it.', 'shield'],
];

const SERVICES = [
  { img: IMG.truck1, icon: 'truck', title: 'Full-Truck Load', to: '/full-truck-load', text: 'Book an entire truck for your large shipments. This option ensures faster delivery with zero stops between your warehouse and the destination. Your goods remain secure and untouched throughout the journey.' },
  { img: IMG.truck2, icon: 'fmcg', title: 'Part Truck Load', to: '/part-truck-load', text: 'Pay only for the space you use. We combine your smaller shipment with others to reduce costs while maintaining strict safety standards. This is perfect for businesses shipping under 5 tons.' },
  { img: IMG.truck3, icon: 'map', title: 'Door To Door', to: '/door-to-door-transport', text: 'We pick up cargo from your doorstep and deliver it directly to the receiver. You avoid visiting depots or arranging extra local transport. Our team handles all loading and unloading work.' },
];

// Icon, industry name, the line shown in the centre circle on hover, and the photo shown there.
const unsplash = (url) => `${url}?w=700&auto=format&fit=crop&q=75`;
// Commented-out industries are hidden for now; remove the // to show them again.
const INDUSTRIES = [
  // ['textile', 'Textiles And Garments', 'Fabric rolls, yarn and finished garments delivered on schedule.'],
  ['auto', 'Automotive and Spare Parts', 'Spare parts, components and assemblies moved safely to plants and dealers.', unsplash('https://plus.unsplash.com/premium_photo-1682141811863-f8d97e951857')],
  ['machine', 'Heavy Machinery', 'Plant equipment, gensets and industrial machines on low-bed and multi-axle trailers.', unsplash('https://images.unsplash.com/photo-1580901369227-308f6f40bdeb')],
  // ['fmcg', 'FMCG And Retail Distribution', 'Packaged goods delivered to distributors and retailers on time.'],
  ['steel', 'Iron, Steel, and Construction', 'Steel coils, pipes, rods and building material for sites and fabricators.', unsplash('https://images.unsplash.com/photo-1697281679213-fcab27e10ad4')],
  // ['pharma', 'Pharmaceuticals', 'Medicines and healthcare products handled with extra care.'],
  ['electronics', 'Electronics', 'Appliances and electronic goods, packed and secured to prevent damage.', unsplash('https://images.unsplash.com/photo-1776566347746-1bb7dcaa12d3')],
  ['paper', 'Paper And Packaging', 'Paper reels, cartons and packaging material for manufacturers and printers.', unsplash('https://images.unsplash.com/photo-1747006116196-fc20e136e4c0')],
];

// Industries arranged in a circle around a centre photo; hovering (or tapping) one shows its details in the centre.
function IndustryOrbit() {
  const [active, setActive] = useState(-1);
  const item = INDUSTRIES[active];
  return (
    <div className="industry-orbit" onMouseLeave={() => setActive(-1)}>
      <div className={`orbit-center ${item ? 'show' : ''}`}>
        {/* flatbed truck photo behind the brand message, plus one photo per industry; the active one fades in */}
        <img src={flatbedPhoto} alt="Flatbed truck carrying new tractors" className={!item ? 'on' : ''} />
        {INDUSTRIES.map(([, name, , photo], i) => photo && (
          <img key={name} src={photo} alt={name} className={i === active ? 'on' : ''} loading="lazy" />
        ))}
        <div className="orbit-info" aria-live="polite">
          {item ? (
            <>
              <span className="orbit-info-icon"><Icon name={item[0]} /></span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </>
          ) : (
            <div className="orbit-brand">
              <img src={IMG.logo} alt="" className="orbit-logo" />
              <h3>Industries We Move</h3>
              <ul className="orbit-stats">
                <li><strong>8+</strong> Years</li>
                <li><strong>28</strong> States</li>
                <li><strong>19,000+</strong> Pincodes</li>
              </ul>
              <p className="orbit-hint">Hover an industry to learn more</p>
            </div>
          )}
        </div>
      </div>

      {INDUSTRIES.map(([icon, name, text, photo], i) => {
        // spread nodes evenly around the circle, starting at the top
        const angle = (-90 + (360 / INDUSTRIES.length) * i) * (Math.PI / 180);
        const x = Math.cos(angle);
        const y = Math.sin(angle);
        // label sits on the outer side of the button, away from the centre photo
        const side = y < -0.7 ? 'top' : y > 0.7 ? 'bottom' : x < 0 ? 'left' : 'right';
        return (
          <button
            key={name}
            className={`orbit-node label-${side} ${i === active ? 'active' : ''}`}
            style={{ '--x': x.toFixed(4), '--y': y.toFixed(4) }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={`${name}: ${text}`}
          >
            {/* photo thumbnail is only shown in the phone/tablet card layout */}
            {photo && <span className="orbit-thumb"><img src={photo} alt="" loading="lazy" /></span>}
            <span className="orbit-icon"><Icon name={icon} /></span>
            <span className="orbit-label">{name}</span>
            <span className="orbit-text">{text}</span>
          </button>
        );
      })}
    </div>
  );
}


const FAQS = [
  ['Which locations does Ultimate Logistics Services cover in India?', 'We deliver to over 19,000 pincodes across all 28 states, covering major metros like Delhi, Mumbai, Bangalore, Chennai, and Hyderabad as well as remote villages. Established in 2018 and based in Mukerian, Punjab, we ensure your goods reach any destination in India safely and on time.'],
  ['Do you offer insurance for goods during transit?', 'Yes, Ultimate Logistics Services provides complete transit insurance for all B2B shipments. The coverage protects your cargo against accidents, theft, or damage during road transport. Insurance details are shared transparently at the time of booking so you always know your goods are financially protected.'],
  ['Can you transport perishable or fragile commercial goods?', 'Absolutely. We specialise in handling sensitive commercial cargo including pharmaceuticals, electronics, FMCG products, and fragile industrial equipment. Our fleet uses sealed containers and experienced drivers who follow strict handling protocols, ensuring safe delivery across India without damage or spoilage.'],
  ['How do I get a price quote for my cargo?', 'Simply call us at 77105 89837 or email info@ultimatelogisticsservices.com for a quick rate. Share your pickup location, destination, load type, and approximate weight — we will provide a transparent, route-specific price with no hidden charges, typically within a few hours.'],
];

// Trimmed logo copies live in assets/clients/. The number is each logo's width ÷ height,
// used to size logos so wide wordmarks and square icons look equally prominent.
const CLIENT_LOGOS = [
  ['BHEL', bhelLogo, 1.22],
  ['JCB', jcbLogo, 3.21],
  ['Reliance Industries', relianceLogo, 1.5],
  ['Tata Hitachi', tataHitachiLogo, 10.17],
  ['Birla TMT Steel', birlaTmtLogo, 4.0],
  ['Amazon', amazonLogo, 0.97],
  ['FedEx', fedexLogo, 3.43],
  ['DHL', dhlLogo, 6.92],
  ['Walmart', walmartLogo, 0.9],
];

// Same visual weight for every logo: width grows with the square root of the shape (capped at 200px).
const logoSize = (ratio) => {
  const width = Math.min(200, Math.round(76 * Math.sqrt(ratio)));
  return { '--w': width, '--h': Math.round(width / ratio) };
};

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];
  return (
    <section className="banner" style={{ backgroundImage: `url(${s.bg})` }}>
      <div className="container banner-text" key={i}>
        <h1>{s.title}</h1>
        <p>{s.text}</p>
        <div className="banner-btn">
          <Btn to="/contact-us">Get a Free Call</Btn>
          {/* "Watch Video" button, hidden for now. Remove this comment wrapper to show it again.
          <Btn href={`https://www.youtube.com/watch?v=${CONTACT.youtubeId}`}><FaPlay /> Watch Video</Btn>
          */}
        </div>
      </div>
      <button className="slide-nav prev" onClick={() => setI((i - 1 + SLIDES.length) % SLIDES.length)} aria-label="Previous"><FaChevronLeft /></button>
      <button className="slide-nav next" onClick={() => setI((i + 1) % SLIDES.length)} aria-label="Next"><FaChevronRight /></button>
    </section>
  );
}

export default function Home() {
  useTitle('Best Transport Company in India | Ultimate Logistics Services');
  return (
    <>
      <Hero />

      <section className="features-section">
        <div className="container grid-4">
          {FEATURES.map(([num, title, text, icon]) => (
            <div className="feature-card" key={title}>
              <Icon name={icon} className="feature-icon" />
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <AboutTabs
        img={IMG.about}
        compactImg
        caption={{ name: CONTACT.registered.legalName, role: 'Proprietor' }}
        title="We Provide Fast & Safe Service to Our Customer"
        about={[
          "Ultimate Logistics Services was founded on a simple promise: to deliver every shipment safely and on time. From our humble beginnings with a single truck to becoming one of India’s most trusted logistics networks, our commitment remains unchanged.",
          "We know that every delivery carries your brand’s reputation, which is why we handle your cargo with uncompromised care and respect. Backed by a modern fleet and a dedicated control center monitoring shipments 24/7 to proactively prevent delays, we provide the safe, efficient, and seamless nationwide logistics solutions your business can depend on.",
        ]}
        mission={[
          "Our mission is to deliver dependable, high-efficiency transport and logistics solutions that consistently surpass client expectations across India. Built on an unwavering foundation of safety, integrity, and professionalism, we treat every cargo assignment as a vital responsibility.",
          "By combining transparent communication with flexible service models tailored to your evolving supply chain demands, we strive to earn your long-term trust and foster enduring partnerships through every mile.",
        ]}
        goal={[
          "By 2030, our goal is to establish Ultimate Logistics Services as North India’s most trusted and preferred transport partner. We are actively expanding our fleet, diversifying our service offerings, and integrating advanced tracking technology to deliver real-time visibility and frictionless logistics management.",
          "Rooted in our core values of safety, reliability, and customer-first service, we remain committed to sustainable growth and continuous innovation, setting new performance benchmarks across the supply chain industry.",
        ]}
        btn={<Btn to="/about-us" outline>Know More</Btn>}
      />

      {/* "Our Fleet" video section, hidden for now. Remove this comment wrapper to show it again.
      <section className="fleet-section pt-100">
        <div className="container two-col">
          <div className="video-wrap">
            <iframe
              src={`https://www.youtube.com/embed/${CONTACT.youtubeId}`}
              title="Ultimate Logistics Services fleet"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div>
            <SectionTitle
              tag="Our Fleet"
              title="Guaranteed Safety With 18 Owned Trucks"
              text="Your cargo is too important to hand off to strangers. We run a private fleet of 18 vehicles. This gives us total control over speed and safety. Check out what our founder says about the reliability of our Eicher fleet."
              center={false}
            />
          </div>
        </div>
      </section>
      */}

      <section className="transport-section pt-100 pb-70">
        <div className="container">
          <SectionTitle tag="Our Services" title="Simple Freight Solutions For Your Cargo" />
          <div className="grid-3">
            {SERVICES.map((s) => (
              <div className="transport-card" key={s.title}>
                <div className="transport-img"><img src={s.img} alt={s.title} /></div>
                <div className="transport-text">
                  <Icon name={s.icon} className="transport-icon" />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Btn to={s.to} outline>Read More</Btn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FleetGallery />

      {/* "Why Businesses Choose" section with tracking box, hidden for now. Remove this comment wrapper to show it again.
      <section className="why-choose-section" style={{ backgroundImage: `url(${IMG.quotePort})` }}>
        <div className="why-grid">
          <div className="why-choose-img">
            <TrackBox />
          </div>
          <div className="why-choose-text">
            <SectionTitle
              title="Why Businesses Choose Ultimate Logistics Services?"
              text="You need a logistics partner who solves problems before they happen. We combine a modern fleet with real-time technology to guarantee safety. Here is why leading manufacturers across India trust us as the best transport company in India."
              center={false}
            />
            <div className="why-list">
              {WHY_CHOOSE.map((w) => (
                <div className="why-item" key={w.title} title={w.text}>
                  <Icon name={w.icon} className="why-icon" />
                  <h3>{w.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      <section className="industries-section pt-100 pb-70">
        <div className="container">
          <SectionTitle
            title="Industries We Serve"
            text="We currently power the supply chains for these major Indian sectors. But we don't stop here. Our fleet is built for total versatility to handle any commercial cargo. You build the product; we guarantee it reaches the market."
          />
          <IndustryOrbit />
        </div>
      </section>

      <section className="quote-section" style={{ backgroundImage: `url(${IMG.quotePort})` }}>
        <div className="lines" aria-hidden="true"><span /><span /><span /></div>
        <div className="container quote-grid">
          <div className="glass-card quote-card">
            <h2>Get A Free Custom Quote For Your Load</h2>
            <p>Our fleet is ready to roll when you are. Enter your shipment details below for an immediate response. We provide a clear cost breakdown to let you know exactly what you pay. Grow your business reach with the most trusted logistics company in India today!</p>
            <Btn to="/contact-us">Contact Us</Btn>
          </div>

          <div className="glass-card">
            <div className="glass-block lead">
              <h3>Service Areas</h3>
              <h4>Serving Every Pincode In India</h4>
              <p>Ultimate Logistics Services, India no 1 transport company, covers over 19,000+ pincodes across all 28 states, giving you direct access to customers in every corner of India without delays. Expand your business without limits.</p>
            </div>
            <div className="pill-tags">
              <Link to="/routes/delhi">Delhi</Link>
              <Link to="/routes/mukerian-to-mumbai-transport">Mumbai</Link>
              <Link to="/routes/noida">Noida</Link>
              <Link to="/routes/mukerian-to-bangalore-transport">Bangalore</Link>
            </div>
            <a href="#testimonial" className="glass-block">
              <h3><FaStar /> Trusted By India's Top Businesses</h3>
              <p>Hundreds of manufacturers rely on us daily. Read honest feedback about our speed, safety, and reliability.</p>
            </a>
            <Link to="/blogs" className="glass-block">
              <h3><FaNewspaper /> Latest Industry News</h3>
              <p>Get real-time updates on Indian transport regulations and see how our growing network benefits your bottom line.</p>
            </Link>
          </div>
        </div>
      </section>

      <Faq items={FAQS} />

      <Testimonials />

      <section className="company-section">
        <div className="container">
          <p className="company-title">Trusted by businesses across India</p>
          <div className="company-slider">
            {/* Logos are listed twice so the strip can loop without a gap. */}
            <div className="company-track">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map(([name, src, ratio], i) => (
                <div className="company-logo" key={i} aria-hidden={i >= CLIENT_LOGOS.length}>
                  <img src={src} alt={name} style={logoSize(ratio)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
