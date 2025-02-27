import React from 'react';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export function StepProgress({ currentStep, totalSteps, stepTitles }: StepProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-sm text-gray-500">
          {Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete
        </span>
      </div>
      
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
        
        <div className="absolute top-4 left-0 w-full flex justify-between">
          {stepTitles.map((title, index) => (
            <div
              key={index}
              className={`text-xs ${
                index <= currentStep ? 'text-indigo-600' : 'text-gray-400'
              }`}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}