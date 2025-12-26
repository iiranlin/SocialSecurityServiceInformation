import React, { useState } from 'react';
import Home from './views/Home';
import Detail from './views/Detail';
import { SERVICE_DATA } from './data';
import { ViewState } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('HOME');
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const handleSelectService = (id: number) => {
    setSelectedServiceId(id);
    setViewState('DETAIL');
  };

  const handleBackToHome = () => {
    setViewState('HOME');
    setSelectedServiceId(null);
  };

  const selectedItem = selectedServiceId 
    ? SERVICE_DATA.find(item => item.id === selectedServiceId) 
    : null;

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen shadow-2xl overflow-hidden">
      {viewState === 'HOME' && (
        <Home onSelectService={handleSelectService} />
      )}
      
      {viewState === 'DETAIL' && selectedItem && (
        <Detail 
          item={selectedItem} 
          onBack={handleBackToHome} 
        />
      )}
    </div>
  );
};

export default App;