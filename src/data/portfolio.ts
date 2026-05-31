import { Database, Lightbulb, Sparkle, Settings, Link } from 'lucide-react';

export const personalInfo = {
    name: "Christian Jay Soyosa",
    role: "Lead Software Engineer & Architect",
    location: "Philippines",
    socials: {
        linkedin: "https://www.linkedin.com/in/christian-jay-soyosa-78a662239/",
        jobstreet: "https://ph.jobstreet.com/profile/christianjay-soyosa-sTKRN4rKnB",
        github: "https://github.com/tantanjay",
    }
};

export const about = {
    heading: "Who Am I?",
    text: [
        "I am a Lead Software Engineer and platform architect with over 15 years of experience building and modernizing enterprise systems in government and regulated environments, where reliability, security, and long-term operational continuity are core constraints rather than optional concerns.",
        
        "My work focuses on designing and building backend platforms rather than isolated applications — including identity and access management (IAM), intelligent document processing (IDP) systems, and schema-driven execution runtimes that transform unstructured enterprise data into structured, governed workflows.",
        
        "I specialize in building reusable platform scaffolds and infrastructure layers that function as internal enterprise execution foundations — covering identity, messaging, storage, orchestration, and AI-enabled workflows — enabling faster development of domain-specific systems while maintaining strict consistency, scalability, and security across distributed environments."
    ]
};

export const services = [
    {
        title: "Architecture & Leadership",
        subtitle: "(Core Competencies)",
        icon: Lightbulb,
        description: "Enterprise system architecture and technical leadership focused on building scalable platforms for regulated environments, with emphasis on incremental modernization and production reliability.",
        items: [
            "Event-driven microservices architecture and bounded context decomposition for enterprise-scale systems",
            "Design of internal platforms and SDKs that standardize infrastructure behavior across teams and services",
            "Incremental modernization strategies for legacy systems without disrupting active production workloads",
            "Security architecture using OAuth 2.1, OIDC, RBAC, and zero-trust communication models across distributed services"
        ]
    },
    {
        title: "Backend & Distributed Systems",
        subtitle: "(Expert Level)",
        icon: Database,
        description: "Design and implementation of distributed backend systems with emphasis on scalability, resilience, and cross-environment interoperability across hybrid enterprise deployments.",
        items: [
            "Java (Spring Boot, Spring AI, Hibernate, GraalVM runtime execution)",
            "Messaging systems using RabbitMQ, asynchronous processing pipelines, and queue orchestration",
            "PostgreSQL, MySQL, SQLite, Redis across enterprise, hybrid, and embedded deployments",
            "Cross-platform interoperability with legacy enterprise systems (VB.NET, C#, Java)"
        ]
    },
    {
        title: "Applied AI & Product Systems",
        subtitle: "(Production-Focused AI)",
        icon: Sparkle,
        description: "Practical integration of AI systems into enterprise platforms, focusing on offline-first, privacy-preserving, and production-grade AI workflows.",
        items: [
            "Model-agnostic AI orchestration supporting multiple providers and local inference pipelines",
            "On-device ML using TensorFlow Lite, embeddings, and lightweight vector-based systems",
            "Mobile system development using Kotlin (Android), React Native (Expo)",
            "Frontend systems built with React, TypeScript, and Tailwind CSS for enterprise-grade interfaces"
        ]
    },
    {
        title: "Systems Integration",
        subtitle: "(Enterprise Interoperability)",
        icon: Link,
        description: "Integration layer design for enterprise systems operating under heterogeneous, legacy, and constrained infrastructure environments — including distributed and intermittently connected systems.",
        items: [
            "Legacy system modernization through gradual service extraction and integration abstraction layers",
            "Protocol mediation across REST APIs, file-based ingestion, and message-driven workflows",
            "Distributed synchronization strategies for intermittently connected or offline-first enterprise deployments",
            "Backend-for-Frontend (BFF) and integration gateway patterns for multi-client enterprise environments"
        ]
    },
    {
        title: "Platform Engineering & DevOps",
        subtitle: "(Operational Infrastructure)",
        icon: Settings,
        description: "Design of reusable infrastructure foundations for distributed systems, focusing on observability, deployment portability, and operational consistency across enterprise environments.",
        items: [
            "Infrastructure abstraction across MinIO, AWS S3, and Azure Blob Storage for portable deployments",
            "Automated messaging provisioning and queue orchestration across multiple messaging providers",
            "Service discovery, ingress routing, and distributed configuration using Consul and modern orchestration tools",
            "Observability and monitoring using Prometheus, Grafana, and structured logging pipelines",
            "Hybrid cloud deployments using Azure Container Apps and on-premise Kubernetes-style environments",
            "Infrastructure as Code (IaC) principles applied to enterprise-scale system standardization"
        ]
    }
];

