// Single source of truth for site content.
// Verified from Sahil's resume, IIT Madras thesis, and production IBM work.

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
      'Simulation infrastructure at IBM Systems used daily by 300+ hardware verification engineers.',
  },
  {
    value: '~25%',
    label: 'Less recomputation',
    context:
      'Distributed checkpoint/restart with DMTCP across parallel compute nodes.',
  },
  {
    value: '~87%',
    label: 'Smaller parser grammar',
    context:
      'ANTLR v1 → ANTLR4 migration: 4,000+ lines down to ~500 with zero backwards incompatibility.',
  },
  {
    value: '~20%',
    label: 'Faster config resolution',
    context:
      'Profiling-driven optimization and dependency graph resolution in modular config engine.',
  },
  {
    value: 'AIR 94',
    label: 'GATE CSE 2022',
    context: 'All India Rank 94 (Top 0.1% nationwide among 100K+ candidates · M.Tech IIT Madras).',
  },
];

export const pillars = [
  {
    title: 'Modern C++ & Low-Level Design (LLD)',
    desc: 'Expertise in modern C++ (C++17/20, STL, templates, RAII, memory management), SOLID principles, and design patterns (Visitor, Factory, Strategy, Observer). Architecting modular engines with macro expansion, dependency graphs, and clean component decoupling.',
    tags: ['C++17/20', 'LLD', 'OOP Design Patterns', 'Visitor Pattern', 'Memory Safety'],
  },
  {
    title: 'High-Level Design (HLD) & Distributed Systems',
    desc: 'Designing fault-tolerant, scalable architectures. Implemented distributed checkpoint/restart (DMTCP) with cross-node process coordination, barrier synchronization, and consensus-driven distributed ledgers (Hyperledger Fabric in Go for 10K+ users).',
    tags: ['Distributed Systems', 'HLD', 'DMTCP', 'Fault Tolerance', 'Hyperledger Fabric'],
  },
  {
    title: 'Concurrency, Performance & Systems Internals',
    desc: 'Deep Linux systems engineering: multithreading, mutex/lock-free concurrency, coordinator-barrier deadlock resolution, low-level ABI & assembly debugging across x86_64 and PPC64, and profiling-driven latency optimization (GDB, Valgrind, perf).',
    tags: ['Multithreading', 'PPC64 ABI', 'GDB/Valgrind', 'Profiling', 'Deadlock Resolution'],
  },
  {
    title: 'Compiler/Parser & AI Developer Platforms',
    desc: 'Modernized mission-critical DSL parsers using ANTLR4 visitor-tree traversals. Built agentic developer tools with the Model Context Protocol (MCP) to automate configuration synthesis from natural language, plus automated CI/CD release gating.',
    tags: ['ANTLR4', 'Grammar Engineering', 'MCP (Model Context Protocol)', 'Agentic AI', 'CI/CD'],
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
        title: 'Performance-critical C++ Infrastructure & LLD',
        body:
          'Develop core C++ components in a 250K+ LOC simulation infrastructure codebase supporting 300+ verification engineers. Designed modular low-level components with robust OOP abstractions, strict memory bounds, and quarterly release delivery.',
        metric: '250K+ LOC · 300+ engineers',
        tags: ['C++', 'STL', 'Low-Level Design', 'Multithreading', 'Linux'],
      },
      {
        title: 'Distributed Checkpoint/Restart (DMTCP)',
        body:
          'Architected and implemented distributed checkpoint-restart capabilities using DMTCP (Distributed MultiThreaded Checkpointing), enabling process state persistence and recovery across long-running verification workflows.',
        metric: '~25% less recomputation',
        tags: ['Distributed Systems', 'DMTCP', 'Fault Recovery', 'Process Coordination'],
      },
      {
        title: 'Parser Migration: ANTLR v1 → ANTLR4',
        body:
          'Migrated production parser for an internal constraint-specification DSL to ANTLR4 using the Visitor pattern. Cut grammar size by ~87% while ensuring 100% backward compatibility for all existing simulation workloads.',
        metric: '~87% grammar reduction',
        tags: ['ANTLR4', 'Visitor Pattern', 'Grammar Design', 'C++'],
      },
      {
        title: 'MCP-Based AI Developer Assistant',
        body:
          'Built an agentic developer assistant on the Model Context Protocol (MCP) that converts natural-language requirements into validated simulation configuration code using autonomous tool orchestration.',
        metric: 'Natural language → validated config',
        tags: ['MCP', 'Agentic AI', 'Developer Tooling', 'Python'],
      },
    ],
    more: [
      {
        title: 'Modular Configuration Engine & Dependency Resolution (LLD)',
        body:
          'Engineered a configuration engine with macro expansion, recursive validation, and dependency graph resolution, eliminating manual configuration errors across 300+ engineers. Profiling-driven optimization improved resolution performance by ~20%.',
      },
      {
        title: 'Constraint-Specification Language (CSP/DSL) Extensions',
        body:
          'Extended the internal domain-specific language used for simulation control with new language constructs, AST enhancements, and semantic-correctness validation used across hardware teams.',
      },
      {
        title: 'PPC64 Architecture Port & Barrier Deadlock Resolution',
        body:
          'Led the cross-platform port of the DMTCP checkpoint-restart system to PPC64. Resolved low-level assembly/ABI mismatches and eliminated a complex coordinator-barrier deadlock under multi-threaded execution.',
      },
      {
        title: 'AI-Assisted CppUnit → GoogleTest Migration Pipeline',
        body:
          'Designed an automated test migration pipeline with staged AST refactoring, automated failure classification, and CI test gating, boosting regression test coverage by ~40%.',
      },
      {
        title: 'CI/CD Regression & Release Engineering',
        body:
          'Strengthened automated regression pipelines, static analysis gating, and release validation for quarterly production releases supporting 300+ active engineers.',
      },
    ],
  },
  {
    company: 'Samsung Research Institute',
    role: 'Technical Intern',
    period: 'May 2023 – Jul 2023',
    location: 'Bengaluru, India',
    points: [
      'Implemented and benchmarked GAN architectures across 1,000+ image samples, analyzing training convergence and discriminator-generator balance across hyperparameters.',
      'Refactored and automated Python data-preprocessing pipelines, reducing manual dataset preparation effort by ~30%.',
    ],
  },
];

