import React, { useState } from 'react';
import { FAQS } from './FAQ.types';
import type { AccordionItemProps } from './FAQ.types';

const AccordionItem = ({ question, answer, isOpen, onToggle }: AccordionItemProps): React.ReactElement => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
    <button
      className="w-full text-left px-6 py-4 flex items-center justify-between font-medium text-gray-900 hover:text-blue-600 transition-colors"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{question}</span>
      <i className={`bi shrink-0 ml-4 text-blue-500 transition-transform duration-200 ${isOpen ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'}`} />
    </button>
    {isOpen && (
      <div className="px-6 pb-5">
        <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = (): React.ReactElement => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggle = (question: string) =>
    setOpenQuestion(prev => (prev === question ? null : question));

  return (
    <section className="py-10 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-8 sm:mb-12">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3">FAQ</p>
          <h2 className="playfair text-2xl sm:text-3xl font-bold text-gray-900">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map(faq => (
            <AccordionItem
              key={faq.question}
              {...faq}
              isOpen={openQuestion === faq.question}
              onToggle={() => toggle(faq.question)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export { FAQ };
