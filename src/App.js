import React from 'react';
import Nav from './components/Nav';
import HeroGraphic from './components/HeroGraphic';
import {
  RESUME_URL,
  links,
  impact,
  pillars,
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

const heroBadges = [
  'Modern C++ (17/20)',
  'Low-Level Design (LLD)',
  'High-Level Design (HLD)',
  'Distributed Systems (DMTCP)',
  'Concurrency & Multithreading',
  'Performance Optimization',
  'AI Developer Tooling (MCP)',
  'GATE AIR 94 · IIT Madras',
];

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">
            Systems Software Engineer · IBM Systems (ISDL) · IIT Madras (GATE AIR 94)
          </p>
          <h1 id="hero-title">
            Building High-Performance <span className="accent">C++</span> Infrastructure &amp; Distributed Systems
          </h1>
          <p className="hero__lead">
            Systems Software Engineer at IBM building performance-critical C++ infrastructure, distributed checkpoint/restart architectures, compiler/parser engines, and AI developer tooling across a 250K+ LOC codebase supporting 300+ engineers.
          </p>
          
          <div className="hero__purpose">
            <div className="hero__purpose-header">
              <span className="hero__purpose-dot" aria-hidden="true" />
              <span className="hero__purpose-title">FAANG &amp; Engineering Recruiter Overview</span>
            </div>
            <p className="hero__purpose-text">
              Engineered as a high-signal technical dossier showcasing deep ownership across <strong>Modern C++</strong>, <strong>Low-Level Design (LLD)</strong>, <strong>Distributed High-Level System Design (HLD)</strong>, <strong>Concurrency</strong>, and <strong>Scalable Systems Infrastructure</strong>.
            </p>
          </div>

          <div className="hero__badges">
            <Tags items={heroBadges} />
          </div>

          <div className="actions">
            <a className="btn btn--primary" href={RESUME_URL} {...ext}>
              View Resume (PDF)
            </a>
            <a className="btn" href="#about">
              About &amp; Core Pillars
            </a>
            <a className="btn" href="#highlights">
              Engineering Highlights
            </a>
            <a className="btn btn--ghost" href={links.github} {...ext}>
              GitHub ↗
            </a>
            <a className="btn btn--ghost" href={links.linkedin} {...ext}>
              LinkedIn ↗
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
    <section className="impact" aria-label="Engineering impact metrics">
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

const ibmBulletWork = [
  {
    topic: 'Performance-Critical C++ Modules',
    detail: 'Engineered and optimized high-throughput simulation modules in modern C++ (C++17/20, STL, RAII), eliminating latency bottlenecks through profiling-guided optimization and cache-aware memory layout.',
  },
  {
    topic: 'Distributed Checkpoint/Restart (DMTCP)',
    detail: 'Designed distributed checkpoint-restart architecture with multi-node state persistence and coordinator-barrier synchronization, saving ~25% recomputation compute on long-running verification jobs.',
  },
  {
    topic: 'Parser Modernization (ANTLR v1 → ANTLR4)',
    detail: 'Overhauled production compiler pipeline using the Visitor pattern to decouple AST traversal from execution logic, cutting grammar lines by ~87% (4,000+ to ~500) with 100% backward compatibility.',
  },
  {
    topic: 'Modular Low-Level Design (LLD)',
    detail: 'Architected configuration engine with macro expansion, recursive validation, and dependency resolution graphs, achieving ~20% faster resolution and zero manual configuration errors.',
  },
  {
    topic: 'PPC64 Architecture Porting & Concurrency',
    detail: 'Led cross-platform port to PPC64, resolving low-level assembly/ABI register discrepancies and eliminating complex coordinator-barrier deadlocks under heavy multithreaded execution.',
  },
  {
    topic: 'MCP-Based Agentic AI Developer Assistant',
    detail: 'Built an AI assistant using Model Context Protocol (MCP) and autonomous tool orchestration that synthesizes validated simulation configurations from natural-language engineering specifications.',
  },
];

function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About & Engineering Profile"
      lead="Who I am, the purpose of this portfolio, and how I engineer reliable, high-performance systems."
    >
      <div className="about-wrapper">
        {/* Recruiter / Summary Briefing */}
        <div className="about-card about-card--briefing">
          <div className="about-card__header">
            <span className="about-tag">Executive Summary</span>
            <span className="about-tag about-tag--accent">FAANG Ready</span>
          </div>
          <h3 className="about-card__title">
            Systems Software Engineer · C++, Distributed Systems &amp; Low-Level Design
          </h3>
          <p className="about-card__text">
            I’m <strong>Sahil Jasuja</strong>, a Systems Software Engineer at <strong>IBM Systems (ISDL)</strong> in Bengaluru with an M.Tech in Computer Science from <strong>IIT Madras</strong> (GATE CSE 2022 All India Rank 94, top 0.1% nationwide).
          </p>
          <p className="about-card__text">
            <strong>Purpose of this Portfolio:</strong> Created for engineering managers, hiring directors, and senior technical bar raisers looking for high-signal proof of work. This portfolio demonstrates hands-on execution across <strong>Modern C++</strong>, <strong>Low-Level Design (LLD &amp; Design Patterns)</strong>, <strong>High-Level System Design (HLD &amp; Distributed Systems)</strong>, <strong>Concurrency &amp; Profiling</strong>, and <strong>AI Developer Infrastructure</strong>.
          </p>
          <div className="about-callout">
            <div className="about-callout__item">
              <span className="about-callout__k">Current Role</span>
              <span className="about-callout__v">Software Engineer @ IBM Systems (ISDL)</span>
            </div>
            <div className="about-callout__item">
              <span className="about-callout__k">Education</span>
              <span className="about-callout__v">M.Tech CS @ IIT Madras (GATE AIR 94)</span>
            </div>
            <div className="about-callout__item">
              <span className="about-callout__k">Target Scope</span>
              <span className="about-callout__v">Systems / Distributed / Backend SWE at Scale</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (C++, LLD, HLD, Distributed Systems) */}
        <div className="about-pillars">
          <h3 className="about-subheading">Core Competencies &amp; Architectural Pillars</h3>
          <div className="about-pillars__grid">
            {pillars.map((p) => (
              <div className="pillar-card" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <Tags items={p.tags} />
              </div>
            ))}
          </div>
        </div>

        {/* IBM Production Scope */}
        <div className="about-card">
          <h3 className="about-subheading">Production Scope at IBM Systems (250K+ LOC C++)</h3>
          <p className="about-card__text">
            My daily production responsibility spans a mission-critical 250K+ LOC C++ simulation infrastructure used by 300+ hardware verification engineers on quarterly production release cadence:
          </p>
          <div className="about-scope__grid">
            {ibmBulletWork.map((item) => (
              <div className="about-scope__item" key={item.topic}>
                <span className="about-scope__dot" aria-hidden="true">▹</span>
                <div>
                  <strong>{item.topic}:</strong> <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic & Research Rigor */}
        <div className="about-card">
          <h3 className="about-subheading">Academic Rigor &amp; Research Background</h3>
          <p className="about-card__text">
            • <strong>IIT Madras (M.Tech CSE · GATE AIR 94):</strong> Thesis focused on distributed consensus and state consistency. Built a permissioned blockchain marketplace on <strong>Hyperledger Fabric</strong> with high-throughput <strong>Go</strong> chaincode designed for 10,000+ users.
          </p>
          <p className="about-card__text">
            • <strong>Samsung R&amp;D (Internship):</strong> Researched Generative Adversarial Networks (GANs) across 1,000+ image distributions and automated data preprocessing pipelines in Python, cutting preparation overhead by ~30%.
          </p>
        </div>
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
      title="Work Experience"
      lead="Production systems engineering at IBM Systems, preceded by applied research at Samsung R&D."
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
              Additional IBM Systems Architecture Work <span className="muted">({ibm.more.length} initiatives)</span>
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
      title="Engineering Highlights & System Design"
      lead="Deep dive into architectural problems, design methodologies (LLD & HLD), and quantifiable engineering results."
    >
      <div className="highlights">
        {highlights.map((h) => (
          <article className="highlight" key={h.id}>
            <div className="highlight__header">
              <span className="highlight__badge">{h.category}</span>
              <h3>{h.title}</h3>
            </div>
            <dl>
              <div>
                <dt>Problem &amp; Challenge</dt>
                <dd>{h.problem}</dd>
              </div>
              <div>
                <dt>Architectural Approach (LLD / HLD)</dt>
                <dd>{h.approach}</dd>
              </div>
              <div>
                <dt>Quantifiable Result</dt>
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
      title="Selected Technical Projects"
      lead="Verifiable public repositories, distributed systems thesis, and parallel computing implementations."
    >
      <div className="projects">
        {projects.map((p, i) => (
          <article
            className={`project${i === 0 ? ' project--lead' : ''}`}
            key={p.name}
          >
            <div className="project__top">
              <p className="project__context">{p.context}</p>
              {p.badge && <span className="project__badge">{p.badge}</span>}
            </div>
            <h3>{p.name}</h3>
            <dl>
              <div>
                <dt>Problem Scope</dt>
                <dd>{p.problem}</dd>
              </div>
              <div>
                <dt>System Architecture &amp; Approach</dt>
                <dd>{p.approach}</dd>
              </div>
              <div>
                <dt>My Technical Contribution</dt>
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
    <Section
      id="skills"
      index="05"
      title="Technical Skills & Architecture Matrix"
      lead="Categorized taxonomy spanning C++, Low-Level Design (LLD), Distributed System Design (HLD), Concurrency, and AI Tooling."
    >
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
    <Section
      id="education"
      index="06"
      title="Education & Honors"
      lead="Academic pedigree, national competitive rank, and graduate research."
    >
      <div className="edu">
        {education.map((e) => (
          <article className="edu__item" key={e.school}>
            <h3>{e.school}</h3>
            <p className="edu__degree">{e.degree}</p>
            <p className="muted">
              <time>{e.period}</time> · {e.detail}
            </p>
            {e.thesis && <p className="edu__thesis">{e.thesis}</p>}
          </article>
        ))}
        <article className="edu__item edu__item--award">
          <span className="edu__rank-badge">Top 0.1% Nationwide</span>
          <h3>GATE CSE 2022</h3>
          <p className="edu__degree">All India Rank 94</p>
          <p className="muted">Graduate Aptitude Test in Engineering · Ranked 94 out of 100,000+ CS candidates</p>
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
      title="Contact & Links"
      lead="Open to discussing high-impact systems, distributed platforms, backend engineering, and AI infrastructure roles."
    >
      <ul className="contact">
        <li>
          <span className="contact__k">Email</span>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </li>
        <li>
          <span className="contact__k">LinkedIn</span>
          <a href={links.linkedin} {...ext}>
            linkedin.com/in/sahiljasuja01 ↗
          </a>
        </li>
        <li>
          <span className="contact__k">GitHub</span>
          <a href={links.github} {...ext}>
            github.com/sahil-cloud ↗
          </a>
        </li>
        <li>
          <span className="contact__k">Resume</span>
          <a href={RESUME_URL} {...ext}>
            Sahil_Jasuja_Resume.pdf ↗
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
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Sahil Jasuja · Systems Software Engineer</span>
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