export const highlights = [
  {
    id: 'systems',
    title: 'C++ Systems Programming & LLD Optimization',
    category: 'C++ & Low-Level Design (LLD)',
    problem:
      'A 250K+ LOC C++ simulation infrastructure used by 300+ engineers suffered bottlenecks during complex macro expansion and dependency resolution.',
    approach:
      'Redesigned configuration engine using clean OOP abstractions, decoupled validation passes, cache-friendly data structures, and profiling-driven memory tuning (GDB/Valgrind).',
    result:
      '~20% faster configuration resolution latency with zero runtime regressions across quarterly releases.',
    tags: ['C++17', 'Low-Level Design', 'Profiling', 'Memory Management', 'GDB'],
  },
  {
    id: 'checkpoint',
    title: 'Distributed Checkpoint/Restart & Concurrency',
    category: 'High-Level Design (HLD) & Distributed Systems',
    problem:
      'Long-running verification jobs on hardware simulation clusters lost compute on interruptions, and DMTCP lacked reliable PPC64 architecture support.',
    approach:
      'Architected coordinated checkpointing using DMTCP across distributed worker nodes. Fixed ABI/assembly register handling on PPC64 and solved a coordinator-barrier synchronization deadlock.',
    result:
      '~25% lower recomputation overhead across large-scale verification runs; seamless cross-platform execution on x86_64 and PPC64.',
    tags: ['Distributed Systems', 'DMTCP', 'PPC64 ABI', 'Barrier Synchronization', 'Concurrency'],
  },
  {
    id: 'parser',
    title: 'Compiler & Parser Infrastructure Modernization',
    category: 'Compilers & Low-Level Design',
    problem:
      'Legacy DSL parser ran on obsolete ANTLR v1 with an unwieldy 4,000+ line grammar, hindering new language features and compiler maintainability.',
    approach:
      'Architected a clean ANTLR4 migration using the Visitor pattern to decouple AST traversal from execution logic. Added new DSL syntax and semantic validation.',
    result:
      'Grammar size compressed from 4,000+ lines to ~500 lines (~87% reduction) while ensuring 100% backward compatibility for 300+ engineers.',
    tags: ['ANTLR4', 'Visitor Pattern', 'Grammar Design', 'DSLs', 'AST Traversal'],
  },
  {
    id: 'ai-tooling',
    title: 'Agentic AI Developer Platform (MCP)',
    category: 'Developer Infrastructure & Agentic AI',
    problem:
      'Authoring complex simulation-control configuration files required deep domain expertise, slowing down verification engineer velocity.',
    approach:
      'Built an intelligent developer assistant using the Model Context Protocol (MCP) with tool orchestration and domain-specific validation skills to translate natural language into verified configurations.',
    result:
      'Engineers can generate syntactically and semantically correct simulation configs directly from natural language specifications.',
    tags: ['MCP', 'Model Context Protocol', 'Agentic Workflows', 'Tool Orchestration', 'Python'],
  },
  {
    id: 'testing-infra',
    title: 'Test Infrastructure Modernization (GoogleTest)',
    category: 'Infrastructure & Engineering Productivity',
    problem:
      'Legacy CppUnit test suite was difficult to maintain and lacked automated failure classification in CI.',
    approach:
      'Engineered an automated migration pipeline to GoogleTest with staged gating and failure classification integrated into CI regression pipelines.',
    result:
      '~40% improvement in automated regression coverage and faster triage of quarterly release blockers.',
    tags: ['GoogleTest', 'CI/CD Pipelines', 'Regression Testing', 'Release Engineering'],
  },
];

