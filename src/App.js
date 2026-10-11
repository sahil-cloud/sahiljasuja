import React from 'react';
import Nav from './components/Nav';
import HeroGraphic from './components/HeroGraphic';
import {
  RESUME_URL,
  links,
  impact,
  experience,
  highlights,
  projects,
  skills,
  education,
} from './data/profile';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

function Section({ id, index, title, lead, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section__head">
          <span className="section__index" aria-hidden="true">
            {index}
          </span>
          <h2 id={`${id}-title`}>{title}</h2>
          {lead && <p className="section__lead">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">
            Software Engineer · IBM Systems (ISDL) · Bengaluru
          </p>
          <h1 id="hero-title">
            Building Reliable, High-Performance Systems in&nbsp;
            <span className="accent">C++</span>
          </h1>
          <p className="hero__lead">
            Software Engineer at IBM Systems working across systems
            programming, distributed checkpoint/restart, parser infrastructure,
            performance engineering, and AI-powered developer tooling.
          </p>
          <p className="hero__sub">
            M.Tech in Computer Science from IIT Madras · GATE CSE 2022 All
            India Rank 94
          </p>
          <div className="actions">
            <a className="btn btn--primary" href={RESUME_URL} {...ext}>
              View Resume
            </a>
            <a className="btn" href="#highlights">
              Explore Engineering Work
            </a>
            <a className="btn btn--ghost" href={links.github} {...ext}>
              GitHub
            </a>
            <a className="btn btn--ghost" href={links.linkedin} {...ext}>
              LinkedIn
            </a>
          </div>
        </div>
        <HeroGraphic />
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="impact" aria-label="Engineering impact">
      <div className="container">
        <dl className="impact__grid">
          {impact.map((m) => (
            <div className="impact__item" key={m.label}>
              <dt>
                <span className="impact__value">{m.value}</span>
                <span className="impact__label">{m.label}</span>
              </dt>
              <dd>{m.context}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="about">
        <p>
          I’m a systems software engineer at IBM Systems. I build
          performance-critical C++ in a 250K+ line simulation infrastructure
          used by 300+ verification engineers. My work covers
          parser infrastructure for an internal constraint-specification
          language, distributed checkpoint/restart with DMTCP, profiling-driven
          optimization, and the CI/CD and release gating behind quarterly
          production releases.
        </p>
        <p>
          I also build AI-assisted engineering tools. These include an
          MCP-based assistant that turns natural-language requirements into
          configuration code and an AI-assisted pipeline that migrates legacy
          test suites to GoogleTest. I care about software that stays fast,
          correct, and maintainable as it scales.
        </p>
      </div>
    </Section>
  );
}

function Experience() {
  const [ibm, samsung] = experience;
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      lead="Full-time systems engineering at IBM, preceded by a research internship at Samsung."
    >
      <ol className="timeline">
        <li className="timeline__item">
          <div className="role">
            <h3>
              {ibm.role} <span className="muted">· {ibm.company}</span>
            </h3>
            <p className="role__meta">
              <time>{ibm.period}</time> · {ibm.location}
            </p>
          </div>
          <div className="cards">
            {ibm.featured.map((f) => (
              <article className="card" key={f.title}>
                <p className="card__metric">{f.metric}</p>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
                <Tags items={f.tags} />
              </article>
            ))}
          </div>
          <details className="more">
            <summary>
              More IBM work <span className="muted">({ibm.more.length})</span>
            </summary>
            <ul className="more__list">
              {ibm.more.map((m) => (
                <li key={m.title}>
                  <h4>{m.title}</h4>
                  <p>{m.body}</p>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li className="timeline__item">
          <div className="role">
            <h3>
              {samsung.role}{' '}
              <span className="muted">· {samsung.company}</span>
            </h3>
            <p className="role__meta">
              <time>{samsung.period}</time> · {samsung.location}
            </p>
          </div>
          <ul className="bullets">
            {samsung.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      </ol>
    </Section>
  );
}

function Highlights() {
  return (
    <Section
      id="highlights"
      index="03"
      title="Engineering Highlights"
      lead="For each area of my work: the problem, my approach, and the result. Internal architecture and source code are confidential and not described here."
    >
      <div className="highlights">
        {highlights.map((h) => (
          <article className="highlight" key={h.id}>
            <h3>{h.title}</h3>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>{h.problem}</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>{h.approach}</dd>
              </div>
              <div>
                <dt>Result</dt>
                <dd>{h.result}</dd>
              </div>
            </dl>
            <Tags items={h.tags} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Selected Projects"
      lead="Public, verifiable work. Company projects are proprietary and are not linked."
    >
      <div className="projects">
        {projects.map((p, i) => (
          <article
            className={`project${i === 0 ? ' project--lead' : ''}`}
            key={p.name}
          >
            <p className="project__context">{p.context}</p>
            <h3>{p.name}</h3>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>{p.problem}</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>{p.approach}</dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>{p.contribution}</dd>
              </div>
            </dl>
            <Tags items={p.tech} />
            <p className="project__links">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} {...ext}>
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" index="05" title="Technical Skills">
      <dl className="skills">
        {skills.map((s) => (
          <div className="skills__row" key={s.group}>
            <dt>{s.group}</dt>
            <dd>
              <Tags items={s.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" index="06" title="Education & Achievements">
      <div className="edu">
        {education.map((e) => (
          <article className="edu__item" key={e.school}>
            <h3>{e.school}</h3>
            <p>{e.degree}</p>
            <p className="muted">
              <time>{e.period}</time> · {e.detail}
            </p>
          </article>
        ))}
        <article className="edu__item edu__item--award">
          <h3>GATE CSE 2022</h3>
          <p>All India Rank 94</p>
          <p className="muted">Top 0.1% nationwide</p>
        </article>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      title="Contact"
      lead="Email is the best way to reach me."
    >
      <ul className="contact">
        <li>
          <span className="contact__k">Email</span>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </li>
        <li>
          <span className="contact__k">LinkedIn</span>
          <a href={links.linkedin} {...ext}>
            linkedin.com/in/sahiljasuja01
          </a>
        </li>
        <li>
          <span className="contact__k">GitHub</span>
          <a href={links.github} {...ext}>
            github.com/sahil-cloud
          </a>
        </li>
        <li>
          <span className="contact__k">Resume</span>
          <a href={RESUME_URL} {...ext}>
            Sahil_Jasuja_Resume.pdf
          </a>
        </li>
      </ul>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex="-1">
        <div id="top" />
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Highlights />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Sahil Jasuja</span>
          <span className="footer__links">
            <a href={RESUME_URL} {...ext}>
              Resume
            </a>
            <a href={links.github} {...ext}>
              GitHub
            </a>
            <a href={links.linkedin} {...ext}>
              LinkedIn
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
