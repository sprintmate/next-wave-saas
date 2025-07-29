import React from 'react';
import { Waves } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg blur-md opacity-20"></div>
        <div className="relative bg-gradient-to-r from-indigo-600 to-teal-500 p-2 rounded-lg">
          <Waves className="w-6 h-6 text-white" />
        </div>
      </div>
      {showText && (
        <div className="text-xl font-bold">
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Next</span>
          <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">Wave</span>
        </div>
      )}
    </div>
  );
};

export default Logo;