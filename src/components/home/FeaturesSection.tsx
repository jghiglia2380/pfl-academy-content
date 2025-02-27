import React from "react";
import { BookOpen, Target, BarChart2, Clock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Interactive Curriculum",
      description: "Engaging lessons on jobs, careers, budgeting, and more.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Skill Builders",
      description:
        "Hands-on activities to apply learning in real-life contexts.",
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Monitor achievements and goals with ease.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Learning",
      description: "Self-paced or classroom-integrated options.",
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose PFL Academy?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to build financial literacy skills for life.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-indigo-600">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
