// Shared business details, menus and images used across the site.
// Edit this one file to change phone numbers, email, address or menu links.

import logo from '../assets/images/logoo.png';
import owner from '../assets/images/owner.webp';

export const IMG = {
  logo,
  about: owner, // Home page 'About Us' photo (optimised copy of owner.png)
  aboutPage: owner, // About page 'About Us' photo (same owner photo)
  hero: 'https://plus.unsplash.com/premium_photo-1681426710520-7c56c9f563d2?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  hero2: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  pageBg: 'https://images.unsplash.com/photo-1590079105886-f0f884bf4437?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0',
  quoteBg: 'https://rajindertransports.com/assets/img/quote-bg.jpg',
  quotePort: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  truck1: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  truck2: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  truck3: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  client: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
};

export const CONTACT = {
  email: 'info@ultimatelogisticsservices.com',
  phones: [
    { label: '77105 89837', tel: '+917710589837' },
  ],
  address: 'Mansar Mandir Road, Near Maini Di Chakki, Mukerian, District Hoshiarpur, Punjab 144211',
  mapEmbed:
    'https://maps.google.com/maps?q=Mansar%20Mandir%20Road%2C%20Mukerian%2C%20Hoshiarpur%2C%20Punjab%20144211&t=m&z=14&output=embed&iwloc=near',
  // Registered business details (as per GST registration).
  registered: {
    legalName: 'Rajinder Kumar Sharma',
    tradeName: 'Ultimate Logistics Services',
    address: 'Mansar Mandir Road, Near Maini Di Chakki, Mukerian, District Hoshiarpur, Punjab 144211',
  },
  youtubeId: 'MOuRWrKAE2Y',
  social: {
    facebook: 'https://www.facebook.com/rtsldh/',
    instagram: 'https://www.instagram.com/rajindertransportservice/',
    linkedin: 'https://www.linkedin.com/company/rajinder-transport-service/',
  },
};

export const SERVICE_LINKS = [
  { label: 'Full Truck Load', to: '/full-truck-load' },
  { label: 'Part Truck Load', to: '/part-truck-load' },
  { label: 'Door to Door Transport', to: '/door-to-door-transport' },
  { label: 'Mukerian Transport', to: '/transport-services-in-mukerian' },
  { label: 'Pan India Service', to: '/pan-india-transport-service' },
  { label: 'B2B Logistics', to: '/b2b-logistics-company-india' },
];

export const ROUTE_LINKS = [
  { label: 'Delhi Transport', to: '/routes/delhi' },
  { label: 'Noida Transport', to: '/routes/noida' },
  { label: 'Delhi to Mukerian', to: '/routes/delhi-to-mukerian-transport' },
  { label: 'Mukerian to Mumbai', to: '/routes/mukerian-to-mumbai-transport' },
  { label: 'Mukerian to Bangalore', to: '/routes/mukerian-to-bangalore-transport' },
  { label: 'Mukerian to Delhi', to: '/routes/mukerian-to-delhi-transport' },
  { label: 'Mukerian to Chennai', to: '/routes/mukerian-to-chennai-transport' },
  { label: 'Mukerian to Hyderabad', to: '/routes/mukerian-to-hyderabad-transport' },
  { label: 'Mukerian to Pune', to: '/routes/mukerian-to-pune-transport' },
];

export const WHY_CHOOSE = [
  { icon: 'map', title: 'Pan-India Delivery', text: "We deliver to every corner of India. Our wide operational reach allows clients to manage shipments across multiple locations through one reliable partner, ensuring consistent service standards and dependable delivery performance nationwide." },
  { icon: 'truck', title: 'Modern Fleet', text: 'We operate a fleet of performance-oriented Eicher trucks. These vehicles are famous for reliability and fuel efficiency on Indian roads. This specific choice reduces mechanical breakdowns and ensures your cargo keeps moving towards the destination without unexpected stops.' },
  { icon: 'gps', title: 'Live 24/7 GPS Tracking', text: "Every vehicle is enabled with GPS tracking to provide real-time visibility throughout the journey. You receive a live link to monitor your shipment's exact location at any moment. Plus, our control room watches every movement to prevent delays in the supply chain." },
  { icon: 'shield', title: 'Full Transit Insurance', text: 'Road transport carries risks, but you never lose money with us. We provide complete transit insurance for valuable shipments. If any damage occurs during the journey, our quick claim process ensures you get reimbursed immediately without long legal battles.' },
  { icon: 'b2b', title: 'Special B2B Focus', text: 'We specialize in commercial cargo for manufacturers and traders. So, we understand GST billing, e-way bills, and bulk transport requirements. Our entire system is designed to handle your raw materials and finished goods so your production line never stops.' },
  { icon: 'support', title: 'Dedicated Support Team', text: 'You speak to a real logistics expert. Our team is available around the clock to answer your calls. We solve problems proactively and keep you informed about your delivery status so you can focus on your core business.' },
];
