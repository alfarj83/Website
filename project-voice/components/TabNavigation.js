export function TabNavigationResearch({ activeTab, setActiveTab }) {
    return (
      <div className="custom-tabs d-flex">
        <button
          className={`custom-tab ${activeTab === 'view' ? 'active' : ''}`}
          onClick={() => setActiveTab('view')}
        >
          View Database
        </button>
        <button
          className={`custom-tab ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          Add New Paper
        </button>
      </div>
    );
  }

  export function TabNavigationCode({ activeTab, setActiveTab }) {
    return (
      <div className="custom-tabs d-flex">
        <button
          className={`custom-tab ${activeTab === 'view' ? 'active' : ''}`}
          onClick={() => setActiveTab('view')}
        >
          View Database
        </button>
        <button
          className={`custom-tab ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          Add New Experiment
        </button>
      </div>
    );
  }
  