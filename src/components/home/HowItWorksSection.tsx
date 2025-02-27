import React from "react";
import { Map, BookOpen, Award } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Map className="h-12 w-12 text-indigo-600" />,
      title: "Choose Your Path",
      description:
        "Select between self-paced learning or classroom-integrated options.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-indigo-600" />,
      title: "Learn Interactively",
      description: "Engage with dynamic lessons and real-world scenarios.",
    },
    {
      icon: <Award className="h-12 w-12 text-indigo-600" />,
      title: "Apply Your Skills",
      description: "Practice through hands-on activities and skill builders.",
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three simple steps to financial literacy mastery.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
