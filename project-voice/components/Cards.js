export function ResearchCard({ title, date, journal, summary, tags }) {
    return (
      <div className="card research-card mb-4">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title fw-bold mb-0">{title}</h5>
            <span className="text-muted">{date}</span>
          </div>
          <p className="text-muted mb-3">{journal}</p>
          <p className="mb-3">{summary}</p>
          <div className="mb-3">
            {tags.map((tag, index) => (
              <span key={index} className="tag-badge">{tag}</span>
            ))}
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-primary btn-sm">LaTeX Notes</button>
            <button className="btn btn-outline-primary btn-sm">PDF Notes</button>
          </div>
        </div>
      </div>
    );
  }
  