import { useState } from 'react';
import { Header } from './components/Header';
import { TabBar } from './components/TabBar';
import { OverviewPage } from './pages/OverviewPage';
import { MapPage } from './pages/MapPage';
import { NewsPage } from './pages/NewsPage';
import { LearnPage } from './pages/LearnPage';
import { ParentsPage } from './pages/ParentsPage';
import { CommunityPage } from './pages/CommunityPage';
import type { TabId } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  function handleOpenLearn() {
    setActiveTab('learn');
  }

  function handleTabSelect(tab: TabId) {
    setActiveTab(tab);
  }

  const green = activeTab === 'parents';

  return (
    <div className="h-dvh flex flex-col bg-gray-50">
      <Header activeTab={activeTab} onTabSelect={handleTabSelect} green={green} />

      {/* Main content — fixed height, pages manage their own overflow */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {activeTab === 'overview' && <OverviewPage onNavigate={handleTabSelect} />}
        {activeTab === 'map' && <MapPage />}
        {activeTab === 'news' && <NewsPage />}
        {activeTab === 'learn' && <LearnPage />}
        {activeTab === 'parents' && <ParentsPage onOpenLearn={handleOpenLearn} />}
        {activeTab === 'community' && <CommunityPage />}
      </main>

      {/* Bottom tab bar — mobile only. Desktop uses header nav. */}
      <TabBar active={activeTab} onSelect={handleTabSelect} />
    </div>
  );
}
