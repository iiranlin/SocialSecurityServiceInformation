import React, { useEffect } from 'react';
import { ChevronLeft, Phone, FileText, Calendar, Clock, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface DetailProps {
  item: ServiceItem;
  onBack: () => void;
}

const Detail: React.FC<DetailProps> = ({ item, onBack }) => {
  
  // Scroll to top when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Sticky Header - Clean and standard */}
      <div className="bg-white/90 backdrop-blur-md px-4 h-14 border-b border-gray-100 flex items-center sticky top-0 z-30 shadow-sm transition-all">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-600 active:text-primary transition-colors pr-4 py-2"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium text-sm ml-0.5">返回</span>
        </button>
        <h2 className="text-slate-800 font-bold truncate ml-2 flex-1 text-center pr-12 text-[15px]">
          详情信息
        </h2>
      </div>

      <div className="flex-1 pb-32">
        {/* Immersive Hero Image Section */}
        <div className="relative w-full h-[35vh] min-h-[240px]">
          <img 
            src={item.imageUrl} 
            alt={item.listTitle}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for visual transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-black/10"></div>
          
          {/* Official Badge */}
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md border border-white/20 text-white text-[10px] px-2.5 py-1 rounded-full flex items-center shadow-lg">
            <ShieldCheck className="w-3 h-3 mr-1 text-sky-300" />
            江阳社保 · 官方发布
          </div>
        </div>

        {/* Floating Title Card */}
        <div className="relative px-4 -mt-16 z-10">
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-white">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-sky-50 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-sky-100">
                办事指南
              </span>
              <span className="bg-gray-50 text-gray-400 text-[10px] px-2 py-0.5 rounded border border-gray-100 flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                更新于 2024
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-800 leading-snug tracking-tight">
              {item.listTitle}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 mt-6 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4 border-l-4 border-primary pl-3">
              <FileText className="w-5 h-5 text-primary mr-2" />
              <h3 className="font-bold text-slate-800 text-lg">事项说明</h3>
            </div>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-slate-600 leading-8 text-[15px] whitespace-pre-line text-justify">
                {item.detailContent}
              </p>
            </div>
          </div>

          {/* Contact Card - Themed & Animated */}
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-6 shadow-lg shadow-blue-200 text-white relative overflow-hidden group">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-1">咨询服务热线</h3>
                  <div className="flex items-center text-blue-100 text-xs opacity-90">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    <span>工作日 9:00 - 17:00 (参考)</span>
                  </div>
                </div>
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-white/10 rounded-xl p-1 pr-2 border border-white/20">
                <div className="px-4 py-2 font-mono text-xl font-bold tracking-wider">
                  {item.phoneNumber}
                </div>
                <a 
                  href={`tel:${item.phoneNumber}`}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold shadow-md active:scale-95 transition-transform flex items-center hover:bg-blue-50"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 fill-current animate-pulse" />
                  一键拨号
                </a>
              </div>
              <p className="text-[10px] text-blue-100 mt-3 text-center opacity-80">
                点击上方按钮即可直接拨打科室电话
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button with Glassmorphism */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-20 max-w-md mx-auto">
        <button 
          onClick={onBack}
          className="w-full bg-slate-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-slate-200 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 hover:bg-slate-700"
        >
           <ChevronLeft className="w-4 h-4" />
           <span>返回首页</span>
        </button>
      </div>
    </div>
  );
};

export default Detail;