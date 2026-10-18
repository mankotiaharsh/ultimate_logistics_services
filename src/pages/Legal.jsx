import { Link } from 'react-router-dom';
import { useTitle } from '../components/Common';
import { CONTACT } from '../data/site';

// Each page is a list of sections. A section can have paragraphs (`p`) and a bullet list (`list`),
// and `after` for paragraphs that follow the list.
const PRIVACY = {
  title: 'Privacy Policy',
  updated: 'October 2026',
  intro: [
    `${CONTACT.registered.tradeName} ("we", "us", or "our") is committed to protecting the privacy and security of the personal information you share with us. This Privacy Policy explains what information we collect through this website, how we use it, and your rights regarding that information.`,
  ],
  sections: [
    {
      h: '1. Information We Collect',
      p: ['This website does not have sign-up forms, user accounts or online payments. We only collect personal information that you choose to share with us when you contact us:'],
      list: [
        'Contact details: your name, phone number, email address and company name, when you call or email us.',
        'Shipment details: pickup and delivery locations, type of goods, load size and preferred dates that you share to get a quote.',
        'Communications: the content of the emails and messages you send us.',
      ],
      after: ['Like most websites, our hosting provider may automatically record basic technical information (such as your IP address, browser type and the pages requested) in server logs, for security and to keep the website running.'],
    },
    {
      h: '2. How We Use Your Information',
      p: ['We use the information you share with us to:'],
      list: [
        'Respond to your transport and logistics enquiries and prepare quotes.',
        'Arrange, carry out and track the shipments you book with us.',
        'Send you service-related updates you have requested, such as shipment status.',
        'Prepare invoices and keep business records.',
        'Comply with applicable legal and tax obligations.',
      ],
      after: ['We do not sell, rent, or trade your personal information to third parties for marketing purposes.'],
    },
    {
      h: '3. Cookies and Analytics',
      p: [
        'This website does not use cookies for tracking or advertising, and does not currently use analytics tools such as Google Analytics.',
        'If we add analytics or similar tools in the future, we will update this Privacy Policy to explain what is collected and how you can opt out.',
      ],
    },
    {
      h: '4. Data Sharing',
      p: ['We share your information only when it is needed to provide our services or required by law:'],
      list: [
        'Drivers, transport partners and service providers involved in carrying out your shipment, limited to the details they need (for example, pickup and delivery contact).',
        'Our email, phone and website hosting providers, which process data on our behalf.',
        'Government and regulatory authorities, where required by law (for example, for GST and e-way bill compliance) or legal process.',
      ],
    },
    {
      h: '5. Data Retention',
      p: ['We keep enquiry details for up to 24 months from the date you contact us, after which they are deleted. Records of shipments and invoices are kept for as long as required under applicable tax and accounting laws.'],
    },
    {
      h: '6. Data Security',
      p: ['We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction. Our website uses HTTPS encryption for data in transit.'],
    },
    {
      h: '7. Your Rights',
      p: ['Depending on applicable law, you may have the right to:'],
      list: [
        'Access the personal information we hold about you.',
        'Correct inaccurate or incomplete information.',
        'Request deletion of your personal information.',
        'Withdraw consent at any time where we rely on your consent.',
        'Raise a grievance about how we handle your information.',
      ],
      after: ['To exercise any of these rights, please contact us using the details below.'],
    },
    {
      h: '8. Third-Party Links',
      p: ['Our website may contain links to third-party websites, such as maps. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.'],
    },
    {
      h: '9. Changes to This Policy',
      p: ['We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will show when it was last changed. We encourage you to review this page periodically.'],
    },
  ],
};

