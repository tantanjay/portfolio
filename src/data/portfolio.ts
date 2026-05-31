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
        "I am a Lead Software Engineer and systems architect with 15+ years of experience building and modernizing enterprise platforms in regulated and mission-critical environments, where reliability, security, and long-term scalability are non-negotiable.",
        "My work focuses on designing and building backend platforms rather than isolated applications — including identity and access management (IAM), intelligent document processing (IDP) systems, and schema-driven execution runtimes that turn unstructured inputs into governed, structured outcomes.",
        "I specialize in building platform scaffolds and infrastructure layers that other systems run on top of — identity, messaging, storage, and orchestration — with a strong emphasis on clear system boundaries, secure multi-tenant design, and deterministic runtime behavior."
    ]
};

export const services = [
    {
        title: "Architecture & Leadership",
        subtitle: "(Core Competencies)",
        icon: Lightbulb,
        description: "System architecture and technical leadership focused on progressive modernization of enterprise systems operating under infrastructure, governance, and operational constraints.",
        items: [
            "Event-driven microservices architecture and bounded service decomposition",
            "Enterprise SDK and internal platform engineering for operational standardization",
            "Incremental modernization strategies for actively used production systems",
            "Security architecture using OAuth 2.1, OIDC, RBAC, and zero-trust communication patterns"
        ]
    },
    {
        title: "Backend & Distributed Systems",
        subtitle: "(Expert Level)",
        icon: Database,
        description: "Design and implementation of distributed backend systems emphasizing operational resilience, interoperability, and infrastructure portability across hybrid environments.",
        items: [
            "Java (Spring Boot, Spring AI, Hibernate, GraalVM)",
            "Messaging systems using RabbitMQ, asynchronous workflows, and queue orchestration",
            "PostgreSQL, MySQL, SQLite, Redis across enterprise and embedded deployments",
            "Cross-platform interoperability with legacy desktop systems (VB.NET, C#, Java)"
        ]
    },
    {
        title: "Applied AI & Product Systems",
        subtitle: "(Production-Focused AI)",
        icon: Sparkle,
        description: "Practical integration of AI systems into enterprise and offline-first environments where deployment flexibility, privacy, and operational continuity are critical.",
        items: [
            "Model-agnostic AI orchestration supporting configurable providers and local inference",
            "On-device ML using TensorFlow Lite, embeddings, and lightweight vector systems",
            "Mobile systems: Kotlin (Android), React Native (Expo)",
            "Frontend systems using React, TypeScript, and Tailwind CSS"
        ]
    },
    {
        title: "Systems Integration",
        subtitle: "(Enterprise Interoperability)",
        icon: Link,
        description: "Integration of legacy, desktop, and distributed enterprise systems operating under inconsistent infrastructure and constrained deployment environments.",
        items: [
            "Legacy modernization through gradual service extraction and infrastructure abstraction",
            "Protocol mediation across REST APIs, messaging workflows, and file-based integrations",
            "Distributed synchronization strategies for intermittently connected deployments",
            "Backend-for-Frontend (BFF) and integration gateway design patterns"
        ]
    },
    {
        title: "Platform Engineering & DevOps",
        subtitle: "(Operational Infrastructure)",
        icon: Settings,
        description: "Design of reusable infrastructure foundations focused on observability, deployment portability, and operational consistency across distributed enterprise environments.",
        items: [
            "Infrastructure abstraction across MinIO, AWS S3, and Azure Blob Storage",
            "Automated messaging resource provisioning and queue orchestration",
            "Service discovery, ingress management, and distributed configuration using Consul and Traefik",
            "Monitoring and observability using Prometheus and Grafana",
            "Hybrid cloud deployment using Azure Container Apps and on-premise orchestration",
            "Infrastructure as Code (IaC) principles and operational standardization"
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
        description: "Leading development for LGU-facing systems, including document processing and data workflows deployed in environments with strict on-premise constraints and limited external dependencies. Currently involved in incremental migration of core services to Spring Boot 4 while maintaining compatibility with existing production systems still in active use."
    },
    {
        role: "Lead Developer",
        company: "IDCSI",
        period: "2018 - 2023",
        description: "Managed multiple enterprise systems deployed across government and private clients, often requiring integration with older desktop applications and inconsistent infrastructure environments. Focused on maintaining system uptime while gradually introducing service-oriented architecture patterns."
    },
    {
        role: "Senior Developer",
        company: "IDCSI",
        period: "2011 - 2018",
        description: "Worked on core enterprise modules including database-heavy systems and reporting tools. Much of the work involved maintaining and optimizing systems that had already been in production for years, with emphasis on stability and performance under increasing data loads."
    },
    {
        role: "Programming Instructor",
        company: "Flora Ylagan High School",
        period: "2015 - 2016",
        description: "Designed curriculum for Computer Science students, focusing on algorithmic logic and database design using C and MySQL."
    },
    {
        role: "Programmer",
        company: "Leyte Provincial Capitol",
        period: "2010 - 2011",
        description: "Developed backend logic for provincial payroll and records systems, marking the start of a decade-plus career in government tech modernization."
    }
];

export const projects = [
    {
        title: "WealthSnap — Personal Finance System",
        year: "2026",
        generation: "Gen 4",
        categories: ["Mobile", "AI & ML", "Live"],
        description: "An offline-first personal finance platform designed around privacy, local ownership of data, and operational independence from cloud infrastructure. Built as a mobile-first system where financial computation, budgeting logic, and asset tracking remain fully functional without continuous internet access.",
        roles: "Product Owner & Engineer",
        teamSize: "Solo Project",
        deployment: "Production (Google Play Store)",
        stack: "React Native, Expo, SQLite, Google Gemini API",
        keyPoints: [
            "Designed an offline-first architecture where all financial records, computations, and visualizations remain available without external services.",
            "Implemented rolling expenditure analysis instead of static category budgeting to better model real-world spending behavior over time.",
            "Built a unified local ledger capable of consolidating savings, stock portfolios, crypto assets, and recurring transactions.",
            "Integrated optional AI-assisted document extraction for receipts while preserving local-first processing for sensitive financial information.",
            "Designed behavioral visualization layers focused on spending trends, recurring patterns, and long-term financial habits rather than static summaries."
        ]
    },
    {
        title: "Laniakea — Personal Sentiment Diary System",
        year: "2026",
        generation: "Gen 4",
        categories: ["Mobile", "AI & ML", "Experimental"],
        description: "An offline-first research-oriented journaling system exploring longitudinal semantic analysis using local embeddings and lightweight machine learning techniques. Designed to investigate privacy-preserving sentiment exploration without dependence on cloud-based AI services.",
        roles: "Solo Developer / Researcher",
        teamSize: "Solo Project",
        deployment: "Local-Only",
        stack: "Kotlin, SQLite, TensorFlow Lite, Vector Embeddings",
        keyPoints: [
            "Transforms journal entries into local vector embeddings for long-term semantic comparison and trend exploration.",
            "Implemented lightweight obfuscation and noise injection strategies to reduce direct reversibility of stored embeddings.",
            "Tracks semantic drift and writing-pattern evolution through similarity analysis and temporal clustering.",
            "Explores local-only AI processing using TensorFlow Lite and embedded vector systems without external inference dependencies.",
            "Designed as an intentionally constrained system prioritizing privacy, offline operation, and local ownership of behavioral data."
        ]
    },
    {
        title: "AI-Powered Document Processing Platform",
        year: "2026",
        generation: "Gen 4",
        categories: ["Enterprise", "AI & ML", "Backend", "Web"],
        description: "A modular document processing platform designed for controlled enterprise deployments where workflows must coexist with existing operational procedures, legacy systems, and constrained infrastructure environments. Built around asynchronous orchestration, configurable extraction pipelines, and progressive modernization principles.",
        roles: "Architect & Lead Full Stack Developer",
        teamSize: "4 members",
        deployment: "Enterprise On-Premise",
        stack: "Java (Spring Boot), React, RabbitMQ, PostgreSQL, GraalVM",
        keyPoints: [
            "Architected the overall platform structure including service boundaries, workflow orchestration, authentication integration, and infrastructure abstractions.",
            "Designed asynchronous document pipelines using RabbitMQ to isolate extraction stages and prevent processing bottlenecks from cascading across dependent services.",
            "Implemented configurable extraction workflows capable of switching between internal OCR engines, GPT-based extraction, and Gemini-based processing without application-level rewrites.",
            "Designed runtime schema generation to dynamically align extracted document structures with downstream enterprise contracts and workflows.",
            "Built transformation hooks using embedded JavaScript execution to normalize inconsistent vendor-specific document layouts and legacy formats.",
            "Integrated Human-in-the-Loop (HITL) validation workflows for low-confidence extraction scenarios requiring operational review.",
            "Introduced reusable platform SDK integrations to standardize logging, security, storage access, and inter-service communication across the ecosystem.",
            "Modernized legacy document workflows incrementally without requiring full replacement of actively used production systems."
        ]
    },
    {
        title: "Enterprise Microservices Core Framework (SDK)",
        year: "2025",
        generation: "Gen 3",
        categories: ["Infrastructure", "Backend", "Enterprise"],
        description: "A convention-driven enterprise SDK designed to standardize infrastructure behavior, reduce operational inconsistency, and simplify distributed service development across hybrid enterprise environments.",
        roles: "Architect & Platform Engineer",
        teamSize: "Solo Project",
        stack: "Java (Spring Boot), Maven, RabbitMQ, AWS, Azure, MinIO",
        keyPoints: [
            "Designed a pluggable infrastructure abstraction layer supporting interchangeable storage providers including AWS S3, Azure Blob Storage, and MinIO.",
            "Implemented a declarative messaging framework capable of automatically provisioning queues, bindings, dead-letter policies, and delayed exchanges across multiple messaging providers.",
            "Built unified messaging abstractions supporting RabbitMQ, AWS SQS, and Azure Service Bus through provider-independent service contracts.",
            "Developed reusable Spring Boot starters standardizing OAuth 2.1/OIDC security, distributed rate limiting, validation, and exception handling across services.",
            "Engineered dynamic RoutingDataSource capabilities enabling runtime multi-tenant database resolution and flexible deployment architectures.",
            "Introduced Backend-for-Frontend (BFF) support patterns to decouple frontend requirements from core domain services.",
            "Focused heavily on operational consistency, infrastructure portability, and reduction of duplicated cross-service engineering effort."
        ]
    },
    {
        title: "Enterprise Authorization & Identity Server",
        year: "2025",
        generation: "Gen 3",
        categories: ["Security", "Backend", "Enterprise"],
        description: "A centralized identity and access management platform designed to unify authentication, authorization, and service-to-service security across distributed enterprise systems.",
        roles: "Lead Full Stack Developer",
        teamSize: "Solo Project",
        deployment: "Clustered High-Availability Environment",
        stack: "Java (Spring Boot), OAuth 2.1, OIDC, Redis, MySQL",
        keyPoints: [
            "Built a centralized OAuth 2.1 and OIDC-compliant identity provider supporting both user-facing and machine-to-machine authentication flows.",
            "Implemented automated cluster-safe signing key rotation to support continuous secure operation without service downtime.",
            "Designed distributed session management and token orchestration using Redis to support horizontally scaled deployments.",
            "Integrated RBAC and service-level authorization models for distributed microservice communication.",
            "Served as the unified security gateway for modernized enterprise workflows and asynchronous service ecosystems."
        ]
    },
    {
        title: "Modern Image Classification Pipeline",
        year: "2024",
        generation: "Gen 3",
        categories: ["AI & ML", "Experimental"],
        description: "An end-to-end machine learning experimentation pipeline focused on reproducible image classification workflows, automated evaluation, and deployment-ready model generation.",
        roles: "Lead AI Developer",
        teamSize: "Solo Project",
        deployment: "Local / Cloud",
        stack: "Python, TensorFlow Lite, Keras, Pandas, Scikit-learn",
        keyPoints: [
            "Designed automated preprocessing and augmentation workflows capable of handling large-scale image datasets.",
            "Implemented transfer-learning pipelines using EfficientNetV2 with configurable classification architectures.",
            "Integrated advanced training strategies including gradual unfreezing and cosine decay learning-rate scheduling.",
            "Built automated reporting pipelines generating confusion matrices, evaluation summaries, and training dashboards."
        ]
    },
    {
        title: "Property Tax Management System",
        year: "2023",
        generation: "Gen 2",
        categories: ["Government", "Backend", "Mobile", "Web"],
        description: "Distributed LGU-oriented property tax management platform designed to support valuation, assessment, billing, and synchronization workflows across geographically distributed deployments.",
        roles: "Lead Full Stack Developer",
        teamSize: "3 members",
        deployment: "Standalone / Distributed LGU Deployments",
        stack: "Java (Servlet, JSP), Kotlin (Android), MySQL",
        keyPoints: [
            "Designed backend workflows for appraisals, tax declarations, and payment assessment management.",
            "Implemented synchronization workflows between municipal deployments and centralized provincial repositories.",
            "Built Android-based field validation tools for mobile property inspection and declaration capture.",
            "Designed around intermittent connectivity and independently operating LGU deployments."
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
        stack: "Java, VB.NET, MySQL, jQuery, Bootstrap",
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
        stack: "Java, VB.NET, MySQL, jQuery",
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
        stack: "Java, VB.NET, MySQL, jQuery",
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
        description: "Database-centric application development under constrained government and enterprise environments. This is the “systems literacy” phase — learning how data, constraints, and production workflows actually behave.",
        impact: "Learned production data behavior",
        projects: [
            "Early payroll systems",
            "Records systems",
            "CRUD-heavy applications",
            "Reporting tools",
            "SQL-centric backend work"
        ]
    },
    {
        generation: "Gen 1",
        title: "Workflow Systems",
        period: "",
        description: "Moving from basic data storage to stateful workflows and tracking systems—learning how to model complex operational processes before scaling them into full enterprise systems.",
        impact: "Learned workflow modeling",
        projects: []
    },
    {
        generation: "Gen 2",
        title: "Standalone Enterprise Systems",
        period: "",
        description: "Building monolithic, self-contained Java Servlet applications to serve as the centralized operational backbone for local government units.",
        impact: "Learned monolithic scaling and centralized system constraints",
        projects: []
    },
    {
        generation: "Gen 3",
        title: "Platform & AI Systems",
        period: "",
        description: "Transitioning to standardized abstractions, reusable internal SDKs, and introducing automated AI pipelines.",
        impact: "Learned platform abstraction design",
        projects: []
    },
    {
        generation: "Gen 4",
        title: "AI-Native Architecture",
        period: "",
        description: "Designing offline-first systems where generative AI and vectorized search are baked deeply into the core local capabilities.",
        impact: "Learned AI as a system primitive",
        projects: []
    }
];

export const evolution = evolutionBase.map(gen => {
    if (gen.generation === "Gen 0") return gen;

    // Extract projects for this generation from the main projects array
    const genProjects = projects.filter(p => (p as any).generation === gen.generation);
    if (genProjects.length === 0) return gen;

    // Sort projects from oldest to newest for the timeline display
    genProjects.sort((a, b) => Number(a.year) - Number(b.year));

    // Calculate dynamic period (e.g., "2021-2023" or "2026")
    const years = genProjects.map(p => Number(p.year));
    const startYear = years[0];
    const endYear = years[years.length - 1];
    const period = startYear === endYear ? `${startYear}` : `${startYear}-${endYear}`;

    // Format projects list
    const projectList = genProjects.map(p => `${p.title} (${p.year})`);

    return {
        ...gen,
        period,
        projects: projectList
    };
});
