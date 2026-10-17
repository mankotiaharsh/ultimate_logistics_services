import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
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

// Pages that were renamed from Ludhiana to Mukerian; old links (with or without .php) redirect to the new ones.
const RENAMED = {
  '/transport-services-in-ludhiana': '/transport-services-in-mukerian',
  '/routes/delhi-to-ludhiana-transport': '/routes/delhi-to-mukerian-transport',
  '/routes/ludhiana-to-mumbai-transport': '/routes/mukerian-to-mumbai-transport',
  '/routes/ludhiana-to-bangalore-transport': '/routes/mukerian-to-bangalore-transport',
  '/routes/ludhiana-to-delhi-transport': '/routes/mukerian-to-delhi-transport',
  '/routes/ludhiana-to-chennai-transport': '/routes/mukerian-to-chennai-transport',
  '/routes/ludhiana-to-hyderabad-transport': '/routes/mukerian-to-hyderabad-transport',
  '/routes/ludhiana-to-pune-transport': '/routes/mukerian-to-pune-transport',
};
for (const [from, to] of Object.entries(RENAMED)) {
  LEGACY[from] = to;
  LEGACY[`${from}.php`] = to;
}

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
          <Route path="/our-team" element={<Team />} />
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
