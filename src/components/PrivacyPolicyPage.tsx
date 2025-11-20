import { Shield, Lock, Eye, Database, Mail, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PrivacyPolicyPage() {
  const hero = useScrollAnimation({ threshold: 0.2 });
  const content = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={hero.elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: January 20, 2025
          </p>
        </div>

        <div
          ref={content.elementRef}
          className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-1000 ${
            content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Important Notice</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    TrafficSafety is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">1. Information We Collect</h2>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Information You Provide</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you interact with our website or services, we may collect information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Project details and service inquiries submitted through contact forms</li>
                <li>Career application information (resume, cover letter, professional details)</li>
                <li>Communication preferences and feedback</li>
                <li>Any other information you choose to provide when contacting us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain technical information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Browser type and version</li>
                <li>Operating system and device information</li>
                <li>IP address and general location data</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referral source and exit pages</li>
                <li>Date and time of website access</li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">2. How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Delivery:</strong> To respond to your inquiries, provide quotes, and deliver traffic management services</li>
                <li><strong>Communication:</strong> To contact you regarding your projects, service updates, and important notifications</li>
                <li><strong>Customer Support:</strong> To address your questions, resolve issues, and provide technical assistance</li>
                <li><strong>Business Operations:</strong> To process job applications, manage vendor relationships, and conduct business activities</li>
                <li><strong>Website Improvement:</strong> To analyze website usage, improve functionality, and enhance user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations</li>
                <li><strong>Security:</strong> To protect our website, services, and users from fraud, unauthorized access, and security threats</li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">3. Information Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may engage trusted third-party service providers to assist with business operations, including website hosting, email services, and analytics. These providers are contractually obligated to protect your information and use it only for specified purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such change and provide options regarding your information.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information when required by law, court order, or government regulation, or when necessary to protect our rights, safety, or property.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.4 With Your Consent</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with third parties when you have provided explicit consent for such sharing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection and privacy practices</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality and performance</li>
                <li>Analyze traffic patterns and user behavior</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. Please note that disabling cookies may affect website functionality and your user experience.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links and Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites or display content from external sources. Please note that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We are not responsible for the privacy practices of third-party websites</li>
                <li>Third-party websites have their own privacy policies and terms of service</li>
                <li>We encourage you to review the privacy policies of any third-party websites you visit</li>
                <li>Links to third-party websites do not imply endorsement of their content or services</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Image Usage and Attribution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Images displayed on our website are used for representational purposes only and may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stock photography from licensed sources and open-source platforms</li>
                <li>Images sourced from publicly available repositories with appropriate permissions</li>
                <li>Original photography and graphics created by TrafficSafety</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                While we make reasonable efforts to use properly licensed images, the specific products, locations, or scenarios depicted in images may not represent actual TrafficSafety projects or services. Images are intended to illustrate general concepts and applications of traffic management solutions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods vary depending on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The nature of the information collected</li>
                <li>The purpose for which it was collected</li>
                <li>Legal and regulatory requirements</li>
                <li>Business and operational needs</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                When information is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">9. Your Rights and Choices</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Restriction:</strong> Request restriction of processing in specific circumstances</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for processing where consent was previously given</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights or for any privacy-related inquiries, please contact us at <a href="mailto:info@trafficsafety.com" className="text-orange-600 hover:text-orange-700 font-semibold">info@trafficsafety.com</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take appropriate steps to delete such information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                As a startup operating primarily in India, your information is processed and stored within India. If we transfer information internationally in the future, we will implement appropriate safeguards to protect your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Posting the updated Privacy Policy on our website</li>
                <li>Updating the "Last Updated" date at the top of this page</li>
                <li>Sending notification via email for significant changes (if we have your email address)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your continued use of our website and services after changes are posted constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-3">TrafficSafety</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href="mailto:info@trafficsafety.com" className="text-orange-600 hover:text-orange-700">info@trafficsafety.com</a></p>
                  <p><strong>Phone:</strong> 0800 123 4567</p>
                  <p><strong>Address:</strong> 123 Traffic Management Lane, Industrial Estate, City, Postcode</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Disclaimer for Startup Operations</h2>
              <p className="text-gray-700 leading-relaxed">
                TrafficSafety is a growing startup committed to building professional traffic management solutions. As we continue to develop our services and operations, we may update our data handling practices and privacy procedures. We are dedicated to maintaining transparency and protecting your privacy throughout our growth journey. We welcome your feedback and suggestions as we refine our privacy practices to better serve you.
              </p>
            </section>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mt-10">
              <p className="text-orange-900 font-semibold mb-2">Acknowledgment</p>
              <p className="text-orange-800 text-sm leading-relaxed">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this Privacy Policy, please do not use our website or services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
