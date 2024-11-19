export function ExperimentList({ experiments }){
    return (
      <div className="experiment-entries">
        {experiments.map((experiment, index) => (
          <div key={index} className="card experiment-card mb-4">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="card-title fw-bold mb-0">{experiment.title}</h5>
                <span className="text-muted">{experiment.date}</span>
              </div>
              <div className="mb-3">
                <i className="fa-brands fa-github me-2"></i>
                <a href={experiment.link} className="text-decoration-none">{experiment.linkText}</a>
              </div>
              <p className="mb-3">{experiment.notes}</p>
              <div className="mb-3">
                <div className="d-flex gap-2 mb-2">
                  <i className="fa-regular fa-file-code text-primary"></i>
                  <span>{experiment.files}</span>
                </div>
              </div>
              <div className="mb-3">
                {experiment.tags.map((tag, i) => (
                  <span key={i} className="tag-badge">{tag}</span>
                ))}
              </div>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-primary btn-sm">
                  <i className="fa-solid fa-download me-1"></i>
                  Download Files
                </a>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  <i className="fa-solid fa-code me-1"></i>
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }