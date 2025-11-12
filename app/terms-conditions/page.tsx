// Terms and Conditions Page for D P Systems
// Comprehensive terms and conditions for IT hardware retail business in India
// Updated for 2025 with warranty, return, and service policies

'use client';

import Link from 'next/link';
import { FaArrowLeft, FaFileContract, FaCheckCircle, FaShippingFast, FaUndo } from 'react-icons/fa';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TermsConditionsPage() {
  // Set page title and meta description
  useEffect(() => {
    document.title = 'Terms & Conditions - D P Systems';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and Conditions for D P Systems - Learn about our policies, warranties, returns, and service terms for IT hardware products in Rajkot, Gujarat.');
    }
  }, []);

  // Animation variants
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
              <FaFileContract className="text-5xl text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 mb-4">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-lg text-accent-700">
            Last Updated: November 11, 2025
          </p>
        </motion.div>

        {/* Terms and Conditions Content */}
        <motion.div 
          className="bg-white rounded-2xl shadow-card p-6 md:p-10 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introduction */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Introduction</h2>
            <p className="text-accent-700 leading-relaxed">
              Welcome to D P Systems. These Terms and Conditions ("Terms") govern your use of our website and 
              the purchase of products and services from us. By accessing our website or making a purchase, you 
              agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not 
              use our website or services.
            </p>
            <p className="text-accent-700 leading-relaxed mt-3">
              D P Systems reserves the right to update, change, or modify these Terms at any time without prior 
              notice. Your continued use of our services after such changes constitutes acceptance of the revised Terms.
            </p>
          </motion.section>

          {/* General Terms */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">1. General Terms</h2>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">1.1 Eligibility</h3>
            <p className="text-accent-700 leading-relaxed">
              You must be at least 18 years old to make purchases from D P Systems. By using our services, you 
              represent and warrant that you are legally capable of entering into binding contracts.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">1.2 Account Registration</h3>
            <p className="text-accent-700 leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information. 
              You are responsible for maintaining the confidentiality of your account credentials and for all 
              activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">1.3 Acceptable Use</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              You agree not to use our website or services for any unlawful or prohibited purposes, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on intellectual property rights</li>
              <li>Distributing malware, viruses, or harmful code</li>
              <li>Engaging in fraudulent activities or misrepresentation</li>
              <li>Attempting to gain unauthorized access to our systems</li>
            </ul>
          </motion.section>

          {/* Product Information */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">2. Product Information and Pricing</h2>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">2.1 Product Descriptions</h3>
            <p className="text-accent-700 leading-relaxed">
              We strive to provide accurate product descriptions, specifications, and images. However, we do not 
              warrant that product descriptions, pricing, or other content on our website is accurate, complete, 
              reliable, or error-free. If a product is not as described, your sole remedy is to return it in 
              accordance with our return policy.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">2.2 Pricing and Availability</h3>
            <p className="text-accent-700 leading-relaxed">
              All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise 
              stated. We reserve the right to change prices at any time without prior notice. Product availability 
              is subject to change, and we cannot guarantee that all products will be in stock at all times.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">2.3 Pricing Errors</h3>
            <p className="text-accent-700 leading-relaxed">
              In the event of a pricing error on our website, we reserve the right to cancel or refuse orders 
              placed at the incorrect price. If your order has been charged and subsequently canceled, we will 
              issue a full refund to your original payment method.
            </p>
          </motion.section>

          {/* Orders and Payment */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">3. Orders and Payment</h2>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">3.1 Order Placement</h3>
            <p className="text-accent-700 leading-relaxed">
              When you place an order, you are making an offer to purchase the product(s) at the listed price. 
              All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any 
              order for any reason, including but not limited to product availability, errors in pricing or product 
              information, or suspected fraudulent activity.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">3.2 Order Confirmation</h3>
            <p className="text-accent-700 leading-relaxed">
              You will receive an order confirmation email after placing your order. This confirmation does not 
              signify acceptance of your order, only receipt of your order. Acceptance occurs when we dispatch 
              the product(s) to you.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">3.3 Payment Methods</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              We accept the following payment methods:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Credit and Debit Cards (Visa, MasterCard, RuPay)</li>
              <li>UPI (PhonePe, Google Pay, Paytm, etc.)</li>
              <li>Net Banking</li>
              <li>Cash on Delivery (COD) - Available for select orders within Rajkot</li>
              <li>EMI options through bank partners</li>
            </ul>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">3.4 Payment Processing</h3>
            <p className="text-accent-700 leading-relaxed">
              Payments are processed through secure third-party payment gateways. We do not store your complete 
              credit card or banking information on our servers. By providing your payment information, you 
              authorize us to charge the total amount to your selected payment method.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">3.5 EMI and Financing</h3>
            <p className="text-accent-700 leading-relaxed">
              EMI options are subject to approval by our financing partners. Interest rates, tenure, and eligibility 
              criteria are determined by the respective bank or finance company. D P Systems is not responsible for 
              the approval or rejection of EMI applications.
            </p>
          </motion.section>

          {/* Shipping and Delivery */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <div className="flex items-start space-x-3 mb-4">
              <FaShippingFast className="text-2xl text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">4. Shipping and Delivery</h2>
            </div>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">4.1 Delivery Areas</h3>
            <p className="text-accent-700 leading-relaxed">
              We offer delivery services within Rajkot city and select areas in Gujarat. Delivery charges may 
              apply based on the delivery location and order value. Orders above ₹50,000 qualify for free delivery 
              within Rajkot.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">4.2 Delivery Time</h3>
            <p className="text-accent-700 leading-relaxed">
              Standard delivery typically takes 2-5 business days within Rajkot, depending on product availability. 
              Custom-built PCs and specialized orders may require additional time (3-7 business days). We will 
              notify you of any delays in delivery.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">4.3 Delivery Verification</h3>
            <p className="text-accent-700 leading-relaxed">
              At the time of delivery, please verify the product(s) for any visible damage or defects. If you 
              notice any issues, please refuse delivery and contact us immediately. Once you accept delivery, 
              you are confirming that the product is in good condition.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">4.4 Failed Delivery Attempts</h3>
            <p className="text-accent-700 leading-relaxed">
              If delivery attempts fail due to incorrect address, unavailability, or refusal to accept, 
              additional delivery charges may apply for re-delivery attempts. Orders that cannot be delivered 
              after three attempts will be returned to our store, and refund processing will begin.
            </p>
          </motion.section>

          {/* Returns and Refunds */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <div className="flex items-start space-x-3 mb-4">
              <FaUndo className="text-2xl text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">5. Returns and Refunds</h2>
            </div>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">5.1 Return Policy</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              We offer a <strong>7-day return policy</strong> for defective or damaged products from the date of 
              delivery. To be eligible for a return, the product must:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Be in original condition with all accessories, manuals, and packaging</li>
              <li>Have all original tags, seals, and labels intact</li>
              <li>Not be used, damaged, or modified by the customer</li>
              <li>Be accompanied by the original invoice or receipt</li>
            </ul>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">5.2 Non-Returnable Items</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              The following items are non-returnable:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Software, license keys, and downloadable products (unless defective)</li>
              <li>Customized or personalized products (e.g., custom-built PCs with specific configurations)</li>
              <li>Products with broken seals or used items (unless defective on arrival)</li>
              <li>Sale or clearance items (unless specified otherwise)</li>
            </ul>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">5.3 Return Process</h3>
            <p className="text-accent-700 leading-relaxed">
              To initiate a return, contact our customer support within 7 days of delivery with your order number, 
              product details, and reason for return. Our team will guide you through the return process. Products 
              must be returned to our store or picked up by our courier partner (charges may apply).
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">5.4 Refund Policy</h3>
            <p className="text-accent-700 leading-relaxed">
              Once we receive and inspect the returned product, we will approve or reject the return. If approved, 
              the refund will be processed to your original payment method within 7-10 business days. Refund 
              processing times may vary depending on your bank or payment provider.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">5.5 Exchanges</h3>
            <p className="text-accent-700 leading-relaxed">
              We offer exchanges for defective or incorrect products. If you wish to exchange a product, please 
              follow the return process, and once the return is approved, you can place a new order for the 
              desired product.
            </p>
          </motion.section>

          {/* Warranty */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <div className="flex items-start space-x-3 mb-4">
              <FaCheckCircle className="text-2xl text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">6. Warranty</h2>
            </div>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">6.1 Manufacturer Warranty</h3>
            <p className="text-accent-700 leading-relaxed">
              All products sold by D P Systems come with the manufacturer's warranty as specified by the brand. 
              Warranty terms, coverage, and duration vary by product and manufacturer. Please refer to the 
              product documentation or contact us for specific warranty details.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">6.2 Service Warranty</h3>
            <p className="text-accent-700 leading-relaxed">
              For custom-built PCs and systems assembled by D P Systems, we provide a <strong>1-year service 
              warranty</strong> covering assembly, configuration, and workmanship. This warranty does not cover 
              individual component failures (covered by manufacturer warranty) or damage caused by misuse, 
              accidents, or unauthorized modifications.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">6.3 Warranty Claims</h3>
            <p className="text-accent-700 leading-relaxed">
              To claim warranty service, contact us with your invoice, product details, and description of the 
              issue. We will diagnose the problem and process warranty claims through the manufacturer or provide 
              direct service for items covered under our service warranty. Warranty service times vary depending 
              on the manufacturer and availability of parts.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">6.4 Warranty Exclusions</h3>
            <p className="text-accent-700 leading-relaxed mb-3">
              Warranty does not cover:
            </p>
            <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
              <li>Physical damage, liquid spills, or accidental breakage</li>
              <li>Damage caused by power surges, electrical issues, or improper voltage</li>
              <li>Unauthorized repairs, modifications, or tampering</li>
              <li>Wear and tear from normal use (e.g., battery degradation, cosmetic wear)</li>
              <li>Software issues, viruses, or data loss</li>
            </ul>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">7. Intellectual Property</h2>
            <p className="text-accent-700 leading-relaxed">
              All content on our website, including text, images, logos, graphics, icons, and software, is the 
              property of D P Systems or its licensors and is protected by Indian and international copyright, 
              trademark, and intellectual property laws. You may not reproduce, distribute, modify, or create 
              derivative works without our express written permission.
            </p>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-accent-700 leading-relaxed">
              To the fullest extent permitted by law, D P Systems shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, use, 
              or goodwill, arising out of or related to your use of our website or products. Our total liability 
              shall not exceed the amount paid by you for the product or service in question.
            </p>
          </motion.section>

          {/* Indemnification */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">9. Indemnification</h2>
            <p className="text-accent-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless D P Systems, its affiliates, officers, directors, 
              employees, and agents from any claims, liabilities, damages, losses, and expenses, including 
              reasonable attorney's fees, arising out of or related to your violation of these Terms or your use 
              of our services.
            </p>
          </motion.section>

          {/* Dispute Resolution */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">10. Dispute Resolution and Governing Law</h2>
            
            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">10.1 Governing Law</h3>
            <p className="text-accent-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes 
              arising out of or related to these Terms or your use of our services shall be subject to the exclusive 
              jurisdiction of the courts in Rajkot, Gujarat.
            </p>

            <h3 className="text-xl font-semibold text-secondary-900 mt-6 mb-3">10.2 Dispute Resolution</h3>
            <p className="text-accent-700 leading-relaxed">
              In the event of any dispute, we encourage you to contact us first to attempt an amicable resolution. 
              If a dispute cannot be resolved informally, you agree to submit to binding arbitration in Rajkot, 
              Gujarat, in accordance with the Arbitration and Conciliation Act, 1996.
            </p>
          </motion.section>

          {/* Severability */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">11. Severability</h2>
            <p className="text-accent-700 leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining 
              provisions shall continue in full force and effect. The invalid provision shall be modified to the 
              minimum extent necessary to make it valid and enforceable.
            </p>
          </motion.section>

          {/* Contact Us */}
          <motion.section variants={itemVariants} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">12. Contact Information</h2>
            <p className="text-accent-700 leading-relaxed mb-4">
              If you have any questions or concerns about these Terms and Conditions, please contact us:
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
              By using our website and services, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms and Conditions. Thank you for choosing D P Systems for your IT hardware needs!
            </p>
          </motion.section>
        </motion.div>

        {/* Back to Home */}
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

