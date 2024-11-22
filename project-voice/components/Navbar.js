import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  // Utility function to determine if the link is active
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <Link href="/" className="navbar-brand fw-bold text-primary">
          Project Voice
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Home */}
            <li className="nav-item">
              <Link 
                href="/" 
                className={`nav-link ${isActive('/') ? 'active text-primary fw-bold' : ''}`}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link 
                href="/about" 
                className={`nav-link ${isActive('/about') ? 'active text-primary fw-bold' : ''}`}
              >
                About
              </Link>
            </li>

            {/* Research Database */}
            <li className="nav-item">
              <Link 
                href="/research-database" 
                className={`nav-link ${isActive('/research-database') ? 'active text-primary fw-bold' : ''}`}
              >
                Research Database
              </Link>
            </li>

            {/* Code Database */}
            <li className="nav-item">
              <Link 
                href="/code-database" 
                className={`nav-link ${isActive('/code-database') ? 'active text-primary fw-bold' : ''}`}
              >
                Code Database
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/sign-up" className="btn btn-primary">
                Sign Up
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link href="/login" className="btn btn-outline-primary">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
