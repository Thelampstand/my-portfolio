import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* ----------------- Hero Section ----------------- */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Oceanside, CA</p>
          <h1>
            Hi, I'm <span className="accent">Jack Vermaak</span>.
          </h1>
          <p className="hero-sub">
            CIS student at CSUSM, beach volleyball coach, and founder of
            <strong> 760 Beach Volleyball</strong>. I like building things — on a
            computer, on the sand, or in a shop.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">See my work</a>
            <Link to="/blog" className="btn btn-ghost">Read the blog →</Link>
          </div>
        </div>
      </section>

      {/* ----------------- About Section ----------------- */}
      <section id="about" className="section">
        <div className="section-head">
          <span className="section-tag">01 — About</span>
          <h2>A little about me</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a Computer Information Systems student at
              <strong> California State University San Marcos</strong>, graduating
              May 2027. Before transferring to CSUSM I earned my CIS Associate's
              degree from Palomar College with a 4.0 GPA and a spot on the men's
              indoor volleyball team as captain.
            </p>
            <p>
              Outside of class I coach at <strong>Tamarack Beach Volleyball Club</strong>,
              run <strong>760 Beach Volleyball</strong> (a small tournament series
              I founded in summer 2025), and pull shifts as a supervisor at
              Vigilante Coffee. I'm most interested in the intersection of code,
              community, and good design — tools that actually help people run
              real things.
            </p>
          </div>

          <ul className="about-facts">
            <li>
              <span className="fact-label">Currently</span>
              <span className="fact-value">CIS @ CSUSM · 3.6 GPA</span>
            </li>
            <li>
              <span className="fact-label">Building</span>
              <span className="fact-value">760 Beach Volleyball</span>
            </li>
            <li>
              <span className="fact-label">Coaching</span>
              <span className="fact-value">Tamarack Beach VBC</span>
            </li>
            <li>
              <span className="fact-label">Interests</span>
              <span className="fact-value">Web dev · Cyber security · Volleyball</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ----------------- Projects Section ----------------- */}
      <section id="projects" className="section section-alt">
        <div className="section-head">
          <span className="section-tag">02 — Projects</span>
          <h2>Selected work</h2>
          <p className="section-sub">
            A mix of class projects, side projects, and things I've built for my
            own business.
          </p>
        </div>

        <div className="projects-grid">
          <ProjectCard
            number="01"
            title="This Portfolio"
            tag="React · Vite · GitHub Pages"
            desc="The site you're on. Built from scratch in React with client-side routing via react-router-dom, custom CSS (no UI library), a responsive layout, and automated deploys to GitHub Pages via the gh-pages package."
            tech={['React', 'Vite', 'React Router', 'CSS']}
            link="https://github.com/Thelampstand/my-portfolio"
          />

          <ProjectCard
            number="02"
            title="760 Beach Volleyball"
            tag="Small business · Event ops"
            desc="Founded and run a beach volleyball tournament series in Carlsbad. I handle court permits, the signup system, sponsor outreach, social marketing, and day-of event operations. Currently prototyping a web-based signup + bracket tool to replace the spreadsheet workflow."
            tech={['Ops', 'Marketing', 'Sponsorship', 'Signup UX']}
            link="https://www.instagram.com/760beachvolleyball/"
          />

          <ProjectCard
            number="03"
            title="Node + Express API (CIS 444)"
            tag="Node.js · Express · REST"
            desc="A class project exploring server-side JavaScript: a small REST API built with Express that exposes routes for reading and writing JSON resources, uses middleware for JSON parsing and logging, and serves a static frontend from the same origin to avoid CORS headaches."
            tech={['Node.js', 'Express', 'REST', 'Middleware']}
            link="#"
          />
        </div>
      </section>

      {/* ----------------- Experience Section ----------------- */}
      <section id="experience" className="section">
        <div className="section-head">
          <span className="section-tag">03 — Experience</span>
          <h2>What I've been up to</h2>
        </div>

        <ol className="timeline">
          <TimelineItem
            period="Jun 2025 — Present"
            role="Founder / Owner"
            org="760 Beach Volleyball · Carlsbad, CA"
            bullets={[
              'Organize beach volleyball tournaments end-to-end — court rentals, city permitting, signup systems, setup, and member support.',
              'Communicate with teams throughout signup, day-of logistics, and social media; run marketing and in-person event management.',
              'Acquire sponsors that provide prizes and giveaways for participants.',
            ]}
          />
          <TimelineItem
            period="Sept 2024 — Present"
            role="Beach Volleyball Coach"
            org="Tamarack Beach VBC · Oceanside, CA"
            bullets={[
              'Provide high-level beach coaching at one of the top clubs in the country.',
              'Organize local and national tournament travel while communicating with staff and parents.',
              'Scout opponent tendencies in real time and call strategy that minimizes unforced errors.',
            ]}
          />
          <TimelineItem
            period="May 2024 — Present"
            role="Shift Supervisor & Barista"
            org="Vigilante Coffee · Oceanside, CA"
            bullets={[
              'Run the floor from open to close, maintaining quality and speed of service.',
              'Manage on-shift staff, resolve customer and staff issues, and keep the bar moving during rushes.',
              'Train new hires on coffee fundamentals and store systems.',
            ]}
          />
          <TimelineItem
            period="Sept 2022 — Jun 2025"
            role="Volleyball Coach"
            org="SoCal VBC · San Marcos, CA"
            bullets={[
              'Taught the full spectrum — core fundamentals through advanced team systems.',
              'Built practice plans and coached tournaments; managed game-day schedules.',
              'Communicated with parents and leadership to set clear expectations.',
            ]}
          />
        </ol>
      </section>

      {/* ----------------- Contact Section ----------------- */}
      <section id="contact" className="section section-alt">
        <div className="contact-card">
          <div>
            <span className="section-tag">04 — Contact</span>
            <h2>Let's build something.</h2>
            <p className="contact-copy">
              Open to internships, freelance, and collaborations — especially
              anything that mixes web dev with sports, events, or local
              community. I reply fast.
            </p>
          </div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:jackvermaak03@gmail.com">
              <span className="contact-icon">✉</span>
              <span>
                <strong>Email</strong>
                <em>jackvermaak03@gmail.com</em>
              </span>
            </a>
            <a className="contact-link" href="tel:+17606506435">
              <span className="contact-icon">☎</span>
              <span>
                <strong>Phone</strong>
                <em>760-650-6435</em>
              </span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Thelampstand"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">⌘</span>
              <span>
                <strong>GitHub</strong>
                <em>github.com/Thelampstand</em>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Reusable child components ---------- */

function ProjectCard({ number, title, tag, desc, tech, link }) {
  return (
    <article className="project-card">
      <div className="project-card-head">
        <span className="project-number">{number}</span>
        <span className="project-tag">{tag}</span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="tech-list">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {link && link !== '#' ? (
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          View project →
        </a>
      ) : (
        <span className="project-link project-link-muted">In progress</span>
      )}
    </article>
  );
}

function TimelineItem({ period, role, org, bullets }) {
  return (
    <li className="timeline-item">
      <div className="timeline-marker" aria-hidden="true"></div>
      <div className="timeline-content">
        <p className="timeline-period">{period}</p>
        <h3 className="timeline-role">{role}</h3>
        <p className="timeline-org">{org}</p>
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Home;
