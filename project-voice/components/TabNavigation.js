export function TabNavigation({ activeTab, setActiveTab }) {
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
  