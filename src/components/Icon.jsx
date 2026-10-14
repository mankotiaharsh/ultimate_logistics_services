import {
  FaTruck, FaMapMarkedAlt, FaSatelliteDish, FaShieldAlt, FaHandshake, FaHeadset,
  FaTshirt, FaCar, FaCogs, FaShoppingCart, FaIndustry, FaPills, FaMicrochip, FaBoxOpen,
} from 'react-icons/fa';

const MAP = {
  truck: FaTruck, map: FaMapMarkedAlt, gps: FaSatelliteDish, shield: FaShieldAlt,
  b2b: FaHandshake, support: FaHeadset, textile: FaTshirt, auto: FaCar, machine: FaCogs,
  fmcg: FaShoppingCart, steel: FaIndustry, pharma: FaPills, electronics: FaMicrochip, paper: FaBoxOpen,
};

export default function Icon({ name, ...props }) {
  const C = MAP[name] || FaTruck;
  return <C {...props} />;
}

// Cycles through icons for lists (why-choose cards on detail pages).
export const CYCLE = ['truck', 'shield', 'map', 'b2b', 'support', 'gps'];
