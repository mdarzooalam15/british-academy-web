import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import "./App.css";
import Gallery from "./pages/Gallery";
import Admission from "./pages/Admission";
import Leadership from "./pages/Leadership";
function Home() {
  return (
    <>
      <section className="hero" id="home">
        <p className="eyebrow">WELCOME TO BRITISH ACADEMY</p>
        <h1>
          A Foundation for a <em>Brighter Future.</em>
        </h1>
        <p className="hero-description">
          Nurturing young minds through learning, curiosity and a strong
          foundation for tomorrow.
        </p>
        <div className="hero-buttons">
          <Link to="/admission" className="primary-btn">
            Admission Enquiry
          </Link>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="about-content">
          <p className="eyebrow">DISCOVER BRITISH ACADEMY</p>

          <h2>
            Education That Builds
            <em> a Brighter Tomorrow.</em>
          </h2>

          <p className="about-description">
            Welcome to British Academy, located in Raja Bagicha, Rafiganj,
            Aurangabad, Bihar. We provide educational opportunities from Nursery
            to Class X in an environment that encourages curiosity, creativity
            and continuous learning.
          </p>

          <div className="about-details">
            <div>
              <span>01</span>
              <p>Learning with curiosity</p>
            </div>

            <div>
              <span>02</span>
              <p>Growing with confidence</p>
            </div>

            <div>
              <span>03</span>
              <p>Building strong foundations</p>
            </div>
          </div>

          <Link to="/leadership" className="about-link">
            Meet Our Leadership <span>↗</span>
          </Link>
        </div>

        <div className="about-image">
          <img
            src="https://britishacademy.vercel.app/assets/campus/kids-dance-annual.png"
            alt="Students learning in a classroom"
          />
          <div className="about-image-caption">
            <strong>BRITISH ACADEMY</strong>
            <span>A Foundation for a Brighter Future</span>
          </div>
        </div>
      </section>

      <section className="glance">
        <div>
          <span>01</span>
          <h3>Nursery – X</h3>
          <p>Classes Available</p>
        </div>
        <div>
          <span>02</span>
          <h3>Rafiganj</h3>
          <p>Aurangabad, Bihar</p>
        </div>
        <div>
          <span>03</span>
          <h3>Smart Classrooms</h3>
          <p>Modern Learning Facilities</p>
        </div>
        <div>
          <span>04</span>
          <h3>Computer Lab</h3>
          <p>Technology-Based Learning</p>
        </div>
      </section>
      <section className="school-life">
        <div className="school-life-image">
          <img src="https://britishacademy.vercel.app/assets/campus/director-faculty-stage.png" />
        </div>

        <div className="school-life-content">
          <p className="eyebrow">LEARNING BEYOND BOOKS</p>
          <h2>Inspiring Curiosity. Encouraging Discovery.</h2>
          <p>
            At British Academy, we believe that learning is a journey built
            through curiosity, creativity and meaningful experiences.
          </p>
          <Link to="/gallery" className="primary-btn">
            Explore Our Gallery
          </Link>
        </div>
      </section>
      <section className="school-stats">
        <div className="stats-heading">
          <p className="eyebrow">BRITISH ACADEMY</p>
          <h2>Building Strong Foundations for Tomorrow.</h2>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <h3>Nursery – X</h3>
            <p>Classes Offered</p>
          </div>

          <div className="stat-item">
            <h3>4+</h3>
            <p>Learning Highlights</p>
          </div>

          <div className="stat-item">
            <h3>Smart</h3>
            <p>Classroom Learning</p>
          </div>

          <div className="stat-item">
            <h3>Modern</h3>
            <p>Computer Education</p>
          </div>
        </div>
      </section>
      <section className="why-us">
        <p className="eyebrow">WHY CHOOSE US</p>
        <h2>A Place to Learn, Grow and Discover.</h2>
        <div className="why-grid">
          <div>
            <h3>Smart Classrooms</h3>
            <p>Modern classroom facilities for engaging learning.</p>
          </div>
          <div>
            <h3>Computer Lab</h3>
            <p>Opportunities to develop essential computer skills.</p>
          </div>
          <div>
            <h3>Nursery to Class X</h3>
            <p>Educational journey from early learning to Class X.</p>
          </div>
        </div>
      </section>
      <section className="home-cta">
        <p className="eyebrow">YOUR CHILD'S JOURNEY STARTS HERE</p>
        <h2>Give Your Child a Strong Start.</h2>
        <p>
          Discover learning opportunities at British Academy, from Nursery to
          Class X.
        </p>
        <Link to="/admission" className="cta-button">
          Enquire About Admission
        </Link>
      </section>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <header className="navbar">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo/logo.jpg"
            alt="British Academy Logo"
            className="site-logo"
          />
          <span>BRITISH ACADEMY</span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <a href="/#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <NavLink to="/leadership" onClick={() => setMenuOpen(false)}>
            Leadership
          </NavLink>

          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>

          <NavLink to="/admission" onClick={() => setMenuOpen(false)}>
            Admission
          </NavLink>

          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </main>

      <footer id="contact">
        <div className="footer-brand">
          <img
            src="/logo/logo.jpg"
            alt="British Academy Logo"
            className="site-logo"
          />
          <h2>BRITISH ACADEMY</h2>
        </div>

        <p>Raja Bagicha, Rafiganj, Aurangabad, Bihar – 824125</p>

        <div className="footer-contact">
          <a
            href="mailto:britishacademyrajabagicha@gmail.com"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 7 9-7" />
            </svg>
            <span>britishacademyrajabagicha@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/britishacademy_rafiganj_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
            <span>Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@rafiganjbritishacademy8158"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="5" width="20" height="14" rx="4" />
              <path d="m10 9 5 3-5 3z" />
            </svg>
            <span>YouTube</span>
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} British Academy. All rights reserved.
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