export const education = [
    {
        title: "Short Course in Mobile Application Development",
        institution: "Asian College of Science and Technology",
        year: "2014",
        details: ["Technologies: Java, PHP (CodeIgniter)", "Quezon City, Philippines"]
    },
    {
        title: "Vocational Training in Software Development",
        institution: "ICOTP on Information Communication Technology",
        year: "2007-2009",
        details: ["Technologies: C, C++, VB6, Java, PostgreSQL", "Pawing Palo, Leyte"]
    },
    {
        title: "Secondary Education",
        institution: "Tanauan National High School",
        year: "2004-2008",
        details: ["Tanauan, Leyte"]
    }
];

export const experience = [
    {
        role: "Lead Developer",
        company: "FPOSI",
        period: "2023 - Present",
        description: "Leading development of enterprise systems for LGU and government-facing platforms, including document processing and workflow automation systems deployed in on-premise and restricted infrastructure environments. Currently involved in incremental modernization toward Spring Boot 4 while maintaining backward compatibility with production-critical legacy systems."
    },
    {
        role: "Lead Developer",
        company: "IDCSI",
        period: "2018 - 2023",
        description: "Led multiple enterprise system implementations across government and private sector clients, often requiring integration with legacy desktop systems and heterogeneous infrastructure environments. Focused on system stability, operational continuity, and gradual migration toward service-oriented architectures."
    },
    {
        role: "Senior Developer",
        company: "IDCSI",
        period: "2011 - 2018",
        description: "Developed core enterprise modules including data-heavy operational systems, reporting engines, and backend services. Focused on system reliability, performance optimization, and maintaining long-lived production systems under increasing data and user load."
    },
    {
        role: "Programming Instructor",
        company: "Flora Ylagan High School",
        period: "2015 - 2016",
        description: "Designed and delivered programming curriculum focused on algorithmic thinking, database design, and software fundamentals using C and MySQL."
    },
    {
        role: "Programmer",
        company: "Leyte Provincial Capitol",
        period: "2010 - 2011",
        description: "Developed backend systems for provincial payroll and records management, marking the beginning of long-term work in government digital modernization systems."
    }
];

