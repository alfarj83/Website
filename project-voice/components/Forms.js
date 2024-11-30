import { useState } from 'react';

export function AddResearchForm() {
    const [formData, setFormData] = useState({
      title: '',
      journal: '',
      year: '2024',
      month: 'January',
      annotation: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, name: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch('/api/add-research', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          alert('Research entry saved successfully!');
          setFormData({
            title: '',
            journal: '',
            year: '2024',
            month: 'January',
            annotation: '',
          });
        } else {
          alert('Failed to save research entry.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while saving the research entry.');
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label fw-bold">Title</label>
          <input type="text" className="form-control" placeholder="Enter research title" />
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label fw-bold">Journal/Book Title</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter journal or book title" 
              value={formData.title}
              onChange={handleChange}
              />
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
  
  export function AddExperimentForm() {
    return (
      <div className="card custom-card">
        <div className="card-body p-4">
          <form>
            <div className="mb-4">
              <label className="form-label fw-bold">Experiment Name</label>
              <input type="text" className="form-control" placeholder="Enter experiment name" />
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold">GitHub Commit Link</label>
              <div className="input-group">
                <span className="input-group-text">github.com/</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username/repo/commit/hash"
                />
              </div>
              <div className="form-text text-muted">Example: project-voice/experiment/commit/a1b2c3d4</div>
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold">Code Files</label>
              <div className="file-upload mb-3">
                <i className="fa-regular fa-file-code"></i>
                <p className="mb-0">
                  Drag and drop your code files here or click to browse
                </p>
                <small className="text-muted">Accepts .py, .ipynb, .r, .m, and other code files</small>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold">Experiment Notes</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter notes about the experiment setup, parameters, results, or any other relevant information"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold">Tags</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter tags separated by commas"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">Save Code Experiment</button>
            </div>
          </form>
        </div>
      </div>
    );
  }