import React from 'react';
import { Search, CloudSun } from 'lucide-react';

interface BannerProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Banner: React.FC<BannerProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full pb-24 overflow-hidden shadow-xl z-0 bg-slate-800">
      
      {/* Background Image - High Visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/40 to-slate-900/60 mix-blend-multiply"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-24 pb-8 text-white flex flex-col items-center text-center">
        <div className="animate-fade-in-up w-full max-w-lg mx-auto">
          <div className="flex justify-center items-center space-x-2 mb-4 opacity-95">
            <span className="text-xs font-bold tracking-[0.2em] bg-white/20 px-3 py-1 rounded-sm border border-white/30 backdrop-blur-md uppercase">
              智慧人社
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide leading-tight mb-8 drop-shadow-lg">
            <span className="block text-xl md:text-2xl font-medium mb-1 tracking-widest opacity-90">江阳区社保</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-sky-50 text-shadow-sm">
              服务资讯
            </span>
          </h1>

          {/* Official Style Search Bar */}
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-sky-200 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={onSearchChange}
              placeholder="搜索服务事项，如：养老认证..."
              className="block w-full pl-12 pr-6 py-4 rounded-lg leading-5 bg-white/95 backdrop-blur-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 shadow-2xl border-2 border-transparent focus:border-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Clean Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8fafc] rounded-t-[2rem] z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"></div>
    </div>
  );
};

export default Banner;