import React from 'react';
import { UserCheck, Building2, FileHeart, HelpCircle, Bell, ChevronRight } from 'lucide-react';

interface QuickNavProps {
  onSelectService: (id: number) => void;
  onOpenNotification: () => void;
}

const QuickNav: React.FC<QuickNavProps> = ({ onSelectService, onOpenNotification }) => {
  const quickItems = [
    { id: 1, icon: HelpCircle, label: "政策咨询", color: "text-blue-600", gradient: "from-blue-100 to-blue-50" },
    { id: 3, icon: UserCheck, label: "资格认证", color: "text-purple-600", gradient: "from-purple-100 to-purple-50" },
    { id: 7, icon: Building2, label: "企业参保", color: "text-orange-600", gradient: "from-orange-100 to-orange-50" },
    { id: 8, icon: FileHeart, label: "工伤待遇", color: "text-rose-600", gradient: "from-rose-100 to-rose-50" },
  ];

  return (
    <div className="px-4 -mt-10 relative z-20 mb-6 animate-fade-in-up delay-200">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 p-1 border border-white">
        
        {/* Grid Area */}
        <div className="grid grid-cols-4 gap-2 p-3 pb-4">
          {quickItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onSelectService(item.id)}
              className="flex flex-col items-center space-y-2 group"
            >
              <div className={`p-3.5 rounded-2xl bg-gradient-to-b ${item.gradient} shadow-sm group-active:scale-95 transition-transform duration-200 relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 mx-4"></div>

        {/* Notification / News Ticker */}
        <button 
          onClick={onOpenNotification}
          className="w-full flex items-center px-3 py-3 bg-slate-50/50 rounded-b-3xl hover:bg-orange-50/50 active:bg-orange-100/50 transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-center flex-shrink-0 mr-2.5">
             <span className="bg-orange-100/80 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center border border-orange-200/50">
               <Bell className="w-2.5 h-2.5 mr-1 fill-current" />
               通知
             </span>
          </div>
          <div className="flex-1 overflow-hidden relative h-5 text-left">
             <div className="absolute inset-0 flex items-center">
                <span className="text-xs text-slate-600 truncate group-hover:text-slate-900 transition-colors">
                  关于调整2024年社保缴费基数的通知...
                </span>
             </div>
          </div>
          <div className="flex-shrink-0 ml-1">
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
        </button>

      </div>
    </div>
  );
};

export default QuickNav;