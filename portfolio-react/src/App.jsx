import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ProjectGallery from './components/ProjectGallery.jsx'
import CertificateCard from './components/CertificateCard.jsx'
import Footer from './components/Footer.jsx'
import { useLocalStorage } from './components/useLocalStorage.js'
import { site, about, skills, projects, certificates } from './data.js'

function Stat({ label, value }) {
  return (
    <div className="stat">
      <p className="stat__value">{value}</p>
      <p className="stat__label muted">{label}</p>
    </div>
  )
}

function SkillPill({ children }) {
  return <span className="pill">{children}</span>
}

export default function App() {
  const [theme, setTheme] = useLocalStorage('portfolio-theme', 'dark')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const handleProjectImageClick = (project) => {
    setSelectedProject(project)
    setIsGalleryOpen(true)
  }

  const handleCloseGallery = () => {
    setIsGalleryOpen(false)
    setSelectedProject(null)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      // tiny feedback via title
      document.title = 'Copied!'
      setTimeout(() => {
        document.title = 'Portfolio'
      }, 900)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <div id="top">
      <Navbar brand={site.name} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <section className="hero" aria-label="Hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">{site.location}</p>
              <h1 className="h1">
                {site.name} <span className="muted">— {site.role}</span>
              </h1>
              <p className="lead">{site.tagline}</p>

              <div className="hero__actions">
                <a className="btn btn--primary" href="#projects">
                  View projects
                </a>
                <button className="btn btn--ghost" type="button" onClick={copyEmail}>
                  Copy email
                </button>
                {site.resumeUrl && site.resumeUrl !== '#' ? (
                  <a className="btn btn--ghost" href={site.resumeUrl} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                ) : null}
              </div>

              <div className="socials" aria-label="Social links">
                {site.socials.map((s) => (
                  <a key={s.label} className="social" href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hero__media" aria-label="Profile image">
              <img src={site.profileImage} alt="" className="avatar" />
              <div className="hero__card" aria-label="Quick stats">
                {about.highlights.map((h) => (
                  <Stat key={h.label} label={h.label} value={h.value} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="Overview" title={about.title}>
          <div className="grid grid--2">
            <div className="stack">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="body">
                  {p}
                </p>
              ))}
            </div>
            <div className="panel">
              <h3 className="h3">What I do</h3>
              <ul className="checklist">
                <li>Frontend Development: Responsive and interactive UI using React, HTML, CSS, and JavaScript</li>
                <li>Backend Development: REST APIs and backend logic using Java and Spring Boot</li>
                <li>Database Management: Data handling using MySQL</li>
                <li>UI/UX Design: Wireframes and prototypes using Figma</li>
                <li>AI & Python: Training and experimenting with AI models for smart solutions</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Toolbox" title="Skills">
          <div className="pills" aria-label="Skills list">
            {skills.map((s) => (
              <SkillPill key={s}>{s}</SkillPill>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected work" title="Projects">
          <div className="cards">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} onImageClick={handleProjectImageClick} />
            ))}
          </div>
        </Section>

        {selectedProject && (
          <ProjectGallery 
            project={selectedProject} 
            isOpen={isGalleryOpen} 
            onClose={handleCloseGallery} 
          />
        )}

        <Section id="certificates" eyebrow="Credentials" title="Certificates">
          <div className="cards">
            {certificates.map((c) => (
              <CertificateCard key={c.title} certificate={c} />
            ))}
          </div>
        </Section>


        <Section id="contact" eyebrow="Let’s talk" title="Contact">
          <div className="contact">
            <div className="panel">
              <h3 className="h3">Email</h3>
              <p className="muted">Best way to reach me is email.</p>
              <div className="contact__row">
                <code className="code">{site.email}</code>
                <button className="btn btn--primary" type="button" onClick={copyEmail}>
                  Copy
                </button>
                <a className="btn btn--ghost" href={`mailto:${site.email}`}>
                  Open mail
                </a>
              </div>
            </div>

            <div className="panel">
              <h3 className="h3">Social</h3>
              <p className="muted">Or find me here:</p>
              <div className="socials">
                {site.socials.map((s) => (
                  <a key={s.label} className="social" href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer name={site.name} />
    </div>
  )
}
