import { useState } from 'react';
import { Header } from './components/Header';
import { TabBar } from './components/TabBar';
import { HelpFab } from './components/HelpFab';
import { SubmitReportSheet } from './components/community/SubmitReportSheet';
import { OverviewPage } from './pages/OverviewPage';
import { MapPage } from './pages/MapPage';
import { NewsPage } from './pages/NewsPage';
import { LearnPage } from './pages/LearnPage';
import { ParentsPage } from './pages/ParentsPage';
import { CommunityPage } from './pages/CommunityPage';
import { useCommunityReports } from './lib/useCommunityReports';
import type { TabId } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [submitOpen, setSubmitOpen] = useState(false);

  const { reports, votedIds, addReport, toggleVote } = useCommunityReports();

  function handleOpenLearn() {
    setActiveTab('learn');
  }

  function handleTabSelect(tab: TabId) {
    setActiveTab(tab);
  }

  const green = activeTab === 'parents';

  return (
    <div className="h-dvh flex flex-col bg-gray-50">
      <Header
        activeTab={activeTab}
        onTabSelect={handleTabSelect}
        onSubmitConcern={() => setSubmitOpen(true)}
        green={green}
      />

      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {activeTab === 'overview' && <OverviewPage onNavigate={handleTabSelect} />}
        {activeTab === 'map' && <MapPage />}
        {activeTab === 'news' && <NewsPage />}
        {activeTab === 'learn' && <LearnPage />}
        {activeTab === 'parents' && <ParentsPage onOpenLearn={handleOpenLearn} />}
        {activeTab === 'community' && (
          <CommunityPage
            reports={reports}
            votedIds={votedIds}
            addReport={addReport}
            toggleVote={toggleVote}
            onSubmitConcern={() => setSubmitOpen(true)}
          />
        )}
      </main>

      <TabBar active={activeTab} onSelect={handleTabSelect} />

      {/* Global: submit a concern sheet */}
      <SubmitReportSheet
        isOpen={submitOpen}
        onClose={() => setSubmitOpen(false)}
        onSubmit={(input) => {
          addReport(input);
          setSubmitOpen(false);
        }}
      />

      {/* Global: floating help button */}
      <HelpFab />
    </div>
  );
}
