// Privacy Policy Page for D P Systems
// Comprehensive privacy policy compliant with Indian IT Act and international standards
// Updated for 2025 with latest data protection requirements

'use client';

import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt, FaLock, FaDatabase, FaUserShield } from 'react-icons/fa';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  // Set page title and meta description
  useEffect(() => {
    document.title = 'Privacy Policy - D P Systems';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for D P Systems - Learn how we collect, use, and protect your personal information in compliance with Indian IT Act and data protection regulations.');
    }
  }, []);

  // Animation variants for staggered content reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-accent-700 hover:text-primary font-medium transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-primary-50 p-4 rounded-full">
              <FaShieldAlt className="text-5xl text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-accent-700">
            Last Updated: November 11, 2025
          </p>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div 
          className="bg-white rounded-2xl shadow-card p-6 md:p-10 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introduction */}
          <motion.section variants={itemVariants}>
            <div className="flex items-start space-x-3 mb-4">
              <FaUserShield className="text-2xl text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">Introduction</h2>
            </div>
            <p className="text-accent-700 leading-relaxed">
              D P Systems ("we," "us," or "our") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or engage with our services. This policy complies with the Information Technology Act, 
              2000 (India), and applicable data protection regulations.
            </p>
            <p className="text-accent-700 leading-relaxed mt-3">
              By using our website or services, you agree to the collection and use of information in accordance 
              with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </motion.section>

          {/* Information We Collect */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <div className="flex items-start space-x-3 mb-4">
              <FaDatabase className="text-2xl text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">Information We Collect</h2>
            </div>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">1. Personal Information</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Fill out contact forms or inquiry forms on our website</li>
              <li>Purchase products or services from us</li>
              <li>Subscribe to our newsletter or promotional communications</li>
              <li>Create an account on our website</li>
              <li>Communicate with us via email, phone, or WhatsApp</li>
            </ul>
            <p className="text-accent-700 leading-relaxed mt-3">
              This information may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and shipping address</li>
              <li>Payment information (processed securely through third-party payment gateways)</li>
              <li>Company name and GST number (for business customers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">2. Automatically Collected Information</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device type, operating system, and screen resolution</li>
              <li>Pages visited, time spent on pages, and navigation patterns</li>
              <li>Referring website and search terms used</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">3. Information from Third Parties</h3>
            <p className="text-accent-700 leading-relaxed">
              We may receive information about you from third-party sources, such as social media platforms, 
              payment processors, and analytics providers, to enhance our services and verify your identity.
            </p>
          </motion.section>

          {/* How We Use Your Information */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">How We Use Your Information</h2>
            <p className="text-accent-700 leading-relaxed mb-3">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li><strong>Order Processing:</strong> To process and fulfill your orders, manage payments, and provide customer support</li>
              <li><strong>Communication:</strong> To respond to your inquiries, send order confirmations, and provide technical support</li>
              <li><strong>Marketing:</strong> To send promotional emails, newsletters, and special offers (you can opt-out anytime)</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website functionality and user experience</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security vulnerabilities</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements</li>
              <li><strong>Personalization:</strong> To personalize your experience and provide relevant product recommendations</li>
            </ul>
          </motion.section>

          {/* Data Sharing and Disclosure */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-accent-700 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information in the following circumstances:
            </p>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">With Service Providers</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              We may share your information with trusted third-party service providers who assist us in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Payment processing (e.g., Razorpay, PayU, bank gateways)</li>
              <li>Shipping and logistics (e.g., courier services)</li>
              <li>Email marketing and communication platforms</li>
              <li>Website hosting and analytics (e.g., Vercel, Google Analytics)</li>
              <li>Customer support tools</li>
            </ul>
            <p className="text-accent-700 leading-relaxed mt-3">
              These service providers are bound by confidentiality agreements and are authorized to use your 
              information only as necessary to provide services to us.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">For Legal Reasons</h3>
            <p className="text-accent-700 leading-relaxed">
              We may disclose your information if required by law, court order, or governmental authority, 
              or to protect our rights, property, safety, or that of our customers and the public.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">Business Transfers</h3>
            <p className="text-accent-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred 
              to the acquiring entity, subject to the same privacy protections.
            </p>
          </motion.section>

          {/* Data Security */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <div className="flex items-start space-x-3 mb-4">
              <FaLock className="text-2xl text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">Data Security</h2>
            </div>
            <p className="text-accent-700 leading-relaxed mb-3">
              We implement industry-standard security measures to protect your personal information from 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure payment gateways with PCI-DSS compliance</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection best practices</li>
            </ul>
            <p className="text-accent-700 leading-relaxed mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <strong>Important:</strong> While we strive to protect your personal information, no method of 
              transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute 
              security of your data.
            </p>
          </motion.section>

          {/* Cookies and Tracking Technologies */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-accent-700 leading-relaxed mb-3">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze 
              website traffic. Types of cookies we use include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality (e.g., shopping cart, authentication)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics)</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences (e.g., language, region)</li>
            </ul>
            <p className="text-accent-700 leading-relaxed mt-3">
              You can control cookies through your browser settings. Note that disabling certain cookies may 
              affect website functionality.
            </p>
          </motion.section>

          {/* Your Rights */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Your Rights and Choices</h2>
            <p className="text-accent-700 leading-relaxed mb-3">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to certain types of data processing (e.g., marketing)</li>
            </ul>
            <p className="text-accent-700 leading-relaxed mt-3">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </motion.section>

          {/* Third-Party Links */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Third-Party Links</h2>
            <p className="text-accent-700 leading-relaxed">
              Our website may contain links to third-party websites, plugins, and applications. We are not 
              responsible for the privacy practices of these external sites. We encourage you to review their 
              privacy policies before providing any personal information.
            </p>
          </motion.section>

          {/* Children's Privacy */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Children's Privacy</h2>
            <p className="text-accent-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you are a parent or guardian and believe your child has 
              provided us with personal information, please contact us immediately, and we will delete such 
              information from our systems.
            </p>
          </motion.section>

          {/* Data Retention */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Data Retention</h2>
            <p className="text-accent-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required by law. After the retention 
              period expires, we will securely delete or anonymize your information.
            </p>
          </motion.section>

          {/* Changes to Privacy Policy */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-accent-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
              requirements. The "Last Updated" date at the top of this page indicates when the policy was last 
              revised. We encourage you to review this policy periodically. Your continued use of our services 
              after any changes constitutes acceptance of the updated policy.
            </p>
          </motion.section>

          {/* Contact Us */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Contact Us</h2>
            <p className="text-accent-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us:
            </p>
            <div className="bg-primary-50 rounded-lg p-6 space-y-3">
              <p className="text-secondary-900 font-semibold"><strong>D P Systems</strong></p>
              <p className="text-accent-700">4 Jolly Complex, Opp Mehta Hotel</p>
              <p className="text-accent-700">Panchnath Main Road, Rajkot, Gujarat 360001</p>
              <p className="text-accent-700"><strong>Phone:</strong> <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a></p>
              <p className="text-accent-700"><strong>Email:</strong> <a href="mailto:contact@dpsystem.com" className="text-primary hover:underline">contact@dpsystem.com</a></p>
              <p className="text-accent-700"><strong>Business Hours:</strong> Monday - Saturday, 10:00 AM - 8:00 PM</p>
            </div>
          </motion.section>

          {/* Acceptance */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8 bg-gray-50 -m-6 md:-m-10 p-6 md:p-10 rounded-b-2xl">
            <p className="text-accent-700 leading-relaxed text-center">
              By using our website and services, you acknowledge that you have read, understood, and agree to 
              be bound by this Privacy Policy. Thank you for trusting D P Systems with your personal information.
            </p>
          </motion.section>
        </motion.div>

        {/* Back to Top / Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

