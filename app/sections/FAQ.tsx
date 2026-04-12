import { FAQ as FAQType } from '../types/config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  faqs: FAQType[];
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <section id="faq" className="py-20 bg-[#F2E8D0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-600">
            Kurban hizmetimiz hakkında merak edilenler.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#FBF6EC] rounded-lg px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#2C3E50] hover:text-[#253D10]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
