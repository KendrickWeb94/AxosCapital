"use client";

import { useState } from 'react';

const FAQAccordion = () => {

  const faqs = [
    {
      question: 'How do I create an account on Axos Capital Investments?',
      answer: 'Creating an account is simple! Just visit our website and click on the "Sign Up" button. Follow the prompts to register with your email address and complete the account setup process.',
    },
    {
      question: 'Can I explore investment options without creating an account?',
      answer: 'Yes, you can browse through our investment options without creating an account. However, to take advantage of our full range of services and investment tools, we recommend creating an account.',
    },
    {
      question: 'How do I invest with Axos Capital Investments?',
      answer: 'Once you have created an account, simply log in and explore our range of investment opportunities. When you find an investment that fits your goals, follow the instructions provided to invest securely and easily.',
    },
    {
      question: 'Are the investment opportunities updated regularly on Axos Capital Investments?',
      answer: 'Yes, we strive to keep our investment opportunities up to date. Our team regularly evaluates and updates our investment offerings to ensure that you have access to the latest opportunities in the market.',
    },
    {
      question: 'Can I receive notifications for new investment opportunities?',
      answer: 'Absolutely! You can subscribe to our investment alerts by providing your email address and specifying your investment preferences. We will then notify you whenever new investment opportunities align with your criteria.',
    },
    {
      question: 'How can I get in touch with Axos Capital Investments?',
      answer: 'You can easily contact us through our website is messaging system or by reaching out to our customer support team. We are here to assist you with any questions or inquiries you may have about investing with us.',
    },
    // Add more FAQ objects as needed
  ];
  
      
      
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className="pt-[10rem]">
      <div className="w-full bg-white shadow-2 space-y-3 p-7 inter rounded-lg pt-5 mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between inter  items-center w-full text-left"
          >
            <p className="text-gray-800 inter  font-semibold">{faq.question}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  activeIndex === index
                    ? 'M19 9l-7 7-7-7'
                    : 'M5 15l7-7 7 7'
                }
              />
            </svg>
          </button>
          {activeIndex === index && (
            <p className="mt-4 text-zinc-500 inter text-sm">{faq.answer}</p>
          )}
        </div>
      ))}
    
   
    </div>
    </div>
  );
};

export default FAQAccordion;
