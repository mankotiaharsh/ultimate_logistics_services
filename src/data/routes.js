import { IMG } from './site';

// Route pages use the same layout as service pages (src/pages/DetailPage.jsx).
// Pages are titled by destination (city + state). "mukerian-to-mumbai-transport" has the full written content.
// The others are generated from a shared template — paste each live page's exact
// text into its own object (copy the Mumbai one as a pattern) to match it 1:1.

const MUMBAI = {
  seoTitle: 'Mumbai Transport Service | Punjab to Maharashtra | Ultimate Logistics',
  title: 'Mumbai Transport Service',
  crumb: 'Mumbai, Maharashtra',
  tagline: 'Reliable road freight from Punjab to Mumbai, Maharashtra: full loads, part loads and door-to-door delivery.',
  cardsTitle: 'Reliable Mumbai Transport for Business Shipments',
  cards: [
    { img: IMG.truck1, title: 'FTL & PTL on Mukerian–Mumbai Corridor', text: 'We operate full truck load and part load freight between Mukerian and Mumbai via NH-44 and NH-48, covering over 1,600 km with planned transit times.' },
    { img: IMG.truck2, title: 'Secure Long-Haul Cargo Handling', text: 'Every shipment is loaded, secured, and monitored throughout the long-haul Mukerian to Mumbai journey using strict handling protocols.' },
    { img: IMG.truck3, title: 'GPS Tracking on Every Shipment', text: 'Real-time GPS tracking ensures you know exactly where your cargo is at every point on the Mukerian–Mumbai route.' },
  ],
  aboutTitle: 'Trusted Mumbai Transport Since 2018',
  about: [
    "The Mukerian to Mumbai corridor is one of India's most active freight routes, connecting Punjab's manufacturing heartland with Maharashtra's commercial capital. Ultimate Logistics Services operates this route with planned scheduling, experienced long-haul drivers, and GPS-monitored vehicles to ensure consistent performance.",
    "We handle FTL and PTL shipments from Mukerian and across the Hoshiarpur district to Mumbai's commercial hubs including Bhiwandi, Navi Mumbai, and Andheri MIDC. Transit insurance is available on all consignments.",
  ],
  mission: ['Our mission is to provide reliable and efficient Mukerian to Mumbai freight solutions that help businesses maintain supply chain continuity. We prioritize safe cargo handling, on-time dispatch, and transparent communication at every stage.'],
  goal: ['Our goal is to be the preferred logistics partner for businesses shipping between Punjab and Maharashtra. We aim to improve transit times, increase fleet capacity on this corridor, and provide seamless end-to-end freight management.'],
  benefitsTitle: 'Key Benefits of Our Mumbai Transport Service',
  benefitsIntro: [
    'The Mukerian–Mumbai route spans over 1,600 km, requiring precise planning, experienced drivers, and reliable vehicles. Ultimate Logistics Services manages this corridor with disciplined operations and proactive monitoring.',
    'From manufacturers in Punjab to FMCG distributors in Mumbai, we serve a wide range of industries with dependable freight solutions that keep supply chains moving.',
  ],
  benefits: ['Planned long-haul routes via NH-44 and NH-48 for consistent transit times', 'Transit insurance coverage for all Mukerian–Mumbai cargo', 'GPS-enabled vehicles for real-time shipment tracking', 'Transparent pricing with no hidden transport charges'],
  whyTitle: 'Why Businesses Choose Our Mumbai Transport',
  whyIntro: 'Shipping from Mukerian to Mumbai requires experienced drivers, well-maintained trucks, and reliable scheduling. Ultimate Logistics Services has operated this corridor since 2018, delivering consistent freight performance for manufacturers and distributors.',
  why: [
    ['Route Expertise', 'Our drivers know the Mukerian–Mumbai corridor well, ensuring the fastest and safest route is chosen every time.'],
    ['On-Time Delivery', 'Planned scheduling and active monitoring ensure consistent and timely delivery performance on every shipment.'],
    ['Safe Cargo Handling', 'Every consignment is loaded and secured using strict safety protocols to prevent damage during the long-haul transit.'],
    ['Transparent Pricing', "Clear, GST-compliant quotes with no hidden charges. You always know exactly what you're paying before we move your cargo."],
    ['Live GPS Tracking', 'Track your shipment in real time. Our control team monitors every vehicle to prevent delays on the route.'],
    ['24/7 Support Team', 'Our logistics team is available around the clock to give you shipment updates and resolve any transit issues quickly.'],
  ],
  faqs: [
    ['Do you provide Mukerian to Mumbai transport for B2B shipments?', 'Yes, we specialize in Mukerian to Mumbai transport for manufacturers, traders, distributors, and other B2B businesses handling commercial and bulk cargo.'],
    ['What types of goods can you transport from Mukerian to Mumbai?', 'We transport industrial goods, FMCG products, textiles, machinery, electronics, pharmaceuticals, and other commercial cargo with proper safety and handling procedures.'],
    ['How long does delivery take from Mukerian to Mumbai?', 'Transit time from Mukerian to Mumbai is typically 24–36 hours, depending on load type, route conditions, and pickup schedule.'],
    ['Is transit insurance available for this route?', 'Yes, we provide transit insurance to protect your goods against damage or loss during transportation on the Mukerian–Mumbai corridor.'],
    ['Can I track my shipment in real time?', 'Absolutely. All shipments are GPS-tracked with 24/7 support so you can monitor your cargo throughout the journey.'],
    ['How do I get a freight quote for Mukerian to Mumbai transport?', 'Simply share your pickup location, delivery address, load type, and weight. We provide transparent pricing with no hidden charges.'],
  ],
  related: ['/full-truck-load', '/part-truck-load', '/pan-india-transport-service', '/door-to-door-transport'],
  footerTitle: 'About Our Mumbai Transport Service — Ultimate Logistics Services',
  footerText: 'Ultimate Logistics Services provides dedicated road freight from Mukerian, Punjab to Mumbai, Maharashtra on a route covering over 1,600 km via National Highway 44 (Mukerian–Delhi) and National Highway 48 (Delhi–Mumbai). Key stops include Jalandhar, Ambala, Panipat, Delhi, Gurgaon, Jaipur, Ajmer, Vadodara, and Surat before reaching Mumbai. Delivery hubs in Mumbai include Bhiwandi (logistics hub), Navi Mumbai, Andheri MIDC, and Thane industrial area. Industries served on this corridor include textiles, automotive parts, FMCG, pharmaceuticals, and industrial machinery. Transit time is typically 24–36 hours for FTL. All shipments are GPS-tracked with transit insurance. Call +91 77105 89837 for Mukerian to Mumbai freight quotes.',
};

