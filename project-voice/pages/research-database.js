import { Navbar } from '../components/Navbar';
import { HeroSectionResearch } from '../components/HeroSection';
import { TabNavigation } from '../components/TabNavigation';
import { SearchBar } from '../components/SearchFilter';
import { FilterSidebar } from '../components/SearchFilter';
import { ResearchCard } from '../components/Cards';
import { AddResearchForm } from '../components/Forms';
import { useState } from 'react';

export default function ResearchDatabase() {
  const [activeTab, setActiveTab] = useState('view');
  const researchEntries = [
    {
      title: 'Advanced Neural Networks for Speech Recognition',
      date: 'March 2024',
      journal: 'Journal of Artificial Intelligence, Vol. 45, No. 3',
      summary: 'This research presents a novel approach...',
      tags: ['Filter 1', 'Filter 2', 'Filter 3'],
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSectionResearch />
      <div className="container">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'view' && (
          <>
            <SearchBar />
            <div className="row">
              <div className="col-lg-3">
                <FilterSidebar />
              </div>
              <div className="col-lg-9">
                {researchEntries.map((entry, index) => (
                  <ResearchCard key={index} {...entry} />
                ))}
              </div>
            </div>
          </>
        )}
        {activeTab === 'add' && <AddResearchForm />}
      </div>
    </>
  );
}
