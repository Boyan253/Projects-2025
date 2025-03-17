"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "Freelance Software Developer",
        company: "Self-employed",
        period: "2021, January  - 2023, May",
        description: "Collaborated with a team of talented instructors and developers to create cutting-edge course content"
      },
  {
    title: "Software Developer",
    company: "SoftUni",
    period: "2023, June  - 2024, March",
    description: "Collaborated with a team of talented instructors and developers tocreate cutting-edge course content. Worked on evaluation and grading of students' projects and testing of the course content and provided feedback to the instructors."
  },
  {
    title: "Software Developer, SAP Consultant",
    company: "Roiable",
    period: "2024, March - 2025, January",
    description: "Developed and maintained various web applications using React, Node.js, and AWS., made a process builder and mapping builder for Coca-Cola Belgium and worked for High-profile clients like Coca-Cola, SAP, EONBG, and others."
  },
  {
    title: "Team Lead",
    company: "1-Stream",
    period: "2025, January - Current",
    description: "Led a development stream at 1-Stream, mentoring and managing two interns by providing hands-on training and guidance in front-end technologies and best practices"
  }
];

export default function Experience() {
  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center mb-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="w-4 h-4 rounded-full animate-ping bg-blue-500 opacity-75" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-blue-500 dark:text-blue-400 font-medium mb-2">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-400">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 