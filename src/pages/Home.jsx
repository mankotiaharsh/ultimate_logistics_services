import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaNewspaper } from 'react-icons/fa';
import { IMG, CONTACT, WHY_CHOOSE } from '../data/site';
import Icon from '../components/Icon';
import FleetGallery from '../components/FleetGallery';
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

const INDUSTRIES_LEFT = [['textile', 'Textiles And Garments'], ['auto', 'Automotive and Spare Parts'], ['machine', 'Heavy Machinery'], ['fmcg', 'FMCG And Retail Distribution']];
const INDUSTRIES_RIGHT = [['steel', 'Iron, Steel, and Construction'], ['pharma', 'Pharmaceuticals'], ['electronics', 'Electronics'], ['paper', 'Paper And Packaging']];

const FAQS = [
  ['Which locations does Ultimate Logistics Services cover in India?', 'We deliver to over 19,000 pincodes across all 28 states, covering major metros like Delhi, Mumbai, Bangalore, Chennai, and Hyderabad as well as remote villages. Established in 2018 and based in Mukerian, Punjab, we ensure your goods reach any destination in India safely and on time.'],
  ['Do you offer insurance for goods during transit?', 'Yes, Ultimate Logistics Services provides complete transit insurance for all B2B shipments. The coverage protects your cargo against accidents, theft, or damage during road transport. Insurance details are shared transparently at the time of booking so you always know your goods are financially protected.'],
  ['Can you transport perishable or fragile commercial goods?', 'Absolutely. We specialise in handling sensitive commercial cargo including pharmaceuticals, electronics, FMCG products, and fragile industrial equipment. Our fleet uses sealed containers and experienced drivers who follow strict handling protocols, ensuring safe delivery across India without damage or spoilage.'],
  ['How do I get a price quote for my cargo?', 'Simply call us at 77105 89837 or email info@ultimatelogisticsservices.com for a quick rate. Share your pickup location, destination, load type, and approximate weight — we will provide a transparent, route-specific price with no hidden charges, typically within a few hours.'],
];

const CLIENT_LOGOS = [
  ['Amazon', 'https://img.icons8.com/color/120/amazon.png'],
  ['FedEx', 'https://img.icons8.com/color/120/fedex.png'],
  ['DHL', 'https://cdn-icons-png.flaticon.com/512/5968/5968527.png'],
  ['UPS', 'https://img.icons8.com/color/120/ups.png'],
  ['Walmart', 'https://img.icons8.com/color/120/walmart.png'],
];

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
          'Ultimate Logistics Services began with a single truck and a clear promise: deliver every shipment safely and on time. Today, with a modern fleet and a dedicated team, we are one of the most trusted logistics companies in India, and we still follow that same commitment.',
          "We know that a customer's reputation and responsibility are on the line with every shipment. That's why we handle your cargo with the utmost care and respect. Our central hub monitors shipments 24/7 to prevent delays before they happen. Choose our safe, efficient, and nationwide network for all your logistics needs!",
        ]}
        mission={[
          'Our mission is to make logistics easy, reliable, and stress-free for all of our customers. We do this by keeping high standards in all areas of our service, such as vehicle maintenance, staff training, and adapting to new technologies.',
          'Every package you entrust to us represents your capital. We protect that capital by making sure there is no theft or loss during transit. Our ultimate aim is to be the service you choose without a second thought. Consistency is what makes a service trustworthy, and trust is the basis of everything we do.',
        ]}
        goal={[
          "Our goal is to become India's top choice for damage-free transport. We want to grow our network, improve our operational systems, and serve more businesses with the same dedication that helped us build our reputation. Every successful delivery brings us closer to this goal.",
          'We also pay equal attention to your growth at the same time. When your business expands, we succeed. We are committed to building long-term partnerships by ensuring that every single delivery, no matter how big or small, reinforces your confidence in choosing us as your primary transport service provider.',
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
          <div className="industries-grid">
            <div className="industry-col">
              {INDUSTRIES_LEFT.map(([icon, name]) => (
                <div className="industry" key={name}><Icon name={icon} /> <h3>{name}</h3></div>
              ))}
            </div>
            <div className="industry-img"><img src={IMG.truck2} alt="Industries We Serve" /></div>
            <div className="industry-col">
              {INDUSTRIES_RIGHT.map(([icon, name]) => (
                <div className="industry" key={name}><Icon name={icon} /> <h3>{name}</h3></div>
              ))}
            </div>
          </div>
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
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map(([name, src], i) => (
                <div className="company-logo" key={i} aria-hidden={i >= CLIENT_LOGOS.length}>
                  <img src={src} alt={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
