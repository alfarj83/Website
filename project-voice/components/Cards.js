import Image from 'next/image';

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
  
  export function AuthCardSignUp() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <Image src="/project-voice-logo.png" alt="Project Voice Logo" className="logo" width="200" height="200" />
          <h2 className="auth-header">Create Account</h2>
          <form>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-input" placeholder="Create a password" />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-input" placeholder="Confirm your password" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
            <p className="text-center mt-4 text-muted">
              Already have an account? <a href="/login" className="text-primary">Log in</a>
            </p>
          </form>
        </div>
      </div>
    );
  }

  export default function AuthCardLogIn() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <Image src="/project-voice-logo.png" alt="Project Voice Logo" className="logo" width="200" height="200" />
          <h2 className="auth-header">Welcome Back</h2>
  
          <form>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-input" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <p className="text-center mt-4">
              <a href="#" className="text-primary">Forgot password?</a>
            </p>
            <p className="text-center mt-4 text-muted">
              Don&apos;t have an account? <a href="/sign-up" className="text-primary">Sign up</a>
           </p>
          </form>
        </div>
      </div>
    );
  }