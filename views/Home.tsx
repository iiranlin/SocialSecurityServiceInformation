import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import HeaderTitle from '../components/HeaderTitle';
import ServiceCard from '../components/ServiceCard';
import QuickNav from '../components/QuickNav';
import { SERVICE_DATA } from '../data';

interface HomeProps {
  onSelectService: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectService }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Search Filtering
  const filteredData = SERVICE_DATA.filter(item => 
    item.listTitle.includes(searchTerm) || 
    item.tag.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-8 font-sans">
      
      {/* Inject custom animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up-short {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-up-short {
          animation: fade-in-up-short 0.5s ease-out forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>

      {/* Sticky Header with Scroll Effect */}
      <HeaderTitle isScrolled={isScrolled} />
      
      {/* Rich Banner with Search */}
      <Banner 
        searchTerm={searchTerm} 
        onSearchChange={(e) => setSearchTerm(e.target.value)} 
      />
      
      {/* Quick Access Grid */}
      <QuickNav onSelectService={onSelectService} />

      {/* Main Content List */}
      <div className="px-4 relative z-10">
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-lg font-bold text-slate-800 flex items-center">
             <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-sky-400 rounded-full mr-2.5 shadow-sm"></span>
            {searchTerm ? '搜索结果' : '热门服务'}
          </h2>
          <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
            共 {filteredData.length} 项
          </span>
        </div>

        <div className="flex flex-col min-h-[300px]">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <ServiceCard 
                key={item.id} 
                item={item} 
                index={index}
                onClick={onSelectService} 
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400 animate-fade-in-up">
              <div className="bg-white p-6 rounded-full shadow-sm mb-4">
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-500">未找到相关服务</p>
              <p className="text-xs mt-1 opacity-70">请尝试更换关键词搜索</p>
            </div>
          )}
        </div>
        
        {/* Elegant Footer */}
        <div className="mt-10 mb-6 flex flex-col items-center justify-center opacity-60">
           <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <div className="w-4 h-4 border-2 border-gray-400 rounded-full border-t-transparent animate-spin"></div>
           </div>
           <p className="text-[10px] text-gray-400 font-medium tracking-wide">
             江阳区社会保险中心 · 用心服务
           </p>
        </div>
      </div>
    </div>
  );
};

export default Home;