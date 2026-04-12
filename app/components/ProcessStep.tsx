import { ProcessStep as ProcessStepType } from '../types/config';

interface ProcessStepProps {
  step: ProcessStepType;
  isLast?: boolean;
}

export function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-[#2D5A3D] text-white rounded-full flex items-center justify-center font-bold text-lg">
          {step.step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-[#2D5A3D]/30 mt-2" />
        )}
      </div>
      <div className="pt-2">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-1">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
}
