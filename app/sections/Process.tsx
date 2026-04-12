import { ProcessStep as ProcessStepType } from '../types/config';
import { ProcessStep } from '../components/ProcessStep';

interface ProcessProps {
  steps: ProcessStepType[];
}

export function Process({ steps }: ProcessProps) {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            4 Adımda Kurban
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kurban ibadetinizde vekaletinizi verin, gerisini bize bırakın.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.step} 
              step={step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
