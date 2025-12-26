import React from 'react';
import { Search, CloudSun } from 'lucide-react';

interface BannerProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Banner: React.FC<BannerProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full pb-20 overflow-hidden bg-gradient-to-br from-blue-600 to-sky-500 shadow-xl z-0">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-sky-300/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Background Image (Blended) */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-20 pb-12 text-white">
        <div className="flex justify-between items-start mb-6">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-2 opacity-90">
              <span className="text-xs font-medium tracking-widest bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-sm">
                智慧人社
              </span>
              <div className="flex items-center text-xs">
                 <CloudSun className="w-3.5 h-3.5 mr-1" />
                 <span>24°C 多云</span>
              </div>
            </div>
            <h1 className="text-3xl font-extrabold shadow-black drop-shadow-md tracking-tight leading-tight">
              江阳区社保<br/>
              <span className="text-sky-100">便民服务平台</span>
            </h1>
          </div>
        </div>

        {/* Glassmorphism Search Bar */}
        <div className="relative max-w-md w-full animate-fade-in-up delay-100 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-sky-100/70 group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="搜索服务，如：养老认证..."
            className="block w-full pl-11 pr-4 py-4 border border-white/20 rounded-2xl leading-5 bg-white/20 backdrop-blur-md text-white placeholder-sky-100/60 focus:outline-none focus:bg-white focus:text-slate-900 focus:placeholder-gray-400 focus:ring-4 focus:ring-sky-500/30 transition-all duration-300 shadow-lg"
          />
        </div>
      </div>

      {/* Wave SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#f8fafc]"></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;