// MetricsSection.jsx
"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // States for each counter
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [growthCount, setGrowthCount] = useState(0);
  
  // Target values
  const targetClients = 3500;
  const targetProjects = 30;
  const targetPortfolio = 2000;
  const targetGrowth = 35;
  
  // Animation duration in milliseconds
  const animationDuration = 3000;
  
  useEffect(() => {
    if (isInView) {
      // Animate clients count
      const clientsInterval = setInterval(() => {
        setClientsCount(prev => {
          const nextValue = prev + Math.ceil(targetClients / (animationDuration / 50));
          return nextValue >= targetClients ? targetClients : nextValue;
        });
      }, 50);
      
      // Animate projects count
      const projectsInterval = setInterval(() => {
        setProjectsCount(prev => {
          const nextValue = prev + Math.ceil(targetProjects / (animationDuration / 100));
          return nextValue >= targetProjects ? targetProjects : nextValue;
        });
      }, 100);
      
      // Animate portfolio count
      const portfolioInterval = setInterval(() => {
        setPortfolioCount(prev => {
          const nextValue = prev + Math.ceil(targetPortfolio / (animationDuration / 50));
          return nextValue >= targetPortfolio ? targetPortfolio : nextValue;
        });
      }, 50);
      
      // Animate growth count
      const growthInterval = setInterval(() => {
        setGrowthCount(prev => {
          const nextValue = prev + Math.ceil(targetGrowth / (animationDuration / 100));
          return nextValue >= targetGrowth ? targetGrowth : nextValue;
        });
      }, 100);
      
      // Clear intervals when animation completes
      setTimeout(() => {
        clearInterval(clientsInterval);
        clearInterval(projectsInterval);
        clearInterval(portfolioInterval);
        clearInterval(growthInterval);
        
        // Ensure final values are set correctly
        setClientsCount(targetClients);
        setProjectsCount(targetProjects);
        setPortfolioCount(targetPortfolio);
        setGrowthCount(targetGrowth);
      }, animationDuration);
      
      // Clean up intervals if component unmounts
      return () => {
        clearInterval(clientsInterval);
        clearInterval(projectsInterval);
        clearInterval(portfolioInterval);
        clearInterval(growthInterval);
      };
    }
  }, [isInView]);

  return (
    <div className="w-full">
      {/* Header Section (without background image) */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header with Logo and Decoration */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="h-0.5 w-12 bg-amber-800"></div>
              <h2 className="text-amber-800 font-semibold text-lg uppercase tracking-wider">
                METRICES
              </h2>
              <div className="h-0.5 w-12 bg-amber-800"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Here is Why Our Team
              <br />
              Is Industry-Famous!
            </h1>
          </div>
        </div>
      </div>

      {/* Metrics Section (with background image) */}
      <div className="relative" ref={ref}>
        {/* Background Image with Overlay */}
        <div className="absolute bg-black inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/transforms.jpeg)",
              opacity: "0.5",
            }}
          />
        </div>

        {/* Metrics Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <motion.h3 className="text-4xl font-bold mb-2">
                {clientsCount}+
              </motion.h3>
              <p className="text-xl">Satisfied Clients</p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <motion.h3 className="text-4xl font-bold mb-2">
                {projectsCount}+
              </motion.h3>
              <p className="text-xl">Active Project</p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <motion.h3 className="text-4xl font-bold mb-2">
                {portfolioCount}+
              </motion.h3>
              <p className="text-xl">Product Portfolio</p>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <motion.h3 className="text-4xl font-bold mb-2">
                {growthCount}%
              </motion.h3>
              <p className="text-xl">Company YOY Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsSection;