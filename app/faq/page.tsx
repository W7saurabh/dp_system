// FAQ Page for D P Systems
// Frequently Asked Questions about products, services, and policies

'use client';

import Link from 'next/link';
import { FaArrowLeft, FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ data structure
interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  // Set page title and meta description (client-side)
  useEffect(() => {
    document.title = 'FAQ - D P Systems | Frequently Asked Questions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find answers to frequently asked questions about D P Systems products, services, warranty, and support in Rajkot, Gujarat.');
    }
  }, []);

  // FAQ categories and questions
  const faqs: FAQItem[] = [
    // Custom PC Building
    {
      id: 1,
      category: 'Custom PC Building',
      question: 'How long does it take to build a custom PC?',
      answer: 'Typically, we can build and test your custom PC within 2-3 business days after all components are available. Rush services are available for urgent requirements.'
    },
    {
      id: 2,
      category: 'Custom PC Building',
      question: 'Do you provide warranty on custom-built PCs?',
      answer: 'Yes, we provide comprehensive warranty coverage. Each component comes with manufacturer\'s warranty, and we offer 1 year service warranty on our assembly and configuration work.'
    },
    {
      id: 3,
      category: 'Custom PC Building',
      question: 'Can I upgrade my custom PC in the future?',
      answer: 'Absolutely! We design our custom PCs with upgradability in mind. You can easily upgrade components like RAM, storage, graphics card, and more as your needs evolve.'
    },

    // Products & Services
    {
      id: 4,
      category: 'Products & Services',
      question: 'What brands do you carry?',
      answer: 'We partner with leading brands including Intel, AMD, ASUS, MSI, Gigabyte, Corsair, Kingston, Samsung, WD, Seagate, NVIDIA, and many more. We stock only genuine, authorized products.'
    },
    {
      id: 5,
      category: 'Products & Services',
      question: 'Do you provide installation and setup services?',
      answer: 'Yes, we offer complete installation and setup services for all products we sell. This includes OS installation, driver updates, software configuration, and initial testing.'
    },
    {
      id: 6,
      category: 'Products & Services',
      question: 'Do you repair laptops and desktops?',
      answer: 'Yes, we provide comprehensive repair services for laptops and desktops including hardware repairs, software troubleshooting, data recovery, and component replacements.'
    },

    // Warranty & Support
    {
      id: 7,
      category: 'Warranty & Support',
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy for defective products. Products must be in original condition with all accessories and packaging. Custom-built systems have a 3-day testing period.'
    },
    {
      id: 8,
      category: 'Warranty & Support',
      question: 'Do you provide after-sales support?',
      answer: 'Yes, we provide comprehensive after-sales support including technical assistance, troubleshooting, and warranty claims. You can reach us via phone, WhatsApp, or visit our store.'
    },
    {
      id: 9,
      category: 'Warranty & Support',
      question: 'How do I claim warranty for a defective product?',
      answer: 'Contact us with your purchase invoice and product details. We\'ll diagnose the issue and process warranty claims through the manufacturer or provide direct replacement for our service warranty items.'
    },

    // Pricing & Payment
    {
      id: 10,
      category: 'Pricing & Payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, UPI payments, bank transfers, and easy EMI options through leading banks and finance partners.'
    },
    {
      id: 11,
      category: 'Pricing & Payment',
      question: 'Do you offer EMI options?',
      answer: 'Yes, we provide flexible EMI options through various banks and finance partners for purchases above ₹10,000. No-cost EMI is available on select products.'
    },
    {
      id: 12,
      category: 'Pricing & Payment',
      question: 'Can I get a customized quote for bulk orders?',
      answer: 'Absolutely! We offer special pricing for bulk orders and corporate clients. Contact us with your requirements, and we\'ll provide a competitive quote within 24 hours.'
    },

    // Location & Delivery
    {
      id: 13,
      category: 'Location & Delivery',
      question: 'Where is your store located?',
      answer: 'We are located at 4 Jolly Complex, Opp Mehta Hotel, Panchnath Main Road, Rajkot, Gujarat 360001. Visit our Contact page for map and directions.'
    },
    {
      id: 14,
      category: 'Location & Delivery',
      question: 'Do you provide home delivery?',
      answer: 'Yes, we provide home delivery within Rajkot city. Delivery charges may apply based on location and order value. Free delivery for orders above ₹50,000.'
    },
    {
      id: 15,
      category: 'Location & Delivery',
      question: 'What are your business hours?',
      answer: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM. We are closed on Sundays and public holidays.'
    }
  ];

  // Group FAQs by category
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16">
      <div className="container mx-auto px-4">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-accent-700 max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and policies
          </p>
        </div>

        {/* FAQ Categories Navigation */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                const element = document.getElementById(category.toLowerCase().replace(/\s+/g, '-'));
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-4 py-2 bg-white text-accent-700 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Sections by Category */}
        {categories.map((category) => (
          <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12 scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
              <FaQuestionCircle className="text-primary mr-3" />
              {category}
            </h2>

            <div className="space-y-4">
              {faqs
                .filter(faq => faq.category === category)
                .map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-card overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-secondary-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openId === faq.id ? (
                          <FaChevronUp className="text-primary text-xl" />
                        ) : (
                          <FaChevronDown className="text-accent-500 text-xl" />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                            <p className="text-accent-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        {/* Still Have Questions? */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly team is here to help!
            Contact us via phone, WhatsApp, or visit our store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919376509990"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call: +91 93765 09990
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}