export const projects = [
  {
    name: 'Distributed Marketplace for Used Goods',
    context: 'M.Tech Thesis · IIT Madras · Jul 2023 – May 2024',
    badge: 'Distributed Systems & Blockchain (Go)',
    problem:
      'Campus-scale marketplace requires tamper-proof audit trails, Byzantine fault tolerance, and atomic consistency without a centralized trusted intermediary.',
    approach:
      'Architected a permissioned distributed ledger on Hyperledger Fabric. Engineered high-throughput Go chaincode (smart contracts) with state validation, optimistic concurrency control, and distributed consensus.',
    contribution:
      'Designed end-to-end distributed system architecture supporting 10,000+ concurrent campus users with deterministic state transitions.',
    tech: ['Hyperledger Fabric', 'Go', 'Distributed Ledgers', 'Consensus', 'Docker', 'React Native'],
    links: [
      {
        label: 'Chaincode Repository',
        href: 'https://github.com/sahil-cloud/campustrade-chaincode',
      },
    ],
  },
  {
    name: 'High-Performance GPU Kernels in CUDA',
    context: 'Coursework · CS6023 GPU Programming · IIT Madras',
    badge: 'Parallel Computing & Systems (CUDA/C++)',
    problem:
      'Compute high-order Kronecker products and large matrix operations with maximum arithmetic throughput on GPU hardware.',
    approach:
      'Implemented thread-block hierarchies, comparing row-wise, col-wise, and element-wise kernel mappings. Optimized global memory coalescence via tile transposition and dynamic shared memory caching.',
    contribution:
      'Wrote custom CUDA C++ kernels achieving optimal memory bandwidth utilization and near-theoretical compute efficiency.',
    tech: ['CUDA', 'Modern C++', 'Shared Memory', 'Memory Coalescing', 'Parallel Architecture'],
    links: [
      {
        label: 'CUDA Repository',
        href: 'https://github.com/sahil-cloud/Gpu-Assignment',
      },
    ],
  },
  {
    name: 'Algorithmic Problem Solving & System DSA',
    context: 'Continuous Practice · NeetCode 150 & Competitive Programming',
    badge: 'Algorithms & Data Structures (C++)',
    problem:
      'Mastery of core algorithmic paradigms: Graph algorithms, Dynamic Programming, Heap/Trie design, Concurrency primitives, and Big-O space/time optimization.',
    approach:
      'Implemented clean, optimal C++ solutions adhering to modern STL standards, cache-locality principles, and edge-case resilience.',
    contribution:
      'Comprehensive collection of tested algorithmic solutions in modern C++.',
    tech: ['Modern C++', 'Algorithms', 'Data Structures', 'Big-O Optimization', 'STL'],
    links: [
      {
        label: 'Submissions Repository',
        href: 'https://github.com/sahil-cloud/neetcode_150_submissions',
      },
    ],
  },
];