// Builds a destination page: `city` is where goods are delivered, `region` its state, `from` where they ship from.
function makeRoute(city, region, from = 'Punjab') {
  const place = region ? `${city}, ${region}` : city;
  const corridor = `${from}–${city}`;
  return {
    seoTitle: `${city} Transport Service${region ? ` | ${from} to ${region}` : ''} | Ultimate Logistics`,
    title: `${city} Transport Service`,
    crumb: place,
    tagline: `Reliable road freight from ${from} to ${place}: full loads, part loads and door-to-door delivery.`,
    cardsTitle: `Reliable ${city} Transport for Business Shipments`,
    cards: [
      { img: IMG.truck1, title: `FTL & PTL to ${city}`, text: `Full truck load and part load freight from ${from} to ${place}, with planned pickup and transit times.` },
      { img: IMG.truck2, title: 'Secure Cargo Handling', text: `Every shipment to ${city} is loaded, secured, and monitored throughout the journey using strict handling protocols.` },
      { img: IMG.truck3, title: 'GPS Tracking on Every Shipment', text: `Real-time GPS tracking shows exactly where your cargo is at every point on the way to ${city}.` },
    ],
    aboutTitle: `Trusted ${city} Transport Since 2018`,
    about: [`Ultimate Logistics Services moves goods from ${from} to ${place} with planned scheduling, experienced drivers, and GPS-monitored vehicles for consistent, on-time delivery. Transit insurance is available on all consignments.`],
    mission: [`Our mission is to give businesses shipping to ${city} reliable, efficient freight that keeps their supply chain running, with safe handling, on-time dispatch, and clear communication at every stage.`],
    goal: [`Our goal is to be the preferred logistics partner for businesses shipping to ${place}, with faster transit times, more fleet capacity, and seamless end-to-end freight management.`],
    benefitsTitle: `Key Benefits of Our ${city} Transport Service`,
    benefitsIntro: [`We manage every ${city} shipment with disciplined operations and proactive monitoring, serving a wide range of industries with dependable freight solutions.`],
    benefits: ['Planned routes for consistent transit times', `Transit insurance for all cargo to ${city}`, 'GPS-enabled vehicles for real-time shipment tracking', 'Transparent pricing with no hidden transport charges'],
    whyTitle: `Why Businesses Choose Our ${city} Transport`,
    whyIntro: '',
    why: MUMBAI.why.map(([t, d]) => [t, d.replace(/the Mukerian–Mumbai corridor/g, `the ${corridor} route`).replace(/long-haul /g, '')]),
    faqs: [
      [`Do you provide ${city} transport for B2B shipments?`, `Yes, we specialize in transport to ${place} for manufacturers, traders, distributors, and other B2B businesses handling commercial and bulk cargo.`],
      ['What types of goods can you transport?', 'We transport industrial goods, FMCG products, textiles, machinery, electronics, pharmaceuticals, and other commercial cargo with proper safety and handling procedures.'],
      ['Is transit insurance available for this route?', 'Yes, we provide transit insurance to protect your goods against damage or loss during transportation.'],
      ['Can I track my shipment in real time?', 'Absolutely. All shipments are GPS-tracked with 24/7 support so you can monitor your cargo throughout the journey.'],
      [`How do I get a freight quote for ${city}?`, 'Simply share your pickup location, delivery address, load type, and weight. We provide transparent pricing with no hidden charges.'],
    ],
    related: MUMBAI.related,
    footerTitle: `About Our ${city} Transport Service — Ultimate Logistics Services`,
    footerText: `Ultimate Logistics Services provides road freight from ${from} to ${place} with FTL, PTL, and door-to-door options. All shipments are GPS-tracked with transit insurance. Call +91 77105 89837 for ${city} freight quotes.`,
  };
}

export const ROUTES = {
  delhi: makeRoute('Delhi', 'Delhi NCR'),
  noida: makeRoute('Noida', 'Uttar Pradesh'),
  'delhi-to-mukerian-transport': makeRoute('Punjab', '', 'Delhi NCR'),
  'mukerian-to-mumbai-transport': MUMBAI,
  'mukerian-to-bangalore-transport': makeRoute('Bangalore', 'Karnataka'),
  'mukerian-to-chennai-transport': makeRoute('Chennai', 'Tamil Nadu'),
  'mukerian-to-hyderabad-transport': makeRoute('Hyderabad', 'Telangana'),
  'mukerian-to-pune-transport': makeRoute('Pune', 'Maharashtra'),
};
