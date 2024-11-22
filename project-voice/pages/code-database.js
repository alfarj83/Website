import Navbar from '../components/Navbar';
import { HeroSectionCode } from '../components/HeroSection';
import { TabNavigationCode } from '../components/TabNavigation';
import { SearchBar } from '../components/SearchFilter';
import { FilterSidebar } from '../components/SearchFilter';
import { AddExperimentForm } from '../components/Forms';
import { ExperimentList } from '../components/DatabaseList';
import { useState } from 'react';
import '../styles/code-database.css'; 
import '../scripts/code-script'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CodeDatabasePage() {
  const [activeTab, setActiveTab] = useState("view");
  const experiments = [
    {
      title: "Experiment 1",
      date: "2024-11-18",
      link: "#",
      linkText: "GitHub Link",
      notes: "This is a sample experiment.",
      files: "3 Files (Python, Jupyter)",
      tags: ["Machine Learning", "Python"],
    },
  ];

  const Tabs = ({ activeTab, setActiveTab, children }) => {
    return (
      <div className="tab-container">
        <TabNavigationCode activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="tab-content">{children(activeTab)}</div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <HeroSectionCode />
      <div className="container">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
          {(activeTab) => (
            <>
              {activeTab === "view" && (
                <div>
                    <SearchBar /> {/* Add SearchBar here */}
                    <div className="d-flex">
                    <FilterSidebar />
                    <ExperimentList experiments={experiments} />
                    </div>
                </div>
              )}
              {activeTab === "add" && <AddExperimentForm />}
            </>
          )}
        </Tabs>
      </div>
    </>
  );
}

