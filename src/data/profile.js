// Single source of truth for site content.
// Every claim below is taken from Sahil's resume (public/Sahil_Jasuja_Resume.pdf)
// or LinkedIn profile. Update here; components only render this data.

export const RESUME_URL = `${process.env.PUBLIC_URL}/Sahil_Jasuja_Resume.pdf`;

export const links = {
  email: 'sahiljasuja666@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sahiljasuja01/',
  github: 'https://github.com/sahil-cloud',
};

export const impact = [
  {
    value: '250K+',
    label: 'LOC of production C++',
    context:
      'Simulation infrastructure at IBM Systems used by 300+ internal engineers.',
  },
  {
    value: '~87%',
    label: 'Smaller parser grammar',
    context:
      'ANTLR v1 → 4.9 migration: 4,000+ grammar lines down to ~500, fully backward compatible.',
  },
  {
    value: '~25%',
    label: 'Less recomputation',
    context:
      'Checkpoint/restart with DMTCP across long-running verification workflows.',
  },
  {
    value: '~20%',
    label: 'Faster config resolution',
    context:
      'Profiling-driven optimization of a modular configuration engine.',
  },
  {
    value: 'AIR 94',
    label: 'GATE CSE 2022',
    context: 'All India Rank 94, top 0.1% nationwide.',
  },
];

export const experience = [
  {
    company: 'IBM Systems (ISDL)',
    role: 'Software Engineer',
    period: 'Jul 2024 – Present',
    location: 'Bengaluru, India',
    featured: [
      {
        title: 'Performance-critical C++ infrastructure',
        body:
          'Develop performance-critical C++ components in a 250K+ LOC simulation-infrastructure codebase supporting 300+ internal engineers, shipped through quarterly production releases.',
        metric: '250K+ LOC · 300+ engineers',
        tags: ['C++', 'STL', 'Multithreading', 'Linux'],
      },
      {
        title: 'Parser migration: ANTLR v1 → ANTLR 4.9',
        body:
          'Migrated a production parser for an internal DSL to ANTLR 4.9 using the visitor pattern, cutting grammar from 4,000+ lines to ~500 while preserving full backward compatibility.',
        metric: '~87% smaller grammar',
        tags: ['ANTLR 4', 'Visitor pattern', 'C++'],
      },
      {
        title: 'Distributed checkpoint/restart (DMTCP)',
        body:
          'Designed and implemented a distributed checkpoint-restart system using DMTCP (Distributed MultiThreaded Checkpointing), saving significant compute time across verification workflows.',
        metric: '~25% less recomputation',
        tags: ['DMTCP', 'Process state', 'Linux'],
      },
      {
        title: 'MCP-based AI developer assistant',
        body:
          'Built an agentic assistant on the Model Context Protocol that translates natural-language engineering requirements into CSP configuration code using tool orchestration and reusable skills.',
        metric: 'Natural language → configuration code',
        tags: ['MCP', 'Agentic AI', 'Tooling'],
      },
    ],
    more: [
      {
        title: 'Modular configuration engine',
        body:
          'Built a configuration engine with macro expansion, validation, and dependency resolution, eliminating manual configuration errors across 300+ users. Profiling-driven optimization improved resolution performance by ~20%.',
      },
      {
        title: 'Constraint-specification language (CSP/DSL)',
        body:
          'Extended the internal DSL used for simulation control with new language constructs, parser enhancements, and semantic-correctness fixes used by 300+ engineers.',
      },
      {
        title: 'PPC64 port of checkpoint/restart',
        body:
          'Led the cross-platform port of the DMTCP checkpoint-restart system to PPC64, debugging and fixing low-level assembly/ABI mismatches and a coordinator-barrier deadlock to extend recomputation savings to the new architecture.',
      },
      {
        title: 'AI-assisted CppUnit → GoogleTest migration',
        body:
          'Designed a migration pipeline with gated stages and automated failure classification, with automated validation integrated into CI, improving regression coverage by ~40%.',
      },
      {
        title: 'CI/CD and release engineering',
        body:
          'Strengthened CI/CD validation, automated regression pipelines, and release gating for quarterly production releases supporting 300+ engineers.',
      },
    ],
  },
  {
    company: 'Samsung Research Institute',
    role: 'Technical Intern',
    period: 'May 2023 – Jul 2023',
    location: 'Bengaluru, India',
    points: [
      'Implemented and evaluated GAN models across 1,000+ image samples, analyzing convergence and stability across multiple training configurations.',
      'Improved the Python data-preprocessing pipeline, reducing manual dataset preparation effort by ~30%.',
    ],
  },
];

