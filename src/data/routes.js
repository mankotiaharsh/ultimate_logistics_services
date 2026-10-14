import { IMG } from './site';

// Route pages use the same layout as service pages (src/pages/DetailPage.jsx).
// "ludhiana-to-mumbai-transport" has the full live-site content.
// The others are generated from a shared template — paste each live page's exact
// text into its own object (copy the Mumbai one as a pattern) to match it 1:1.

const MUMBAI = {
  seoTitle: 'Ludhiana to Mumbai Transport Service | Ultimate Logistics',
  title: 'Ludhiana to Mumbai Transport Service',
  crumb: 'Ludhiana to Mumbai',
  cardsTitle: 'Reliable Ludhiana to Mumbai Transport for Business Shipments',
  cards: [
    { img: IMG.truck1, title: 'FTL & PTL on Ludhiana–Mumbai Corridor', text: 'We operate full truck load and part load freight between Ludhiana and Mumbai via NH-44 and NH-48, covering approximately 1,480 km with planned transit times.' },
    { img: IMG.truck2, title: 'Secure Long-Haul Cargo Handling', text: 'Every shipment is loaded, secured, and monitored throughout the long-haul Ludhiana to Mumbai journey using strict handling protocols.' },
    { img: IMG.truck3, title: 'GPS Tracking on Every Shipment', text: 'Real-time GPS tracking ensures you know exactly where your cargo is at every point on the Ludhiana–Mumbai route.' },
  ],
  aboutTitle: 'Trusted Ludhiana to Mumbai Transport Since 2002',
  about: [
    "The Ludhiana to Mumbai corridor is one of India's most active freight routes, connecting Punjab's manufacturing heartland with Maharashtra's commercial capital. Ultimate Logistics Services operates this route with planned scheduling, experienced long-haul drivers, and GPS-monitored vehicles to ensure consistent performance.",
    "We handle FTL and PTL shipments from Ludhiana's industrial zones (Focal Point, Dhandari Kalan) to Mumbai's commercial hubs including Bhiwandi, Navi Mumbai, and Andheri MIDC. Transit insurance is available on all consignments.",
  ],
  mission: ['Our mission is to provide reliable and efficient Ludhiana to Mumbai freight solutions that help businesses maintain supply chain continuity. We prioritize safe cargo handling, on-time dispatch, and transparent communication at every stage.'],
  goal: ['Our goal is to be the preferred logistics partner for businesses shipping between Punjab and Maharashtra. We aim to improve transit times, increase fleet capacity on this corridor, and provide seamless end-to-end freight management.'],
  benefitsTitle: 'Key Benefits of Our Ludhiana to Mumbai Transport Service',
  benefitsIntro: [
    'The Ludhiana–Mumbai route spans approximately 1,480 km, requiring precise planning, experienced drivers, and reliable vehicles. Ultimate Logistics Services manages this corridor with disciplined operations and proactive monitoring.',
    'From textile manufacturers in Ludhiana to FMCG distributors in Mumbai, we serve a wide range of industries with dependable freight solutions that keep supply chains moving.',
  ],
  benefits: ['Planned long-haul routes via NH-44 and NH-48 for consistent transit times', 'Transit insurance coverage for all Ludhiana–Mumbai cargo', 'GPS-enabled vehicles for real-time shipment tracking', 'Transparent pricing with no hidden transport charges'],
  whyTitle: 'Why Businesses Choose Our Ludhiana to Mumbai Transport',
  whyIntro: 'Shipping from Ludhiana to Mumbai requires experienced drivers, well-maintained trucks, and reliable scheduling. Ultimate Logistics Services has operated this corridor since 2002, delivering consistent freight performance for manufacturers and distributors.',
  why: [
    ['Route Expertise', 'Our drivers know the Ludhiana–Mumbai corridor well, ensuring the fastest and safest route is chosen every time.'],
    ['On-Time Delivery', 'Planned scheduling and active monitoring ensure consistent and timely delivery performance on every shipment.'],
    ['Safe Cargo Handling', 'Every consignment is loaded and secured using strict safety protocols to prevent damage during the long-haul transit.'],
    ['Transparent Pricing', "Clear, GST-compliant quotes with no hidden charges. You always know exactly what you're paying before we move your cargo."],
    ['Live GPS Tracking', 'Track your shipment in real time. Our control team monitors every vehicle to prevent delays on the route.'],
    ['24/7 Support Team', 'Our logistics team is available around the clock to give you shipment updates and resolve any transit issues quickly.'],
  ],
  faqs: [
    ['Do you provide Ludhiana to Mumbai transport for B2B shipments?', 'Yes, we specialize in Ludhiana to Mumbai transport for manufacturers, traders, distributors, and other B2B businesses handling commercial and bulk cargo.'],
    ['What types of goods can you transport from Ludhiana to Mumbai?', 'We transport industrial goods, FMCG products, textiles, machinery, electronics, pharmaceuticals, and other commercial cargo with proper safety and handling procedures.'],
    ['How long does delivery take from Ludhiana to Mumbai?', 'Transit time from Ludhiana to Mumbai is typically 24–36 hours, depending on load type, route conditions, and pickup schedule.'],
    ['Is transit insurance available for this route?', 'Yes, we provide transit insurance to protect your goods against damage or loss during transportation on the Ludhiana–Mumbai corridor.'],
    ['Can I track my shipment in real time?', 'Absolutely. All shipments are GPS-tracked with 24/7 support so you can monitor your cargo throughout the journey.'],
    ['How do I get a freight quote for Ludhiana to Mumbai transport?', 'Simply share your pickup location, delivery address, load type, and weight. We provide transparent pricing with no hidden charges.'],
  ],
  related: ['/full-truck-load', '/part-truck-load', '/pan-india-transport-service', '/door-to-door-transport'],
  footerTitle: 'About Ludhiana to Mumbai Transport — Ultimate Logistics Services',
  footerText: 'Ultimate Logistics Services provides dedicated road freight from Ludhiana, Punjab to Mumbai, Maharashtra on a route covering approximately 1,480 km via National Highway 44 (Ludhiana–Delhi) and National Highway 48 (Delhi–Mumbai). Key stops include Ambala, Panipat, Delhi, Gurgaon, Jaipur, Ajmer, Vadodara, and Surat before reaching Mumbai. Delivery hubs in Mumbai include Bhiwandi (logistics hub), Navi Mumbai, Andheri MIDC, and Thane industrial area. Industries served on this corridor include textiles, hosiery, automotive parts, FMCG, pharmaceuticals, and industrial machinery. Transit time is typically 24–36 hours for FTL. All shipments are GPS-tracked with transit insurance. Call +91-99147-08369 for Ludhiana to Mumbai freight quotes.',
};

