import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {showTop && (
        <button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
