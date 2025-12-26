import React from 'react';
import { ChevronRight, Flame, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
  onClick: (id: number) => void;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, onClick, index }) => {
  // Staggered animation delay based on index
  const animationDelay = `${index * 50}ms`;

  return (
    <div 
      onClick={() => onClick(item.id)}
      style={{ animationDelay }}
      className="bg-white rounded-2xl p-4 mb-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-slate-100/80 active:scale-[0.98] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-sky-100/50 hover:border-sky-200 group relative animate-fade-in-up-short opacity-0 fill-mode-forwards"
    >
      <div className="flex items-start">
        {/* Left Side Image with Shadow */}
        <div className="w-24 h-24 flex-shrink-0 relative rounded-xl overflow-hidden shadow-md shadow-slate-200">
          <img 
            src={item.imageUrl} 
            alt={item.listTitle}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {item.isHot && (
            <div className="absolute top-0 left-0 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-lg shadow-sm">
              HOT
            </div>
          )}
        </div>
        
        {/* Right Side Content */}
        <div className="flex-1 ml-4 flex flex-col h-24 justify-between">
          <div>
            <div className="flex justify-between items-start">
               <h3 className="text-slate-800 font-bold text-[15px] leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {item.listTitle}
              </h3>
            </div>
            
            {/* Tag */}
            <div className="mt-2">
              <span className={`inline-flex items-center text-[10px] px-2 py-0.5 rounded-md border ${
                item.isHot 
                  ? 'bg-orange-50 text-orange-600 border-orange-100' 
                  : 'bg-slate-50 text-slate-500 border-slate-100'
              }`}>
                {item.isHot && <Flame className="w-2.5 h-2.5 mr-1 fill-current" />}
                {item.tag}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-50 pt-2 mt-1">
             <span className="text-[11px] text-slate-400 font-medium group-hover:text-primary/70 transition-colors">
               立即办理
             </span>
             <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;