export const skills = [
  {
    group: 'Programming Languages',
    items: ['C++ (C++17/20)', 'C', 'Go', 'Python', 'JavaScript (ES6+)', 'SQL', 'Bash'],
  },
  {
    group: 'Low-Level Design (LLD) & Clean Architecture',
    items: [
      'Object-Oriented Design (OOD)',
      'Design Patterns (Visitor, Factory, Strategy, Observer)',
      'SOLID Principles',
      'Dependency Graph Resolution',
      'Macro Expansion Engines',
      'Refactoring & Modular Design',
    ],
  },
  {
    group: 'High-Level Design (HLD) & Distributed Systems',
    items: [
      'Distributed Systems Architecture',
      'Distributed Checkpointing (DMTCP)',
      'Fault Tolerance & Recovery',
      'Process Coordination & Barriers',
      'Distributed Consensus (Hyperledger Fabric)',
      'Scalable Backend Design',
    ],
  },
  {
    group: 'Systems, Concurrency & Performance',
    items: [
      'Multithreading (pthreads, std::thread)',
      'Mutexes, Locks & Synchronization',
      'Deadlock Elimination',
      'Memory Management & RAII',
      'Linux Kernel & Systems Internals',
      'GDB & Valgrind Debugging',
      'Profiling (perf, gprof)',
      'ABI & Assembly (x86_64, PPC64)',
    ],
  },
  {
    group: 'Compilers, Parsers & Tooling',
    items: [
      'ANTLR4 & ANTLR v1',
      'Grammar Modernization',
      'AST & Parse-Tree Visitors',
      'Domain-Specific Languages (DSLs)',
      'GoogleTest & CppUnit',
      'Static Analysis',
    ],
  },
  {
    group: 'AI & Developer Platforms',
    items: [
      'Model Context Protocol (MCP)',
      'Agentic AI Workflows',
      'LLM Tool Orchestration',
      'CI/CD Pipelines & Automated Release Gating',
      'Docker & Containerization',
      'Git & Version Control',
    ],
  },
];

export const education = [
  {
    school: 'Indian Institute of Technology Madras',
    degree: 'M.Tech, Computer Science & Engineering',
    period: 'Jul 2022 – Jun 2024',
    detail: 'CGPA 8.38/10 · Chennai, India',
    thesis: 'Thesis: Permissioned Blockchain-Based Distributed Marketplace (Hyperledger Fabric, Go)',
  },
  {
    school: 'Medi-Caps University',
    degree: 'B.Tech, Computer Science & Engineering',
    period: 'Jul 2018 – May 2022',
    detail: 'CGPA 8.56/10 · Indore, India',
    thesis: 'Core Foundations: OS, Networks, DBMS, Compilers, Theory of Computation',
  },
];
