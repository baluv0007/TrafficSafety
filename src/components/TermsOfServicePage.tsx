import { Scale, FileText, AlertTriangle, CheckCircle, XCircle, Copyright } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TermsOfServicePage() {
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
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center">
              <Scale className="w-10 h-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: November 20, 2025
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
                <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Important Legal Agreement</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Please read these Terms of Service carefully before using our website or services. By accessing or using FutureRoute Systems's website and services, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website or services.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and FutureRoute Systems ("Company," "we," "us," or "our") regarding your access to and use of our website, services, and related offerings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing our website at any domain associated with FutureRoute Systems, submitting inquiries, requesting quotes, or engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, which is incorporated herein by reference.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FutureRoute Systems provides traffic management solutions, equipment rental, installation services, and related offerings as described on our website. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Temporary traffic light systems and installation</li>
                <li>Variable message signs (VMS) and digital signage</li>
                <li>Traffic cones, drums, and channeling devices</li>
                <li>Crash barriers and impact attenuators</li>
                <li>Flashing beacons and warning lights</li>
                <li>Speed monitoring and traffic control systems</li>
                <li>CCTV and surveillance solutions</li>
                <li>Pedestrian barriers and crowd control equipment</li>
                <li>Site assessment and traffic management planning</li>
                <li>Maintenance, training, and consultation services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Services are subject to availability, and we reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Eligibility and Account Responsibility</h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Eligibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least 18 years of age and have the legal capacity to enter into binding contracts to use our services. By using our website, you represent and warrant that you meet these eligibility requirements.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Business Users</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are accessing our services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms, and references to "you" shall include both you individually and the entity you represent.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Account Information</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information and to update such information as necessary to maintain its accuracy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Website Use and Restrictions</h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our website for lawful purposes related to learning about and engaging with our traffic management services. You agree to use our website in accordance with all applicable laws and regulations.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Prohibited Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use our website for any illegal, fraudulent, or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems, networks, or data</li>
                <li>Interfere with or disrupt the operation of our website or servers</li>
                <li>Introduce viruses, malware, or other harmful code</li>
                <li>Scrape, crawl, or harvest content or user information without permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Transmit spam, unsolicited communications, or commercial messages</li>
                <li>Violate any intellectual property rights or proprietary rights</li>
                <li>Engage in any activity that could damage our reputation or business interests</li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Copyright className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Intellectual Property Rights</h2>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Ownership of Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our website, including but not limited to text, graphics, logos, trademarks, service marks, design elements, photographs, videos, software, and compiled data (collectively, "Content"), is the exclusive property of FutureRoute Systems or its content suppliers and is protected by intellectual property laws including copyright, trademark, and other applicable laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 FutureRoute Systems Brand and Materials</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following are proprietary to FutureRoute Systems and may not be used without our express written permission:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>FutureRoute Systems name, logo, and all related branding elements</li>
                <li>Product descriptions, specifications, and technical documentation</li>
                <li>Service descriptions and methodologies</li>
                <li>Website design, layout, and user interface elements</li>
                <li>Marketing materials, presentations, and promotional content</li>
                <li>Custom graphics, illustrations, and visual assets created by or for TrafficSafety</li>
                <li>Compilations and arrangements of content on our website</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Representational Images</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Images displayed on our website are used for representational and illustrative purposes only. These images may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stock photography obtained from licensed commercial sources</li>
                <li>Open-source images from public repositories with appropriate usage rights</li>
                <li>Original photography and graphics created by FutureRoute Systems</li>
                <li>Images depicting general industry concepts and applications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                While we make reasonable efforts to use properly licensed images, these images are for illustrative purposes and may not depict actual FutureRoute Systems projects, installations, or services. The products, scenarios, or locations shown in images are representative of typical traffic management applications.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.4 Restrictions on Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not, without our express written permission:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Reproduce, duplicate, copy, or redistribute any Content from our website</li>
                <li>Modify, adapt, translate, or create derivative works based on our Content</li>
                <li>Use our trademarks, logos, or brand elements in any manner</li>
                <li>Frame or mirror any portion of our website on another website</li>
                <li>Use automated systems to extract or collect Content without authorization</li>
                <li>Remove or alter copyright notices, trademarks, or proprietary markings</li>
                <li>Use our Content for commercial purposes or competitive analysis</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.5 Limited License</h3>
              <p className="text-gray-700 leading-relaxed">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our website for personal, non-commercial purposes only. This license does not include any right to download, copy, or use Content except as necessary for normal website browsing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Terms and Conditions</h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Quotations and Proposals</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All quotations, estimates, and proposals provided by FutureRoute Systems are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Valid for the period specified in the quotation document</li>
                <li>Subject to availability of equipment and personnel</li>
                <li>Non-binding until a formal service agreement is executed</li>
                <li>Subject to modification based on actual site conditions and requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Service Agreements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Specific services are governed by separate written service agreements that supplement these Terms. In the event of any conflict between these Terms and a service agreement, the service agreement shall control with respect to the specific services covered.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Equipment Rental</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When renting equipment from FutureRoute Systems, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use equipment only for its intended purpose and in accordance with instructions</li>
                <li>Maintain equipment in good condition during the rental period</li>
                <li>Return equipment in the same condition as received, normal wear excepted</li>
                <li>Be responsible for loss, theft, or damage to equipment while in your possession</li>
                <li>Pay all rental fees, deposits, and charges as specified in the rental agreement</li>
                <li>Comply with all applicable safety regulations and operational guidelines</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.4 Installation and Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                Professional installation and maintenance services are performed by qualified FutureRoute Systems personnel or authorized contractors. You agree to provide safe access to work sites and to comply with all site-specific requirements and safety protocols.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless otherwise specified in a service agreement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payment terms are as specified in invoices and service agreements</li>
                <li>All prices are quoted in Indian Rupees (INR) unless otherwise stated</li>
                <li>Prices are subject to applicable taxes, which will be added to invoices</li>
                <li>Late payments may incur additional charges as permitted by law</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>Deposits may be required for certain services or equipment rentals</li>
                <li>Pricing is subject to change without notice; confirmed quotes remain valid for the stated period</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.1 Limited Warranty</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. Equipment provided will be in good working condition and suitable for its intended purpose.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.2 Website Disclaimer</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-4">
                <p className="text-gray-700 leading-relaxed font-semibold uppercase text-sm mb-2">
                  Important Disclaimer
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  OUR WEBSITE AND ALL CONTENT, INFORMATION, AND MATERIALS PROVIDED THEREIN ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.3 No Guarantee of Results</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide excellent services, we do not guarantee specific results or outcomes from the use of our services. Traffic management effectiveness depends on numerous factors beyond our control, including environmental conditions, third-party compliance, and external circumstances.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.4 Information Accuracy</h3>
              <p className="text-gray-700 leading-relaxed">
                We make reasonable efforts to ensure information on our website is accurate and up-to-date. However, we do not warrant the completeness, accuracy, reliability, or timeliness of any content. Product specifications, service descriptions, and pricing are subject to change without notice.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">9. Limitation of Liability</h2>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4">
                <p className="text-gray-700 leading-relaxed font-semibold uppercase text-sm mb-2">
                  Critical Legal Notice
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FUTUREROUTE SYSTEMS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE OUR WEBSITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amount you paid to us in the twelve (12) months preceding the event giving rise to the claim, or one thousand rupees (INR 1,000), whichever is greater.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the fullest extent permitted by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless FutureRoute Systems, its officers, directors, employees, agents, affiliates, and contractors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your use or misuse of our website or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another person or entity</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Your negligence or willful misconduct</li>
                <li>Any content or information you submit or transmit through our website</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your access to our website and services at any time, with or without cause, with or without notice, for any reason including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violation of these Terms</li>
                <li>Fraudulent, illegal, or harmful activity</li>
                <li>Non-payment of fees or charges</li>
                <li>Conduct that damages our reputation or business interests</li>
                <li>Extended periods of inactivity</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Upon termination, your right to use our website and services immediately ceases. Sections of these Terms that by their nature should survive termination shall survive, including but not limited to intellectual property provisions, disclaimers, limitations of liability, and indemnification obligations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12.1 Governing Law</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12.2 Jurisdiction</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in [Your City/State], India.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12.3 Dispute Resolution</h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of any dispute, we encourage you to first contact us directly to seek an amicable resolution. Most concerns can be resolved quickly through direct communication. If informal resolution is unsuccessful, disputes may be resolved through mediation or arbitration as mutually agreed upon, or through court proceedings as specified above.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify, amend, or update these Terms at any time. Changes will be effective immediately upon posting on our website. Material changes will be communicated through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Prominent notice on our website</li>
                <li>Update to the "Last Updated" date at the top of this page</li>
                <li>Email notification to registered users (for significant changes)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your continued use of our website or services after changes are posted constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically to stay informed of any updates.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. General Provisions</h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">14.1 Entire Agreement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any separate service agreements, constitute the entire agreement between you and FutureRoute Systems regarding your use of our website and services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">14.2 Severability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">14.3 Waiver</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">14.4 Assignment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">14.5 Force Majeure</h3>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any failure to perform our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, labor disputes, governmental actions, or internet service failures.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">15. Contact Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions, concerns, or inquiries regarding these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-3">FutureRoute Systems</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href="mailto:info@trafficsafety.com" className="text-orange-600 hover:text-orange-700">info@trafficsafety.com</a></p>
                  <p><strong>Phone:</strong> 0800 123 4567</p>
                  <p><strong>Address:</strong> 123 Traffic Management Lane, Industrial Estate, City, Postcode</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Startup Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed">
                FutureRoute Systems is a growing startup committed to delivering professional traffic management solutions while building our operational capabilities. As we continue to develop and refine our services, these Terms may be updated to reflect our evolving business practices and legal requirements. We are dedicated to transparency, fairness, and building lasting relationships with our clients. Your feedback and patience as we grow are greatly appreciated.
              </p>
            </section>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mt-10">
              <p className="text-orange-900 font-semibold mb-2">Acknowledgment and Agreement</p>
              <p className="text-orange-800 text-sm leading-relaxed">
                BY USING OUR WEBSITE OR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE OUR WEBSITE OR SERVICES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