export const projects = [
    {
        title: "WealthSnap — Personal Finance System",
        year: "2026",
        generation: "Gen 4",
        categories: ["Mobile", "AI & ML", "Live"],
        description: "An offline-first personal finance platform designed around local data ownership, privacy, and operational independence from cloud dependencies. Built as a mobile-first financial execution system where budgeting, computation, and asset tracking continue to function fully without internet connectivity.",
        roles: "Product Owner & Engineer",
        teamSize: "Solo Project",
        deployment: "Production (Google Play Store)",
        stack: "React Native, Expo, SQLite, Google Gemini API",
        keyPoints: [
            "Designed an offline-first financial architecture where all records, computations, and analytics remain fully available without external services.",
            "Implemented rolling financial behavior analysis instead of static category budgeting to better reflect real-world spending patterns over time.",
            "Built a unified local ledger capable of consolidating cash flow, investments, crypto assets, and recurring financial events.",
            "Integrated optional AI-assisted document extraction for receipts while maintaining full local-first control over sensitive financial data.",
            "Designed behavioral visualization layers focused on long-term financial patterns, trends, and habit evolution rather than static reporting."
        ]
    },
    {
        title: "Laniakea — Personal Sentiment Diary System",
        year: "2026",
        generation: "Gen 4",
        categories: ["Mobile", "AI & ML", "Experimental"],
        description: "An offline-first cognitive journaling system designed to explore long-term semantic analysis using local embeddings and lightweight machine learning models. Built as a privacy-preserving system for studying personal narrative evolution without reliance on cloud-based AI services.",
        roles: "Solo Developer / Researcher",
        teamSize: "Solo Project",
        deployment: "Local-Only",
        stack: "Kotlin, SQLite, TensorFlow Lite, Vector Embeddings",
        keyPoints: [
            "Transforms journal entries into local vector embeddings for long-term semantic comparison and behavioral pattern discovery.",
            "Implemented lightweight obfuscation strategies to reduce direct reversibility of stored semantic embeddings.",
            "Tracks semantic drift and narrative evolution using similarity scoring and temporal clustering techniques.",
            "Explores fully local AI processing pipelines using TensorFlow Lite and embedded vector systems without external inference dependencies.",
            "Designed as a constrained system focused on privacy, offline capability, and long-term cognitive pattern analysis."
        ]
    },
    {
        title: "AI-Powered Document Processing Platform",
        year: "2026",
        generation: "Gen 4",
        categories: ["Enterprise", "AI & ML", "Backend", "Web"],
        description: "A modular enterprise document intelligence platform designed for controlled environments where workflows must integrate with legacy systems, operational constraints, and on-premise infrastructure. Built around asynchronous orchestration, configurable extraction pipelines, and schema-driven document intelligence execution.",
        roles: "Architect & Lead Full Stack Developer",
        teamSize: "4 members",
        deployment: "Enterprise On-Premise",
        stack: "Java (Spring Boot), React, RabbitMQ, PostgreSQL, GraalVM",
        keyPoints: [
            "Architected the full platform structure including service boundaries, workflow orchestration, IAM integration, and infrastructure abstraction layers.",
            "Designed asynchronous document pipelines using RabbitMQ to isolate extraction stages and prevent system-wide processing bottlenecks.",
            "Implemented configurable extraction workflows capable of switching between OCR engines, GPT-based extraction, and Gemini-based processing without system rewrites.",
            "Designed runtime schema generation to dynamically align extracted document structures with downstream enterprise workflows and contracts.",
            "Built transformation hooks using embedded JavaScript execution for normalization of vendor-specific and legacy document formats.",
            "Integrated Human-in-the-Loop (HITL) validation workflows for low-confidence extraction scenarios requiring manual review.",
            "Developed reusable platform SDK integrations for logging, security, storage, and service-to-service communication standardization.",
            "Modernized legacy document workflows incrementally without requiring full system replacement."
        ]
    },
    {
        title: "Enterprise Microservices Core Framework (SDK)",
        year: "2025",
        generation: "Gen 3",
        categories: ["Infrastructure", "Backend", "Enterprise"],
        description: "A reusable enterprise platform SDK designed to standardize infrastructure behavior and reduce operational complexity across distributed systems in hybrid enterprise environments.",
        roles: "Architect & Platform Engineer",
        teamSize: "Solo Project",
        stack: "Java (Spring Boot), Maven, RabbitMQ, AWS, Azure, MinIO",
        keyPoints: [
            "Designed a pluggable storage abstraction layer supporting AWS S3, Azure Blob Storage, and MinIO interchangeably.",
            "Implemented a declarative messaging framework capable of provisioning queues, bindings, and retry policies across multiple providers.",
            "Built unified messaging contracts supporting RabbitMQ, AWS SQS, and Azure Service Bus.",
            "Developed reusable Spring Boot starters standardizing OAuth 2.1/OIDC, validation, logging, and exception handling across services.",
            "Engineered dynamic routing data source capabilities enabling runtime multi-tenant database resolution.",
            "Introduced Backend-for-Frontend (BFF) patterns to decouple frontend requirements from backend domain services.",
            "Focused on eliminating duplicated infrastructure logic across enterprise systems through reusable platform abstractions."
        ]
    },
    {
        title: "Enterprise Authorization & Identity Server",
        year: "2025",
        generation: "Gen 3",
        categories: ["Security", "Backend", "Enterprise"],
        description: "A centralized identity and access management platform designed to unify authentication, authorization, and service-level security across distributed enterprise systems.",
        roles: "Lead Full Stack Developer",
        teamSize: "Solo Project",
        deployment: "Clustered High-Availability Environment",
        stack: "Java (Spring Boot), OAuth 2.1, OIDC, Redis, MySQL",
        keyPoints: [
            "Built a centralized OAuth 2.1 and OpenID Connect identity provider supporting both user authentication and machine-to-machine authorization.",
            "Implemented cluster-safe key rotation enabling continuous operation without downtime.",
            "Designed distributed session and token management using Redis for horizontally scalable deployments.",
            "Integrated service-level RBAC and permission projection for microservice authorization control.",
            "Served as the core security foundation for enterprise platform and IDP ecosystems."
        ]
    },
    {
        title: "Modern Image Classification Pipeline",
        year: "2024",
        generation: "Gen 3",
        categories: ["AI & ML", "Experimental"],
        description: "An end-to-end machine learning pipeline for reproducible image classification workflows, automated evaluation, and production-ready model generation.",
        roles: "Lead AI Developer",
        teamSize: "Solo Project",
        deployment: "Local / Cloud",
        stack: "Python, TensorFlow Lite, Keras, Pandas, Scikit-learn",
        keyPoints: [
            "Built automated preprocessing and augmentation pipelines for large-scale image datasets.",
            "Implemented transfer learning using EfficientNetV2 with configurable classification architectures.",
            "Designed training strategies including gradual unfreezing and cosine learning rate scheduling.",
            "Automated model evaluation reporting including confusion matrices and performance dashboards."
        ]
    },
    {
        title: "Property Tax Management System",
        year: "2023",
        generation: "Gen 2",
        categories: ["Government", "Backend", "Mobile", "Web"],
        description: "A distributed LGU-oriented property tax platform supporting valuation, assessment, billing, and synchronization across geographically distributed government deployments.",
        roles: "Lead Full Stack Developer",
        teamSize: "3 members",
        deployment: "Standalone / Distributed LGU Deployments",
        stack: "Java (Servlet, JSP), Kotlin (Android), MySQL",
        keyPoints: [
            "Designed backend workflows for appraisal, tax declaration, and payment processing systems.",
            "Implemented synchronization between municipal deployments and centralized provincial systems.",
            "Built Android field tools for property inspection and data capture in offline environments.",
            "Architected system for intermittent connectivity and independent LGU operation."
        ]
    },
    {
        title: "Business License & Permit System",
        year: "2021",
        generation: "Gen 2",
        categories: ["Government", "Backend", "Desktop", "Web"],
        description: "Enterprise permit-processing platform supporting business registration, renewals, payment integration, and local deployment interoperability across LGU environments.",
        roles: "Lead Full Stack Developer",
        teamSize: "2 members",
        deployment: "Standalone / Distributed LGU Deployments",
        stack: "Java, VB.NET, MySQL, jQuery",
        keyPoints: [
            "Developed end-to-end permit lifecycle workflows covering application, validation, issuance, and renewals.",
            "Integrated online payment systems including LandBank and UnionBank transaction workflows.",
            "Built supporting VB.NET desktop utilities for local financial configuration and operational processing.",
            "Designed coexistence workflows between web services and legacy desktop operational environments."
        ]
    },
    {
        title: "Digital Signature Authentication",
        year: "2016",
        generation: "Gen 1",
        categories: ["Security", "Backend"],
        description: "Electronic system for securing and validating digital signatures, ensuring document authenticity and non-repudiation.",
        roles: "Lead Full Stack Developer",
        teamSize: "Solo Project",
        deployment: "Enterprise Self-Hosted",
        stack: "Java, MySQL, PKCS, iText",
        keyPoints: [
            "Architected a document signing pipeline initially designed for three internal document types, with structure that allows extension to additional formats over time.",
            "Built a modular Signature Processor to encapsulate PKCS-based signing logic, helping isolate format-specific handling from the core workflow.",
            "Integrated iText library to embed and validate cryptographic signatures within PDF documents.",
            "Designed secure audit trails and backend logic to manage user credentials and documents."
        ]
    },
    {
        title: "Remote Work Monitoring Platform",
        year: "2019",
        generation: "Gen 1",
        categories: ["Desktop", "Backend", "Web"],
        description: "A comprehensive tool for tracking remote work activities and providing deep insights into productivity.",
        roles: "Lead Full Stack Developer",
        teamSize: "Solo Project",
        deployment: "Enterprise Self-Hosted",
        stack: "Java, VB.NET, MySQL",
        keyPoints: [
            "Architected a full-stack platform for monitoring and managing remote employee activities.",
            "Developed a lightweight VB.NET desktop agent to capture metrics and securely transmit data.",
            "Implemented a reporting dashboard to visualize application usage and productivity trends."
        ]
    },
    {
        title: "Document Tracking System",
        year: "2022",
        generation: "Gen 2",
        categories: ["Desktop", "Backend", "Web"],
        description: "Platform for organizing and tracking digital and physical documents with advanced indexing.",
        roles: "Lead Full Stack Developer",
        teamSize: "2 members",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java, VB.NET, MySQL",
        keyPoints: [
            "Developed a dual-purpose system managing both digital assets and physical storage locations.",
            "Built a web interface with advanced search, version control, and lifecycle tracking.",
            "Created a VB.NET desktop utility for bulk scanning and automated metadata tagging."
        ]
    },
    {
        title: "Vaccination Records System",
        year: "2020",
        generation: "Gen 1",
        categories: ["Government", "Mobile", "Desktop", "Backend"],
        description: "System for managing vaccination records, administration scheduling, and compliance monitoring.",
        roles: "Team Lead & Mobile Developer",
        teamSize: "3 members",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java (Android), VB.NET, MySQL",
        keyPoints: [
            "Led Android app development for field data entry and vaccination tracking.",
            "Implemented automated SMS notification engines for vaccination schedules.",
            "Ensured robust data synchronization between mobile units and central LGU servers."
        ]
    }
];

