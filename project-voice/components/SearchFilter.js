export function SearchBar() {
    return (
      <div className="search-bar mb-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <input type="text" className="form-control form-control-lg" placeholder="Search research papers..." />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-lg w-100">Search</button>
          </div>
        </div>
      </div>
    );
  }
  
  export function FilterSidebar() {
    return (
      <div className="filter-sidebar">
        <h5 className="fw-bold mb-4">Filters</h5>
        {/* Add filter inputs here */}
        <button className="btn btn-outline-primary w-100">Clear All Filters</button>
      </div>
    );
  }
  