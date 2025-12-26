import React, { useEffect } from 'react';
import { ChevronLeft, Calendar, Building2, Eye, FileText, Share2 } from 'lucide-react';

interface NotificationDetailProps {
  onBack: () => void;
}

const NotificationDetail: React.FC<NotificationDetailProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Header */}
      <div className="sticky top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 px-4 h-14 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 active:bg-slate-200 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>
        <span className="text-lg font-bold text-slate-800">通知详情</span>
        <button className="p-2 -mr-2 rounded-full hover:bg-slate-100 transition-colors">
          <Share2 className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 max-w-2xl mx-auto">
        {/* Title Section */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-1 bg-red-50 text-red-600 px-2.5 py-1 rounded-md mb-3">
             <FileText className="w-3.5 h-3.5" />
             <span className="text-xs font-bold">重要通知</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 leading-snug tracking-tight">
            关于调整2024年度社会保险缴费基数上下限的通知
          </h1>
          
          <div className="flex items-center space-x-4 mt-4 text-xs text-slate-500">
            <div className="flex items-center">
              <Building2 className="w-3.5 h-3.5 mr-1" />
              <span>江阳区社保中心</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              <span>2024-06-15</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-3.5 h-3.5 mr-1" />
              <span>12,305</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 w-full mb-6"></div>

        {/* Article Body */}
        <div className="space-y-6 text-slate-700 leading-relaxed text-justify">
          <p className="indent-8 font-medium text-slate-900/90">
            各参保单位、灵活就业人员：
          </p>
          <p>
            根据四川省统计局发布的2023年全省城镇全部单位就业人员平均工资数据，现就我区2024年度社会保险缴费基数上下限调整有关事项通知如下：
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 my-4">
             <h3 className="font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-3">
               一、缴费基数标准
             </h3>
             <ul className="space-y-3 text-sm">
               <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-200">
                 <span className="text-slate-500">缴费基数上限</span>
                 <span className="font-bold text-slate-900">22,155 元/月</span>
               </li>
               <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-200">
                 <span className="text-slate-500">缴费基数下限</span>
                 <span className="font-bold text-slate-900">4,431 元/月</span>
               </li>
               <li className="flex justify-between items-center py-2">
                 <span className="text-slate-500">全口径平均工资</span>
                 <span className="font-bold text-slate-900">7,385 元/月</span>
               </li>
             </ul>
          </div>

           <h3 className="font-bold text-slate-900 text-lg">
             二、执行时间
           </h3>
           <p>
             新的缴费基数上下限自<span className="font-bold text-blue-600 mx-1">2024年1月1日</span>起执行。
           </p>
           <p>
             已按原基数缴纳了2024年1月至调整当月社会保险费的参保单位和人员，将统一进行差额补收或退费处理。请各参保单位及时核对本单位职工缴费情况，确保足额缴纳。
           </p>

           <h3 className="font-bold text-slate-900 text-lg">
             三、灵活就业人员缴费档次
           </h3>
           <p>
             灵活就业人员可根据自身经济能力，在全口径平均工资的60%至300%之间自愿选择缴费档次。具体缴费标准详见附表。
           </p>

           <div className="bg-blue-50/50 rounded-lg p-4 text-sm text-blue-800 border border-blue-100 mt-2">
             <span className="font-bold block mb-1">温馨提示：</span>
             建议大家通过“江阳人社”APP或微信小程序进行线上办理，避免线下排队等候。如有疑问，请拨打服务热线 12333。
           </div>
        </div>

        <div className="mt-10 mb-20 text-right">
           <p className="text-sm font-bold text-slate-900">江阳区社会保险事务中心</p>
           <p className="text-xs text-slate-500 mt-1">2024年6月15日</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