const evolutionBase = [
    {
        generation: "Gen 0",
        title: "Foundation Systems",
        period: "2010-2015",
        description: "Early-stage enterprise development focused on database-centric systems in constrained government environments. This phase established core understanding of production data behavior, system limitations, and operational constraints.",
        impact: "Learned real-world production system behavior under constraints",
        projects: [
            "Early payroll systems",
            "Records systems",
            "CRUD-heavy applications",
            "Reporting tools",
            "SQL-centric backend systems"
        ]
    },
    {
        generation: "Gen 1",
        title: "Workflow Systems",
        period: "",
        description: "Transition from static data systems to stateful workflow-driven applications, focusing on modeling real operational processes and system state transitions.",
        impact: "Learned workflow modeling and state-driven system design",
        projects: []
    },
    {
        generation: "Gen 2",
        title: "Standalone Enterprise Systems",
        period: "",
        description: "Development of self-contained enterprise applications deployed in government environments, focusing on operational reliability and monolithic system scalability.",
        impact: "Learned monolithic system scaling and enterprise deployment constraints",
        projects: []
    },
    {
        generation: "Gen 3",
        title: "Platform & AI Systems",
        period: "",
        description: "Shift toward reusable platform architecture, internal SDK development, and early integration of AI-driven workflows into enterprise systems.",
        impact: "Learned platform abstraction and reusable infrastructure design",
        projects: []
    },
    {
        generation: "Gen 4",
        title: "AI-Native Architecture",
        period: "",
        description: "Design of systems where AI, embeddings, and structured execution models are embedded as core system primitives rather than external features.",
        impact: "Learned AI-native system design and runtime-driven architectures",
        projects: []
    }
];

export const evolution = evolutionBase.map(gen => {
    if (gen.generation === "Gen 0") return gen;

    const genProjects = projects.filter(p => (p as any).generation === gen.generation);
    if (genProjects.length === 0) return gen;

    genProjects.sort((a, b) => Number(a.year) - Number(b.year));

    const years = genProjects.map(p => Number(p.year));
    const startYear = years[0];
    const endYear = years[years.length - 1];
    const period = startYear === endYear ? `${startYear}` : `${startYear}-${endYear}`;

    const projectList = genProjects.map(p => `${p.title} (${p.year})`);

    return {
        ...gen,
        period,
        projects: projectList
    };
});
