import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/profile.png";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="site-loader">
        <div className="loader-content">

          <div className="loader-mark">
            AA
          </div>

          <h1>AHAMED ASFAR</h1>

          <p>SOFTWARE DEVELOPER</p>

          <div className="loader-line">
            <span></span>
          </div>

        </div>
      </div>
    );
  }
  return (
    <>
      <div
        className="app"
      >

        <nav>
          <h2>Ahamed Asfar</h2>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </nav>

        <main>
          <section id="home">
            <div className="hero-content">

              <div className="hero-text">

                <p className="intro">Hello, I'm</p>

                <h1>Ahamed Asfar</h1>

                <h2>Software Developer</h2>

                <p className="hero-description">
                  Building web applications, automation tools, and practical
                  software solutions using modern development technologies.
                </p>

                <div className="hero-buttons">
                  <a href="#projects" className="btn primary-btn">
                    View Projects
                  </a>

                  <a href="#contact" className="btn secondary-btn">
                    Contact Me
                  </a>

                  <a
                    href="/Ahamed_Asfar_Resume_v2.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn resume-btn"
                  >
                    Resume
                  </a>
                </div>

                <div className="availability">
                  <span className="availability-dot"></span>
                  Open to Software Development Opportunities
                </div>

              </div>

              <div className="hero-image">
                <img src={profile} alt="Ahamed Asfar" />
              </div>

            </div>
          </section>

          <section id="about">
            <h2>About Me</h2>

            <div className="about-layout">

              <div className="about-content">
                <p>
                  I am a Software Developer focused on building reliable web
                  applications, automation solutions, and practical software
                  products. My experience spans frontend development, backend
                  technologies, databases, APIs, and software automation.
                </p>

                <p>
                  I work with Java, Python, JavaScript, React, Node.js, and SQL,
                  while using modern development tools and AI-assisted workflows
                  to improve development efficiency and problem-solving.
                </p>
              </div>

              <div className="about-focus">

                <div className="focus-item">
                  <span>01</span>
                  <div>
                    <h3>Web Development</h3>
                    <p>Responsive and user-focused web applications.</p>
                  </div>
                </div>

                <div className="focus-item">
                  <span>02</span>
                  <div>
                    <h3>Automation</h3>
                    <p>Practical solutions for repetitive workflows.</p>
                  </div>
                </div>

                <div className="focus-item">
                  <span>03</span>
                  <div>
                    <h3>Software Solutions</h3>
                    <p>Applications designed around real-world requirements.</p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="skills">
            <h2>Technical Skills</h2>

            <div className="skills-layout">

              <div className="skills-group">
                <div className="skills-group-header">
                  <span>01</span>
                  <h3>Programming</h3>
                </div>

                <div className="skill-tags">
                  <span>Java</span>
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>SQL</span>
                </div>
              </div>

              <div className="skills-group">
                <div className="skills-group-header">
                  <span>02</span>
                  <h3>Web Development</h3>
                </div>

                <div className="skill-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                </div>
              </div>

              <div className="skills-group">
                <div className="skills-group-header">
                  <span>03</span>
                  <h3>Data & APIs</h3>
                </div>

                <div className="skill-tags">
                  <span>Oracle SQL</span>
                  <span>MongoDB</span>
                  <span>REST APIs</span>
                  <span>Socket.IO</span>
                </div>
              </div>

              <div className="skills-group">
                <div className="skills-group-header">
                  <span>04</span>
                  <h3>Development Tools</h3>
                </div>

                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>Vite</span>
                </div>
              </div>

              <div className="skills-group">
                <div className="skills-group-header">
                  <span>05</span>
                  <h3>Development Practices</h3>
                </div>

                <div className="skill-tags">
                  <span>API Integration</span>
                  <span>Automation</span>
                  <span>AI-Assisted Development</span>
                </div>
              </div>

            </div>
          </section>

          <section id="projects">
            <h2>Selected Projects</h2>

            <div className="projects-grid">

              <div className="project-card">
                <div className="project-visual certificate-visual">
                  <div className="certificate-icon">✓</div>
                  <div className="certificate-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="verified-badge">VERIFIED</div>
                </div>

                <h3>Decentralized Certificate Verification System</h3>

                <p>
                  Developed a blockchain-based application for issuing and
                  verifying academic certificates, with a focus on secure
                  verification and tamper-resistant records.
                </p>

                <div className="project-tech">
                  <span>Blockchain</span>
                  <span>JavaScript</span>
                  <span>Web</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-visual whatsapp-visual">
                  <div className="chat-window">
                    <div className="chat-header">WhatsApp Automation</div>

                    <div className="message message-one">
                      Message sent successfully
                    </div>

                    <div className="message message-two">
                      Hello, Customer!
                    </div>

                    <div className="automation-status">
                      ● Automation Active
                    </div>
                  </div>
                </div>
                <h3>WhatsApp Bulk Messaging Automation</h3>

                <p>
                  Developed a Python-based automation solution for sending
                  personalized WhatsApp messages using structured CSV data
                  and dynamic customer information.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>Automation</span>
                  <span>CSV</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-visual portfolio-visual">
                  <div className="browser-window">
                    <div className="browser-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-content">
                      <div className="browser-heading"></div>
                      <div className="browser-line"></div>
                      <div className="browser-line short"></div>
                      <div className="browser-button"></div>
                    </div>
                  </div>
                </div>
                <h3>Personal Portfolio Website</h3>

                <p>
                  Designed and developed a responsive personal portfolio
                  website to present professional experience, technical
                  skills and software projects.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-visual weather-visual">
                  <div className="weather-card">
                    <div className="weather-location">Chennai</div>
                    <div className="weather-icon">☀</div>
                    <div className="temperature">29°</div>
                    <div className="weather-status">Clear Sky</div>
                  </div>
                </div>
                <h3>Weather Application</h3>

                <p>
                  Built a web application that integrates a weather API
                  to retrieve and present real-time weather information
                  through a responsive user interface.
                </p>

                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>REST API</span>
                  <span>CSS</span>
                </div>
              </div>

            </div>
          </section>

          <section id="experience">
            <h2>Professional Experience</h2>

            <div className="experience-card">

              <div className="experience-header">
                <div>
                  <h3>KAR Advertising</h3>
                  <p>Part-Time</p>
                </div>

                <span>2022 – Present</span>
              </div>

              <p className="experience-summary">
                Supporting day-to-day advertising operations through customer
                communication, digital outreach, data handling, and workflow
                automation.
              </p>

              <div className="experience-highlights">

                <div className="experience-highlight">
                  <span>01</span>
                  <div>
                    <h4>Customer & Operations</h4>
                    <p>
                      Managed customer communication and maintained records
                      related to advertising requirements.
                    </p>
                  </div>
                </div>

                <div className="experience-highlight">
                  <span>02</span>
                  <div>
                    <h4>Automation & Outreach</h4>
                    <p>
                      Developed automation workflows to support WhatsApp
                      marketing and customer outreach.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="contact">
            <div className="contact-container">

              <p className="contact-label">LET'S CONNECT</p>

              <h2>Let's build something meaningful.</h2>

              <p className="contact-intro">
                Have an idea, opportunity, or project in mind?
                I'm open to software development opportunities,
                collaborations, and interesting projects.
              </p>

              <div className="contact-actions">

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ahamedasfar0@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action email-action"
                >
                  <div className="contact-action-icon">✉</div>

                  <div>
                    <span className="contact-action-label">Send an Email</span>
                    <span className="contact-action-detail">
                      ahamedasfar0@gmail.com
                    </span>
                  </div>

                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  href="https://wa.me/917339387355"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action whatsapp-action"
                >
                  <div className="contact-action-icon">◉</div>

                  <div>
                    <span className="contact-action-label">WhatsApp Me</span>
                    <span className="contact-action-detail">
                      Start a direct conversation
                    </span>
                  </div>

                  <span className="contact-arrow">↗</span>
                </a>

              </div>

              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/ahamed-asfar-04b9b5256/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Ahamed-asfar"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              <p className="contact-location">
                Chennai, Tamil Nadu · India
              </p>

            </div>
          </section>

          <footer>
            <p>© 2026 Ahamed Asfar. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;