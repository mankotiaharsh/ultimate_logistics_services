import { PageTitle, useTitle } from '../components/Common';

// Placeholder pages: paste your live Privacy Policy and Terms of Service text into these arrays.
const TEXT = {
  privacy: { title: 'Privacy Policy', body: ['Paste the Privacy Policy text from rajindertransports.com/privacy-policy.php here.'] },
  terms: { title: 'Terms of Service', body: ['Paste the Terms of Service text from rajindertransports.com/terms-of-service.php here.'] },
};

export default function Legal({ type }) {
  const t = TEXT[type];
  useTitle(`${t.title} | Ultimate Logistics Services`);
  return (
    <>
      <PageTitle title={t.title} />
      <section className="pt-100 pb-100">
        <div className="container narrow">
          {t.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>
    </>
  );
}
