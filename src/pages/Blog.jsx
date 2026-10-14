import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { BLOGS } from '../data/blogs';
import { PageTitle, useTitle } from '../components/Common';

export default function Blog() {
  useTitle('Blog — Transport & Logistics Insights | Ultimate Logistics Services');
  return (
    <>
      <PageTitle title="Our Blog" crumb="Blog" />
      <section className="blog-section pt-100 pb-70">
        <div className="container">
          <div className="blog-filter">
            <span className="active">All Posts</span>
            <span>General ({BLOGS.length})</span>
          </div>
          <div className="grid-3">
            {BLOGS.map((b) => (
              <div className="blog-card" key={b.slug}>
                <Link to={`/blog/${b.slug}`} className="blog-img"><img src={b.img} alt={b.title} /></Link>
                <div className="blog-text">
                  <span className="blog-cat">{b.category}</span>
                  <h3><Link to={`/blog/${b.slug}`}>{b.title}</Link></h3>
                  <p>{b.excerpt}</p>
                  <div className="blog-meta">
                    <span><FaCalendarAlt /> {b.date}</span>
                    <Link to={`/blog/${b.slug}`}>Read More <FaArrowRight /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
