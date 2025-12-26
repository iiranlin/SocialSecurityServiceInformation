import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeaderTitleProps {
  isScrolled: boolean;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ isScrolled }) => {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 px-4 h-14 flex items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 text-slate-800' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className={`p-1.5 rounded-full mr-2 transition-colors ${
        isScrolled ? 'bg-sky-50' : 'bg-white/20 backdrop-blur-sm'
      }`}>
        <ShieldCheck className={`w-5 h-5 ${isScrolled ? 'text-primary' : 'text-white'}`} />
      </div>
      <span className={`text-lg font-bold tracking-tight ${isScrolled ? 'text-slate-800' : 'text-white drop-shadow-md'}`}>
        江阳区社保服务
      </span>
    </div>
  );
};

export default HeaderTitle;