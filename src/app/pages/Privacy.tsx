import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';

export default function Privacy() {
  const sections = [
    {
      title: '1. INTRODUCTION AND SCOPE',
      content: 'Thank you for choosing Kavipay.io ("Kavipay," "we," "us," or "our"), a financial technology service operated by PloutosLabs International Ltd, a company duly incorporated and registered in the Federal Republic of Nigeria with Registration Number RC 8059896. Kavipay is a comprehensive payment card and financial services platform that enables users to access virtual and physical payment cards, conduct cryptocurrency and fiat currency transactions, pay utility bills, and manage their financial activities securely and efficiently.\n\nThis Privacy Policy describes in detail how PloutosLabs International Ltd collects, uses, stores, shares, and protects your personal data when you access, browse, or use our website, download our mobile application, create an account, apply for or use any Kavipay payment card, fund your account, conduct transactions, or interact with us through any communication channel.'
    },
    {
      title: '2. DATA CONTROLLER AND CONTACT INFORMATION',
      content: 'The data controller responsible for the collection, processing, and protection of your personal data is PloutosLabs International Ltd (trading as Kavipay.io), Registered Company Number RC 8059896, located at NO. 15, WOKOGOLOMA STREET, D-LINE, PORT HARCOURT, RIVERS STATE, NIGERIA.\n\nWe have appointed a dedicated Data Protection Officer (DPO) at dpo@kavipay.io. For general inquiries: support@kavipay.io | Privacy: privacy@kavipay.io | Security: security@kavipay.io | Data Rights: datarights@kavipay.io'
    },
    {
      title: '3. DEFINITIONS AND INTERPRETATION',
      content: 'Personal Data means any information relating to an identified or identifiable natural person, including names, contact details, identification numbers, financial information, location data, and online identifiers. Processing means any operation performed on personal data, including collection, recording, organization, storage, adaptation, retrieval, consultation, use, disclosure, transmission, erasure, or destruction.\n\nServices means all products, services, features, and functionalities offered by Kavipay, including card services, payment processing, bill payments, and cryptocurrency funding.'
    },
    {
      title: '4. CATEGORIES OF PERSONAL DATA WE COLLECT',
      content: 'We collect the following categories of personal data:\n\n• Identity and Contact Information: Full name, date of birth, gender, nationality, residential address, email address, phone number, emergency contact information, and preferred communication preferences.\n\n• Government-Issued Identification: National Identification Number (NIN), Bank Verification Number (BVN), international passport details, driver\'s license information, and verification photographs.\n\n• Financial and Transaction Data: Bank account information, payment card details (processed securely through PCI DSS partners), cryptocurrency wallet addresses, transaction history, spending patterns, bill payment history, and income information.\n\n• Technical and Device Data: Device identifiers, device type, operating system, IP address, browser information, screen resolution, time zone, installed applications, and app version information.\n\n• Location Data: Precise GPS location (with your permission), approximate location from IP address, delivery addresses, billing addresses, and location history patterns.\n\n• Behavioral and Usage Data: Login times, features used, navigation patterns, time spent on features, search queries, notification interactions, and customer support interactions.\n\n• Biometric Data: Fingerprint templates, facial recognition data for identity verification, voice patterns, and behavioral biometrics for security purposes.'
    },
    {
      title: '5. SOURCES OF PERSONAL DATA',
      content: 'Most personal data comes directly from you when you complete registration, submit KYC verification documents, apply for payment cards, fund your account, conduct transactions, contact customer support, or participate in surveys.\n\nWe also receive personal data from licensed banking partners including Safe Haven Microfinance Bank (banking transaction records, KYC verification results), Sudo.africa and Payscribe (card issuance data, transaction records), and Speedaf Logistics (delivery confirmation records, shipment tracking information).'
    },
    {
      title: '6. LEGAL BASIS FOR PROCESSING',
      content: 'Under the Nigeria Data Protection Regulation (NDPR) 2019, we process your personal data on the following legal bases:\n\n• Consent: You have provided explicit, informed, and freely given consent through registration acceptance and opt-in mechanisms.\n\n• Contract Performance: Processing is necessary to perform our contractual obligations to you under Kavipay Terms and Conditions and Card Issuance Agreements.\n\n• Legal Obligation: We are required by law to process certain data to comply with Central Bank of Nigeria (CBN) regulations, KYC/AML requirements, tax reporting obligations, and EFCC directives.\n\n• Legitimate Interests: Processing is necessary for fraud prevention, security monitoring, risk assessment, network security, business analytics, and protecting against legal liability.'
    },
    {
      title: '7. PURPOSES OF DATA PROCESSING',
      content: 'We process your personal data for:\n\n• Account Management: Creating and maintaining your account, authenticating identity, processing account updates, managing profile settings, and providing customer support.\n\n• Card Issuance and Management: Issuing virtual and physical payment cards, processing applications, activating/deactivating cards, managing card limits, and coordinating card delivery.\n\n• Transaction Processing: Processing purchases, payments, transfers, bill payments, currency conversion, generating statements, and processing refunds and chargebacks.\n\n• Compliance: Conducting KYC verification, performing Customer Due Diligence, monitoring for suspicious transactions, filing Suspicious Transaction Reports, and responding to regulatory requests.\n\n• Security and Fraud Prevention: Detecting and preventing fraudulent transactions, monitoring unusual activity, implementing risk-based authentication, and investigating security incidents.'
    },
    {
      title: '8. DATA SHARING AND DISCLOSURE',
      content: 'We share your personal data with:\n\n• Service Providers: Safe Haven Microfinance Bank (banking services), Sudo.africa and Payscribe (card programs), Speedaf Logistics (delivery), cloud hosting providers, IT security firms, payment gateways, and customer support platforms.\n\n• Regulatory Authorities: We may share data with law enforcement, regulators, and government agencies when required by law or court order.\n\n• Other Parties: With your explicit consent or when necessary to protect our rights, safety, and property.\n\nWe do not sell your personal information to third parties for marketing purposes.'
    },
    {
      title: '9. INTERNATIONAL DATA TRANSFERS',
      content: 'While Kavipay primarily operates in Nigeria, some service providers may process personal data in other countries, including cloud hosting services (AWS, Google Cloud, Microsoft Azure) and payment networks (VISA, Mastercard).\n\nWhen we transfer personal data internationally, we ensure adequate protection through Standard Contractual Clauses, adequacy assessments, binding corporate rules, and explicit consent where required. We maintain contractual obligations requiring equivalent data protection standards.'
    },
    {
      title: '10. DATA SECURITY AND PROTECTION MEASURES',
      content: 'We implement comprehensive security measures:\n\n• Technical Controls: 256-bit AES encryption for data at rest, TLS 1.3 encryption for data in transit, end-to-end encryption for sensitive communications, multi-factor authentication, biometric authentication, Hardware Security Modules for key management, tokenization of payment card data, firewalls, intrusion detection systems, and DDoS protection.\n\n• Organizational Measures: Role-based access controls, employee background checks, mandatory security training, non-disclosure agreements, incident response plans, business continuity procedures, regular security audits, and secure development lifecycle practices.\n\nWe regularly conduct penetration testing and security assessments to maintain robust protection.'
    },
    {
      title: '11. DATA RETENTION AND DELETION',
      content: 'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless required by law to retain it longer.\n\nRetention Periods:\n• Account Information: Duration of account + 7 years after closure\n• Transaction Records: 10 years from transaction date (CBN requirement)\n• KYC/AML Documentation: Minimum 7 years after account closure\n• Communication Records: 3 years from last communication\n• Marketing Data: Until consent withdrawal + 30 days\n• Technical Logs: 12 months from collection\n\nWhen retention periods expire, we securely delete or anonymize your data using cryptographic erasure, data overwriting, physical destruction of hardware, anonymization techniques, and regular purging of backup systems.'
    },
    {
      title: '12. YOUR RIGHTS AS A DATA SUBJECT',
      content: 'Under the NDPR 2019, you have the following rights:\n\n• Right to Access: Request confirmation of whether we process your data and obtain copies of your personal data in our possession within 30 days.\n\n• Right to Rectification: Request correction of inaccurate or incomplete information within 14 days.\n\n• Right to Erasure: Request deletion of your personal data when no longer necessary, consent is withdrawn, or processing is unlawful (subject to legal retention requirements).\n\n• Right to Object: Object to processing based on legitimate interests or for direct marketing purposes.\n\n• Right to Data Portability: Receive your personal data in a structured, machine-readable format (CSV, JSON, PDF).\n\n• Right to Restrict Processing: Request restriction of processing during accuracy disputes or investigation of legal claims.\n\nTo exercise these rights, contact: datarights@kavipay.io or use the in-app \'Data Rights Request\' feature. We will respond within 30 days.'
    },
    {
      title: '13. AUTOMATED DECISION-MAKING AND PROFILING',
      content: 'Kavipay uses automated decision-making and profiling for:\n\n• Fraud Detection: Analyzing transaction patterns, assessing risk scores, flagging suspicious activities, and blocking high-risk transactions using machine learning algorithms.\n\n• Credit and Risk Assessment: Evaluating creditworthiness, assessing service eligibility, determining transaction approval, and calculating risk-based pricing.\n\n• Personalization: Recommending relevant services, customizing user experience, providing spending insights, and suggesting bill payment reminders.\n\nYou have the right to request human review of automated decisions that significantly affect you and may opt out of profiling for marketing purposes through account settings.'
    },
    {
      title: '14. COOKIES AND TRACKING TECHNOLOGIES',
      content: 'We use cookies and similar technologies to enhance your experience:\n\n• Strictly Necessary Cookies: Essential for website and app functionality\n• Performance Cookies: Analytics and usage statistics\n• Functional Cookies: Remember preferences and settings\n• Targeting Cookies: Personalized advertising\n• Social Media Cookies: Social sharing and login features\n\nYou can control cookies through our cookie consent banner, website footer \'Cookie Settings\', mobile app Settings > Privacy > Cookies, or your browser settings. For comprehensive information, please refer to our separate Cookies Policy.'
    },
    {
      title: '15. MARKETING COMMUNICATIONS AND PREFERENCES',
      content: 'With your consent, we may send you promotional emails, SMS notifications about special offers, push notifications about campaigns, in-app messages, and personalized recommendations based on your usage.\n\nYou can unsubscribe from marketing communications by:\n• Clicking \'Unsubscribe\' in promotional emails\n• Replying \'STOP\' to marketing SMS\n• Disabling push notifications in app settings\n• Emailing: marketing-optout@kavipay.io\n• Adjusting preferences in Account > Settings > Notifications\n\nNote: We will still send transactional messages (account alerts, security notifications, regulatory updates) even if you opt out of marketing.'
    },
    {
      title: '16. THIRD-PARTY SERVICES AND INTEGRATIONS',
      content: 'Kavipay integrates with various third-party services. Each service provider has its own privacy policy:\n\n• VISA Inc.: https://www.visa.com/privacy\n• Mastercard International: https://www.mastercard.com/privacy\n• Safe Haven MFB: https://safehavenmfb.com/privacy\n• Sudo.africa: https://sudo.africa/privacy\n• Payscribe: https://payscribe.ng/privacy\n• Speedaf Logistics: https://speedaf.com/privacy\n\nWe are not responsible for the privacy practices of third parties. We recommend reviewing their privacy policies independently.'
    },
    {
      title: '17. CHILDREN\'S PRIVACY AND AGE VERIFICATION',
      content: 'Kavipay Services are intended exclusively for persons 18 years of age and older. We do not knowingly collect personal data from minors.\n\nAge Verification Process:\n• Self-declaration during registration\n• Government-issued ID verification (must show age 18+)\n• Bank Verification Number (BVN) age check\n• National Identification Number (NIN) age verification\n\nIf we learn we have collected information from a minor, we will immediately delete it and terminate the account.'
    },
    {
      title: '18. DATA BREACH NOTIFICATION PROCEDURES',
      content: 'In the event of a personal data breach, we are committed to:\n\n• Containing the breach and assessing scope within 24 hours\n• Notifying the Nigeria Data Protection Bureau (NDPB) within 72 hours\n• Informing affected users without undue delay\n• Providing details of the breach, potential consequences, and remedial actions\n• Offering identity protection services if applicable\n• Conducting a full investigation and implementing preventive measures\n\nOur security team monitors for suspicious activities continuously to prevent breaches from occurring.'
    },
    {
      title: '19. SPECIAL CATEGORIES OF PERSONAL DATA',
      content: 'Kavipay does not intentionally collect or process special categories of personal data (sensitive data) including:\n\n• Racial or ethnic origin\n• Political opinions\n• Religious beliefs\n• Trade union membership\n• Genetic data\n• Health data\n• Information about sex life or sexual orientation\n\nWe only process biometric data (fingerprints, facial recognition) for authentication and identity verification purposes as explicitly permitted under applicable law.'
    },
    {
      title: '20. SOCIAL MEDIA AND PUBLIC COMMUNICATIONS',
      content: 'When you interact with us on social media platforms (Facebook, Twitter, Instagram, LinkedIn), your public posts may be viewed by others. We may collect your username and publicly available profile information.\n\nImportant: Never share sensitive account information, financial details, or personal identification information via social media or public channels. Always use private, secure communication methods for sensitive matters. Contact our support team at support@kavipay.io for secure communication about account concerns.'
    },
    {
      title: '21. CHANGES TO THIS PRIVACY POLICY',
      content: 'We reserve the right to modify this Privacy Policy at any time. We will notify you of material changes through:\n\n• Email notification (30 days advance notice)\n• Website banner notification\n• In-app notification\n• SMS notification\n\nYour continued use of Kavipay Services after receiving notice of changes constitutes your acceptance of the updated Privacy Policy. We encourage you to review this Policy periodically to stay informed about how we protect your information.'
    },
    {
      title: '22. DISPUTE RESOLUTION AND COMPLAINTS',
      content: 'If you have privacy concerns or wish to file a complaint:\n\n• Email: complaints@kavipay.io or dpo@kavipay.io\n• We will respond within 21 days\n• Provide details of your concern and preferred resolution\n\nIf you are not satisfied with our response, you may escalate your complaint to:\n\nNigeria Data Protection Bureau (NDPB)\nEmail: info@ndpb.gov.ng\nWebsite: https://ndpb.gov.ng\n\nYou have the right to lodge a complaint with your regulatory authority.'
    },
    {
      title: '23. REGULATORY COMPLIANCE AND CERTIFICATIONS',
      content: 'Kavipay maintains compliance with:\n\n• Nigeria Data Protection Regulation (NDPR) 2019 - Primary data protection legislation\n• Central Bank of Nigeria (CBN) Guidelines - Banking and payment service regulations\n• Money Laundering (Prohibition) Act 2022 - AML/CTF compliance\n• Cybercrimes Act 2015 - Cybersecurity and data protection\n• PCI DSS Level 1 Compliance (through certified partners Sudo.africa and Payscribe)\n• Economic and Financial Crimes Commission (EFCC) Directives\n• Nigeria Deposit Insurance Corporation (NDIC) Requirements\n• Federal Inland Revenue Service (FIRS) Tax Reporting Standards\n\nWe undergo regular third-party security audits and maintain current certifications.'
    },
    {
      title: '24. CONTACT INFORMATION AND DATA PROTECTION OFFICER',
      content: 'For any privacy-related inquiries, please contact us:\n\nData Protection Officer: dpo@kavipay.io\nPrivacy Inquiries: privacy@kavipay.io\nData Rights Requests: datarights@kavipay.io\nSecurity Issues: security@kavipay.io\nComplaints: complaints@kavipay.io\nMarketing Opt-Out: marketing-optout@kavipay.io\nGeneral Support: support@kavipay.io\n\nPloutosLabs International Ltd (trading as Kavipay.io)\nWebsite: https://kavipay.io\nPhone Support: 0700 CALL KAVIPAY (0700 2255 5284729)\nBusiness Hours: Monday - Friday, 8:00 AM - 5:00 PM WAT'
    },
    {
      title: '25. APPENDIX: PARTNER PRIVACY PRACTICES',
      content: 'Our licensed service providers maintain their own privacy policies:\n\n• Safe Haven Microfinance Bank (CBN Licensed)\n  https://safehavenmfb.com/privacy\n\n• Sudo.africa (PCI DSS Compliant)\n  https://sudo.africa/privacy\n\n• Payscribe (PCI DSS Compliant)\n  https://payscribe.ng/privacy\n\n• Speedaf Logistics (NIPOST Licensed)\n  https://speedaf.com/privacy\n\nWe recommend reviewing these policies to understand how your data is handled by our partners. We ensure all partners maintain equivalent data protection standards through contractual obligations and regular audits.'
    },
  ];



  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Privacy Policy"
        subtitle="Last Updated: February 9, 2026"
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Policy Header */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">KAVIPAY.IO COMPREHENSIVE PRIVACY POLICY</h2>
              <p className="text-white/80 mb-4">
                <strong>Company:</strong> PloutosLabs International Ltd (Trading as Kavipay.io)
              </p>
              <p className="text-white/80 mb-4">
                <strong>Registration Number:</strong> RC 8059896
              </p>
              <p className="text-white/80">
                Last Updated: February 9, 2026 | Effective Date: February 9, 2026
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">TABLE OF CONTENTS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sections.map((section, index) => (
                  <div key={index} className="text-white/70 hover:text-white/90 transition-colors">
                    <a href={`#section-${index + 1}`} className="underline hover:no-underline">
                      {section.title.split('.')[0]}. {section.title.split('. ')[1]?.substring(0, 40)}...
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Policy Sections */}
            <div id="privacy-content" className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  id={`section-${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                  <div className="text-white/60 leading-relaxed whitespace-pre-wrap space-y-4">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Final Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sections.length * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-12"
              >
                <p className="text-white/60 leading-relaxed text-center">
                  By using Kavipay Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                </p>
                <p className="text-white/60 leading-relaxed text-center mt-4">
                  © 2026 PloutosLabs International Ltd. All Rights Reserved.
                </p>
                <p className="text-white/60 leading-relaxed text-center mt-4">
                  Document Version: 1.0 | Language: English | Jurisdiction: Federal Republic of Nigeria
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
