import { useEffect, useState } from 'react';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { Btn, SectionTitle } from './Common';
import heavyHaulVessel from '../assets/trucks/web/heavy-haul-vessel.webp';
import machineryTruck from '../assets/trucks/web/machinery-truck.webp';
import machineryYard from '../assets/trucks/web/machinery-yard.webp';
import oversizedVessel from '../assets/trucks/web/oversized-vessel.webp';

// Optimised copies live in assets/trucks/web/ (the original PNGs are kept alongside but not loaded).
// Each photo carries its own text and points, shown on the left while that photo is active.
// `pos` sets which part of the photo stays in view when it is cropped to fit.
const PHOTOS = [
  {
    src: heavyHaulVessel, pos: 'center 55%',
    tag: 'Over-Dimensional Cargo',
    title: 'Heavy Haul Vessel Transport',
    text: 'Large cylindrical vessels and tanks need a trailer, a route and a crew that can handle their size. We plan each move around the load, so it reaches site without damage or delay.',
    points: ['Route survey for wide and long loads', 'Load chained and braced at multiple points', 'Escort and timing planned for safe transit'],
  },
  {
    src: machineryTruck, pos: 'center 60%',
    tag: 'Heavy Machinery',
    title: 'Industrial Machinery Shipment',
    text: 'Gearboxes, motors and plant equipment are heavy, expensive and easy to damage. We secure every unit separately so nothing shifts between your factory and the destination.',
    points: ['Each machine chained and blocked individually', 'Careful loading to protect painted and fragile parts', 'Ideal for factory relocations and new installations'],
  },
  {
    src: machineryYard, pos: 'center 55%',
    tag: 'Multi-Axle Trailer',
    title: 'Machinery Loaded on Multi-Axle Trailer',
    text: 'For the heaviest equipment, multi-axle trailers spread the weight across more wheels for a stable, road-safe journey, even on long routes.',
    points: ['Multi-axle trailers for very heavy single units', 'Weight spread evenly for safe road movement', 'Suited to long-distance and inter-state moves'],
  },
  {
    src: oversizedVessel, pos: 'center 62%',
    tag: 'Project Cargo',
    title: 'Oversized Industrial Vessel on the Move',
    text: 'Project cargo for refineries, plants and construction sites runs on tight schedules. We coordinate pickup, transit and delivery so your project stays on track.',
    points: ['Coordinated pickup and site delivery', 'Live GPS tracking throughout the journey', 'Transit insurance available for high-value cargo'],
  },
];

const ROTATE_MS = 5000;

export default function FleetGallery() {
  const [active, setActive] = useState(0);
  const [viewer, setViewer] = useState(-1);
  const go = (setter, d) => setter((i) => (i + d + PHOTOS.length) % PHOTOS.length);

  // Auto-advance the featured photo (stops only while the full-screen viewer is open).
  useEffect(() => {
    if (viewer >= 0) return undefined;
    const t = setTimeout(() => go(setActive, 1), ROTATE_MS);
    return () => clearTimeout(t);
  }, [active, viewer]);

  // Keyboard controls and scroll lock while the full-screen viewer is open.
  useEffect(() => {
    if (viewer < 0) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setViewer(-1);
      if (e.key === 'ArrowRight') go(setViewer, 1);
      if (e.key === 'ArrowLeft') go(setViewer, -1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [viewer]);

  return (
    <section className="fleet-gallery pt-100 pb-100">
      <div className="container showcase">
        <div className="showcase-text">
          <SectionTitle tag="Our Work" title="Heavy & Oversized Cargo, Delivered Safely" center={false} />

          {/* Details for the active photo; `key` replays the slide-in animation on each change. */}
          <div className="showcase-detail" key={active}>
            <span className="showcase-tag">{PHOTOS[active].tag}</span>
            <h3>{PHOTOS[active].title}</h3>
            <p>{PHOTOS[active].text}</p>
            <ul className="showcase-points">
              {PHOTOS[active].points.map((pt) => <li key={pt}><FaCheckCircle /> {pt}</li>)}
            </ul>
          </div>

          {/* "Get a Quote" button, hidden for now. Remove this comment wrapper to show it again.
          <Btn to="/contact-us">Get a Quote</Btn>
          */}
        </div>

        <div className="showcase-media">
          <button className="showcase-main" onClick={() => setViewer(active)} aria-label={`View photo full screen: ${PHOTOS[active].title}`}>
            {PHOTOS.map((p, i) => (
              <img
                key={p.title}
                src={p.src}
                alt={p.title}
                className={i === active ? 'active' : ''}
                style={{ objectPosition: p.pos }}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <span className="showcase-count">{String(active + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}</span>
            <span className="gallery-zoom" aria-hidden="true"><FaExpand /></span>
            <span className="showcase-progress" key={`p${active}`} style={{ animationDuration: `${ROTATE_MS}ms` }} />
          </button>

          <div className="showcase-thumbs">
            {PHOTOS.map((p, i) => (
              <button
                key={p.title}
                className={i === active ? 'active' : ''}
                onClick={() => setActive(i)}
                aria-label={`Show photo: ${p.title}`}
                aria-current={i === active}
              >
                <img src={p.src} alt="" style={{ objectPosition: p.pos }} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {viewer >= 0 && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={PHOTOS[viewer].title} onClick={() => setViewer(-1)}>
          <button className="lb-close" onClick={() => setViewer(-1)} aria-label="Close"><FaTimes /></button>
          <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); go(setViewer, -1); }} aria-label="Previous photo"><FaChevronLeft /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={PHOTOS[viewer].src} alt={PHOTOS[viewer].title} />
            <figcaption>
              <span>{PHOTOS[viewer].title}</span>
              <small>{viewer + 1} / {PHOTOS.length}</small>
            </figcaption>
          </figure>
          <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); go(setViewer, 1); }} aria-label="Next photo"><FaChevronRight /></button>
        </div>
      )}
    </section>
  );
}
