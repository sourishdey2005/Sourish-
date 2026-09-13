import React, { useRef, useEffect } from 'react';
import { NAVIGATION_TABS, SectionTab } from '../navigationTabs';

interface MinimalTabBarProps {
  activeTab: SectionTab;
  onSelectTab: (tab: SectionTab) => void;
}

const MinimalTabBar: React.FC<MinimalTabBarProps> = ({ activeTab, onSelectTab }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view on mobile if needed
  useEffect(() => {
    if (containerRef.current) {
      const activeEl = containerRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          ref={containerRef}
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar scroll-smooth"
        >
          {NAVIGATION_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                data-active={isActive}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-indigo-400' : 'text-slate-400'} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    isActive ? 'bg-slate-800 text-indigo-300' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MinimalTabBar;