const TERMS = {
  title: 'Terms of Service',
  updated: 'October 2026',
  intro: [
    `Please read these Terms of Service ("Terms") carefully before using this website, operated by ${CONTACT.registered.tradeName} ("we", "us", or "our"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use the website.`,
  ],
  sections: [
    {
      h: '1. Use of the Website',
      p: ['You may use our website for lawful purposes only. You agree not to:'],
      list: [
        'Use the website in any way that violates applicable local, national, or international laws or regulations.',
        'Send any unsolicited or unauthorised advertising or promotional material (spam).',
        'Attempt to gain unauthorised access to any part of the website, server, or connected systems.',
        'Introduce viruses, trojans, worms, or other malicious or technologically harmful material.',
        "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.",
      ],
    },
    {
      h: '2. Intellectual Property',
      p: [`All content on this website, including text, graphics, logos, images, and software, is the property of ${CONTACT.registered.tradeName} or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`],
    },
    {
      h: '3. Service Information',
      p: [
        'The information on this website about our transport and logistics services is for general informational purposes only. While we strive to keep it accurate and up to date, we make no representations or warranties of any kind, express or implied, about its completeness, accuracy, reliability, or suitability.',
        'Actual service availability, pricing, transit times, and coverage areas are subject to confirmation at the time of booking. Please contact us directly for a quotation tailored to your shipment.',
      ],
    },
    {
      h: '4. Quotations and Bookings',
      p: [`Any quotation provided by ${CONTACT.registered.tradeName} by email or phone is valid for the period stated in it and is subject to:`],
      list: [
        'Availability of vehicles and routes at the time of booking.',
        'Verification of cargo details (weight, dimensions, and nature of goods).',
        'Applicable government taxes and surcharges in force at the time of shipment.',
      ],
      after: ['A booking is confirmed only upon written acceptance and receipt of the agreed advance payment (where applicable).'],
    },
    {
      h: '5. Limitation of Liability',
      p: [`To the fullest extent permitted by applicable law, ${CONTACT.registered.tradeName} shall not be liable for any:`],
      list: [
        'Indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website.',
        'Loss of data, profits, or business opportunities resulting from use of the website.',
        'Damage caused by events beyond our reasonable control (force majeure), including natural disasters, strikes, government actions, or road closures.',
      ],
      after: ['Our liability in relation to transport services is governed by the applicable consignment note and the Carriage by Road Act, 2007 (India) and the rules made under it.'],
    },
    {
      h: '6. Third-Party Links',
      p: ['Our website may contain links to third-party websites, such as maps, for your convenience. We do not control or endorse these sites and accept no responsibility for their content, privacy policies, or practices. Visiting any linked site is at your own risk.'],
    },
    {
      h: '7. Enquiries and Communications',
      p: ['When you contact us by phone or email with an enquiry, you consent to us contacting you by phone or email to respond to it and to arrange your shipment. We will not use your contact details for unsolicited marketing without your prior consent. Please see our Privacy Policy for how we handle your information.'],
    },
    {
      h: '8. Changes to These Terms',
      p: ['We may update or modify these Terms at any time. Changes take effect as soon as they are posted on this website, and the "Last updated" date at the top of this page will reflect them. Your continued use of the website after changes are posted means you accept the revised Terms.'],
    },
    {
      h: '9. Governing Law',
      p: ['These Terms are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts having jurisdiction over Mukerian, District Hoshiarpur, Punjab, India.'],
    },
  ],
};

const TEXT = { privacy: PRIVACY, terms: TERMS };

// Closing contact section, shared by both pages.
const CONTACT_TEXT = {
  privacy: {
    intro: 'If you have any questions about this Privacy Policy or how we handle your information, please contact us:',
    outro: 'This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, and the rules made under them.',
  },
  terms: {
    intro: 'If you have any questions about these Terms of Service, please contact us:',
    outro: `These Terms of Service are governed by the laws of India. ${CONTACT.registered.tradeName} is registered and operating from Mukerian, District Hoshiarpur, Punjab, India.`,
  },
};

export default function Legal({ type }) {
  const t = TEXT[type];
  useTitle(`${t.title} | Ultimate Logistics Services`);
  return (
    <>
      {/* Simple text header (no photo banner) for the legal pages */}
      <header className="legal-head">
        <div className="container narrow">
          <h1>{t.title}</h1>
          <nav className="legal-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> {t.title}
          </nav>
        </div>
      </header>

      <section className="legal-section pb-100">
        <div className="container narrow legal">
          {t.updated && <p className="legal-updated"><strong>Last updated:</strong> {t.updated}</p>}
          {t.intro?.map((p, i) => <p key={i}>{p}</p>)}

          {t.sections.map((s, i) => (
            <div key={i}>
              {s.h && <h2>{s.h}</h2>}
              {s.p?.map((p, j) => <p key={j}>{p}</p>)}
              {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
              {s.after?.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          ))}

          <h2>10. Contact Us</h2>
          <p>{CONTACT_TEXT[type].intro}</p>
          <ul className="legal-contact">
            <li><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${CONTACT.phones[0].tel}`}>+91 {CONTACT.phones[0].label}</a></li>
            <li><strong>Address:</strong> {CONTACT.registered.tradeName} (Prop. {CONTACT.registered.legalName}), {CONTACT.address}, India</li>
          </ul>
          <p>{CONTACT_TEXT[type].outro}</p>
        </div>
      </section>
    </>
  );
}
