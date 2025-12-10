import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, BookOpen } from 'lucide-react';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <header className="w-full bg-white dark:bg-[#1b1b1d] pt-16 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Humanoid <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">AI Book</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              The comprehensive guide to building, programming, and understanding the future of modern humanoid robotics.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                to="/docs/intro"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-primary-500/30 hover:-translate-y-1"
              >
                Start Learning <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end relative">
             <div className="relative w-full max-w-lg aspect-square">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/20 rounded-full blur-[100px]" />
                
                {/* Robot Image */}
                <img
                  src="/robot.png"
                  alt="Humanoid Robot"
                  className="relative z-10  dark:border-gray-700 object-cover transform hover:scale-[1.02] transition-transform duration-500"
                />
             </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#161617]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-white" />}
              title="Comprehensive Guide"
              description="From basic bipedal locomotion to advanced vision-language-action models. Everything you need to know."
            />
             <FeatureCard
              icon={<Zap className="w-6 h-6 text-white" />}
              title="Modern Tech Stack"
              description="Learn to use ROS 2, NVIDIA Isaac Sim, and Python to control real-world robotics hardware efficiently."
            />
             <FeatureCard
              icon={<Cpu className="w-6 h-6 text-white" />}
              title="AI Powered Assistance"
              description="Stuck on a concept? Use our integrated Humanoid CLI chatbot to clarify complex topics instantly."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-white dark:bg-[#242526] shadow-sm border border-gray-100 dark:border-[#303846] hover:shadow-md transition-shadow">
    <div className="mb-4 bg-gradient-to-br from-primary-500 to-blue-600 w-12 h-12 flex items-center justify-center rounded-xl shadow-lg shadow-primary-500/20">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);
