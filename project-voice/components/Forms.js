export function AddResearchForm() {
    return (
      <form>
        <div className="mb-4">
          <label className="form-label fw-bold">Title</label>
          <input type="text" className="form-control" placeholder="Enter research title" />
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label fw-bold">Journal/Book Title</label>
            <input type="text" className="form-control" placeholder="Enter journal or book title" />
          </div>
          <div className="col-md-3">
            <label className="form-label fw-bold">Published Year</label>
            <select className="form-select">
              <option selected>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label fw-bold">Published Month</label>
            <select className="form-select">
              <option selected>January</option>
              {/* Add more months */}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold">Annotation/Short Summary</label>
          <textarea className="form-control" rows="4" placeholder="Enter a brief summary of the research"></textarea>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-lg">Save Research Entry</button>
        </div>
      </form>
    );
  }
  