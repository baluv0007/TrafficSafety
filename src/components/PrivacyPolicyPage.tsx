import { Shield, Lock, Eye, Database, Mail, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PrivacyPolicyPage() {
  const hero = useScrollAnimation({ threshold: 0.2 });
  const content = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          ref={hero.elementRef}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-orange-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 break-words">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-600 break-words">
            Last Updated: November  20, 2025
          </p>
        </div>

        <div
          ref={content.elementRef}
          className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-1000 ${
            content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-none overflow-hidden">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 rounded-r-lg break-words">
              <div className="flex items-start gap-2 sm:gap-3">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-1 sm:mb-2 break-words">Important Notice</h3>
                  <p className="text-xs sm:text-sm text-blue-800 leading-relaxed break-words">
                    FutureRoute Systems is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-6 sm:mb-8 md:mb-10 break-words">
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">1. Information We Collect</h2>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 break-words">1.1 Information You Provide</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                When you interact with our website or services, we may collect information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 break-words">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Project details and service inquiries submitted through contact forms</li>
                <li>Career application information (resume, cover letter, professional details)</li>
                <li>Communication preferences and feedback</li>
                <li>Any other information you choose to provide when contacting us</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 break-words">1.2 Automatically Collected Information</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                When you visit our website, we may automatically collect certain technical information, including:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 break-words">
                <li>Browser type and version</li>
                <li>Operating system and device information</li>
                <li>IP address and general location data</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referral source and exit pages</li>
                <li>Date and time of website access</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8 md:mb-10 break-words">
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">2. How We Use Your Information</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 break-words">
                <li><strong>Service Delivery:</strong> To respond to your inquiries, provide quotes, and deliver traffic management services</li>
                <li><strong>Communication:</strong> To contact you regarding your projects, service updates, and important notifications</li>
                <li><strong>Customer Support:</strong> To address your questions, resolve issues, and provide technical assistance</li>
                <li><strong>Business Operations:</strong> To process job applications, manage vendor relationships, and conduct business activities</li>
                <li><strong>Website Improvement:</strong> To analyze website usage, improve functionality, and enhance user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations</li>
                <li><strong>Security:</strong> To protect our website, services, and users from fraud, unauthorized access, and security threats</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8 md:mb-10 break-words">
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">3. Information Sharing and Disclosure</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                We respect your privacy and do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 break-words">3.1 Service Providers</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                We may engage trusted third-party service providers to assist with business operations, including website hosting, email services, and analytics. These providers are contractually obligated to protect your information and use it only for specified purposes.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 break-words">3.2 Business Transfers</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such change and provide options regarding your information.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 break-words">3.3 Legal Requirements</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                We may disclose your information when required by law, court order, or government regulation, or when necessary to protect our rights, safety, or property.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 break-words">3.4 With Your Consent</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                We may share your information with third parties when you have provided explicit consent for such sharing.
              </p>
            </section>

            <section className="mb-6 sm:mb-8 md:mb-10 break-words">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">4. Data Security</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 break-words">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection and privacy practices</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4 break-words">
                However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-6 sm:mb-8 md:mb-10 break-words">
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">5. Contact Information</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-200 break-words">
                <p className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base break-words">FutureRoute Systems</p>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 break-words">
                  <p className="break-all"><strong>Email:</strong> <a href="mailto:info@futureroute.com" className="text-orange-600 hover:text-orange-700">info@futureroute.com</a></p>
                  <p><strong>Phone:</strong> 0800 123 4567</p>
                  <p className="break-words"><strong>Address:</strong> 123 Traffic Management Lane, Industrial Estate, City, Postcode</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </section>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-3 sm:p-4 md:p-6 rounded-r-lg mt-6 sm:mt-8 md:mt-10 break-words">
              <p className="text-orange-900 font-semibold mb-1 sm:mb-2 text-sm sm:text-base break-words">Acknowledgment</p>
              <p className="text-orange-800 text-xs sm:text-sm leading-relaxed break-words">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this Privacy Policy, please do not use our website or services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
