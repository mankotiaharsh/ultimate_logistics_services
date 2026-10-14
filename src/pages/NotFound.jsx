import { Btn, useTitle } from '../components/Common';

export default function NotFound() {
  useTitle('Page Not Found | Ultimate Logistics Services');
  return (
    <section className="error-section pt-100 pb-100">
      <div className="container narrow center">
        <h2>404 — Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has moved.</p>
        <Btn to="/">Back to Home</Btn>
      </div>
    </section>
  );
}