// Builds a page for a route between two cities (or a single city when `to` is empty).
function makeRoute(from, to) {
  const name = to ? `${from} to ${to}` : from;
  const corridor = to ? `${from}–${to}` : from;
  return {
    seoTitle: `${name} Transport Service | Ultimate Logistics`,
    title: `${name} Transport Service`,
    crumb: to ? name : `${from} Transport`,
    cardsTitle: `Reliable ${name} Transport for Business Shipments`,
    cards: [
      { img: IMG.truck1, title: `FTL & PTL ${to ? `on the ${corridor} Corridor` : `in ${from}`}`, text: `We operate full truck load and part load freight ${to ? `between ${from} and ${to}` : `to and from ${from}`} with planned transit times.` },
      { img: IMG.truck2, title: 'Secure Cargo Handling', text: `Every ${name} shipment is loaded, secured, and monitored throughout the journey using strict handling protocols.` },
      { img: IMG.truck3, title: 'GPS Tracking on Every Shipment', text: `Real-time GPS tracking ensures you know exactly where your cargo is at every point on the ${corridor} route.` },
    ],
    aboutTitle: `Trusted ${name} Transport Since 2002`,
    about: [`Ultimate Logistics Services operates ${to ? `the ${corridor} route` : `freight services for ${from}`} with planned scheduling, experienced drivers, and GPS-monitored vehicles to ensure consistent performance. Transit insurance is available on all consignments.`],
    mission: [`Our mission is to provide reliable and efficient ${name} freight solutions that help businesses maintain supply chain continuity. We prioritize safe cargo handling, on-time dispatch, and transparent communication at every stage.`],
    goal: [`Our goal is to be the preferred logistics partner for businesses shipping ${to ? `between ${from} and ${to}` : `in and around ${from}`}, with better transit times, more fleet capacity, and seamless end-to-end freight management.`],
    benefitsTitle: `Key Benefits of Our ${name} Transport Service`,
    benefitsIntro: [`Ultimate Logistics Services manages ${to ? 'this corridor' : 'this region'} with disciplined operations and proactive monitoring, serving a wide range of industries with dependable freight solutions.`],
    benefits: ['Planned routes for consistent transit times', `Transit insurance coverage for all ${corridor} cargo`, 'GPS-enabled vehicles for real-time shipment tracking', 'Transparent pricing with no hidden transport charges'],
    whyTitle: `Why Businesses Choose Our ${name} Transport`,
    whyIntro: '',
    why: MUMBAI.why.map(([t, d]) => [t, d.replace(/Ludhiana–Mumbai/g, corridor).replace(/long-haul /g, '')]),
    faqs: [
      [`Do you provide ${name} transport for B2B shipments?`, `Yes, we specialize in ${name} transport for manufacturers, traders, distributors, and other B2B businesses handling commercial and bulk cargo.`],
      [`What types of goods can you transport?`, 'We transport industrial goods, FMCG products, textiles, machinery, electronics, pharmaceuticals, and other commercial cargo with proper safety and handling procedures.'],
      ['Is transit insurance available for this route?', 'Yes, we provide transit insurance to protect your goods against damage or loss during transportation.'],
      ['Can I track my shipment in real time?', 'Absolutely. All shipments are GPS-tracked with 24/7 support so you can monitor your cargo throughout the journey.'],
      [`How do I get a freight quote for ${name} transport?`, 'Simply share your pickup location, delivery address, load type, and weight. We provide transparent pricing with no hidden charges.'],
    ],
    related: MUMBAI.related,
    footerTitle: `About ${name} Transport — Ultimate Logistics Services`,
    footerText: `Ultimate Logistics Services provides road freight ${to ? `from ${from} to ${to}` : `for ${from}`} with FTL, PTL, and door-to-door options. All shipments are GPS-tracked with transit insurance. Call +91-99147-08369 for ${name} freight quotes.`,
  };
}

export const ROUTES = {
  delhi: makeRoute('Delhi', ''),
  noida: makeRoute('Noida', ''),
  'delhi-to-ludhiana-transport': makeRoute('Delhi', 'Ludhiana'),
  'ludhiana-to-mumbai-transport': MUMBAI,
  'ludhiana-to-bangalore-transport': makeRoute('Ludhiana', 'Bangalore'),
  'ludhiana-to-delhi-transport': makeRoute('Ludhiana', 'Delhi'),
  'ludhiana-to-chennai-transport': makeRoute('Ludhiana', 'Chennai'),
  'ludhiana-to-hyderabad-transport': makeRoute('Ludhiana', 'Hyderabad'),
  'ludhiana-to-pune-transport': makeRoute('Ludhiana', 'Pune'),
};
