import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import DetailPage from './pages/DetailPage';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import { SERVICES } from './data/services';
import { ROUTES } from './data/routes';

// Old .php links from the live site redirect to the new clean URLs.
const LEGACY = {
  '/index.php': '/',
  '/about-us.php': '/about-us',
  '/contact-us.php': '/contact-us',
  '/blogs.php': '/blogs',
  '/privacy-policy.php': '/privacy-policy',
  '/terms-of-service.php': '/terms-of-service',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<Legal type="privacy" />} />
          <Route path="/terms-of-service" element={<Legal type="terms" />} />

          {Object.entries(SERVICES).map(([slug, data]) => (
            <Route key={slug} path={`/${slug}`} element={<DetailPage data={data} />} />
          ))}
          {Object.entries(ROUTES).map(([slug, data]) => (
            <Route key={slug} path={`/routes/${slug}`} element={<DetailPage data={data} />} />
          ))}

          {Object.entries(LEGACY).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          {Object.keys(SERVICES).map((slug) => (
            <Route key={`${slug}-php`} path={`/${slug}.php`} element={<Navigate to={`/${slug}`} replace />} />
          ))}
          {Object.keys(ROUTES).map((slug) => (
            <Route key={`r-${slug}-php`} path={`/routes/${slug}.php`} element={<Navigate to={`/routes/${slug}`} replace />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
