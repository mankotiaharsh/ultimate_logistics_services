import { Link, useParams } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { BLOGS } from '../data/blogs';
import { PageTitle, useTitle } from '../components/Common';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOGS.find((b) => b.slug === slug);
  useTitle(post ? `${post.title} | Ultimate Logistics Services` : 'Blog');
  if (!post) return <NotFound />;

  return (
    <>
      <PageTitle title={post.title} crumb="Blog" />
      <section className="blog-details pt-100 pb-100">
        <div className="container blog-layout">
          <article>
            <img src={post.img} alt={post.title} className="blog-hero" />
            <p className="blog-meta"><FaCalendarAlt /> {post.date} · {post.category}</p>
            {post.body.length > 0
              ? post.body.map((p, i) => <p key={i}>{p}</p>)
              : (
                <>
                  <p>{post.excerpt}</p>
                  <p className="form-note">
                    Add this article's full text in <code>src/data/blogs.js</code>. Meanwhile, read it on the{' '}
                    <a href={`https://rajindertransports.com/blog.php?slug=${post.slug}`} target="_blank" rel="noreferrer">live site</a>.
                  </p>
                </>
              )}
          </article>
          <aside className="sidebar">
            <h3>Recent Posts</h3>
            <ul>
              {BLOGS.filter((b) => b.slug !== slug).map((b) => (
                <li key={b.slug}><Link to={`/blog/${b.slug}`}>{b.title}</Link><small>{b.date}</small></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
