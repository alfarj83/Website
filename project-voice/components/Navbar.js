import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  // Utility function to determine if the link is active
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link href="/" passHref>
          <a className="navbar-brand fw-bold text-primary">Project Voice</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" passHref>
                <a className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/research-database" passHref>
                <a className={`nav-link ${isActive('/research-database') ? 'active' : ''}`}>Research Database</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/code-database" passHref>
                <a className={`nav-link ${isActive('/code-database') ? 'active' : ''}`}>Code Database</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/sign-up" passHref>
                <a className="btn btn-primary">Sign Up</a>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link href="/login" passHref>
                <a className="btn btn-primary">Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