export const highlights = [
  {
    id: 'systems',
    title: 'Systems Programming & Performance',
    problem:
      'A 250K+ LOC C++ simulation infrastructure used by 300+ engineers needs components that stay fast and correct across quarterly releases.',
    approach:
      'Profiling-driven optimization, memory management, large-scale refactoring, and low-level debugging with GDB.',
    result:
      '~20% faster configuration resolution in the modular configuration engine.',
    tags: ['C++', 'Profiling', 'Memory management', 'GDB'],
  },
  {
    id: 'parser',
    title: 'Parser Engineering',
    problem:
      'A production parser for an internal constraint-specification DSL ran on ANTLR v1 with a 4,000+ line grammar.',
    approach:
      'Migrated to ANTLR 4.9 using the visitor pattern for parse-tree traversal. Added new language constructs and semantic-correctness fixes.',
    result:
      'Grammar reduced to ~500 lines (~87%) with full backward compatibility for existing users.',
    tags: ['ANTLR 4.9', 'Visitor pattern', 'Grammar design', 'DSLs'],
  },
  {
    id: 'checkpoint',
    title: 'Distributed Checkpoint/Restart',
    problem:
      'Long-running verification workflows lose significant compute when work has to be recomputed.',
    approach:
      'Checkpoint-restart built on DMTCP to save and recover process state. Led the PPC64 port, resolving assembly/ABI mismatches and a coordinator-barrier deadlock.',
    result:
      '~25% lower recomputation overhead, extended to a second CPU architecture.',
    tags: ['DMTCP', 'PPC64', 'ABI', 'Concurrency'],
  },
  {
    id: 'ai-tooling',
    title: 'AI Developer Tooling',
    problem:
      'Turning engineering requirements into CSP configuration code, and migrating legacy test suites, were manual and slow.',
    approach:
      'An MCP-based agentic assistant with tool orchestration and reusable skills. An AI-assisted CppUnit → GoogleTest pipeline with gated stages.',
    result:
      'Natural-language requirements translated into configuration code; ~40% better regression coverage from the test migration.',
    tags: ['MCP', 'Tool orchestration', 'Agentic AI', 'GoogleTest'],
  },
  {
    id: 'productivity',
    title: 'Engineering Productivity',
    problem:
      'Quarterly production releases for 300+ engineers depend on reliable validation before shipping.',
    approach:
      'Stronger CI/CD validation, automated regression pipelines, release gating, and automated failure classification in the test-migration pipeline.',
    result:
      'Stronger release gating for every quarterly production release.',
    tags: ['CI/CD', 'Regression testing', 'Release engineering'],
  },
];

export const projects = [
  {
    name: 'Distributed Marketplace for Used Goods',
    context: 'M.Tech Thesis · IIT Madras · Jul 2023 – May 2024',
    problem:
      'A marketplace for used goods needs secure, consistent state for listings and transactions shared across many participants.',
    approach:
      'A permissioned blockchain on Hyperledger Fabric. Backend services and chaincode in Go handle transaction validation and distributed ledger state, and a React Native app is the client.',
    contribution:
      'Designed and implemented the system, built to support 10,000+ users with secure, consistent distributed state.',
    tech: ['Hyperledger Fabric', 'Go', 'Chaincode', 'React Native'],
    links: [
      {
        label: 'Chaincode repository',
        href: 'https://github.com/sahil-cloud/campustrade-chaincode',
      },
    ],
  },
  {
    name: 'GPU Kernels in CUDA',
    context: 'Coursework · CS6023 GPU Programming · IIT Madras',
    problem:
      'Compute a Kronecker product and matrix multiplication efficiently on the GPU.',
    approach:
      'Compared per-row, per-column, and per-element kernel mappings. Used a transpose for coalesced memory access and dynamically allocated shared memory for row-wise products.',
    contribution:
      'Implemented the kernels in a course-provided assignment harness.',
    tech: ['CUDA', 'C++', 'Shared memory', 'Memory coalescing'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/sahil-cloud/Gpu-Assignment',
      },
    ],
  },
  {
    name: 'Data Structures & Algorithms Practice',
    context: 'Ongoing · NeetCode 150',
    problem:
      'Keep problem-solving fundamentals sharp across the standard algorithmic patterns.',
    approach:
      'Solutions organized by topic, synced automatically from NeetCode.io.',
    contribution: 'My own solutions, written in C++.',
    tech: ['C++', 'Algorithms', 'Data structures'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/sahil-cloud/neetcode_150_submissions',
      },
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['C++', 'C', 'Go', 'Python', 'JavaScript'] },
  {
    group: 'Systems & Core CS',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Design',
      'Design Patterns',
      'Low-Level Design',
      'System Design',
      'Concurrency',
      'Distributed Systems',
    ],
  },
  {
    group: 'Modern C++ & Debugging',
    items: [
      'STL',
      'Templates',
      'Multithreading',
      'Memory Management',
      'Performance Optimization',
      'GDB',
    ],
  },
  {
    group: 'Compiler & Parser Engineering',
    items: ['ANTLR', 'Grammar Migration', 'Visitor Pattern', 'Parser Development'],
  },
  {
    group: 'AI & Developer Tooling',
    items: [
      'MCP (Model Context Protocol)',
      'Agentic AI',
      'Prompt Engineering',
      'AI-Assisted Developer Tooling',
    ],
  },
  {
    group: 'Infrastructure & Tools',
    items: [
      'Linux',
      'Docker',
      'Git',
      'CI/CD',
      'Release Engineering',
      'Build & Regression Pipelines',
      'GoogleTest',
      'DMTCP',
    ],
  },
  { group: 'Additional', items: ['Hyperledger Fabric', 'React Native'] },
];

export const education = [
  {
    school: 'Indian Institute of Technology Madras',
    degree: 'M.Tech, Computer Science',
    period: 'Jul 2022 – Jun 2024',
    detail: 'CGPA 8.38/10 · Chennai',
  },
  {
    school: 'MediCaps University',
    degree: 'B.Tech, Computer Science',
    period: 'Jul 2018 – May 2022',
    detail: 'CGPA 8.56/10 · Indore',
  },
];
