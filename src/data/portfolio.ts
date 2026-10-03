import { Database, Lightbulb, Sparkle, Settings, Link } from 'lucide-react';

export const personalInfo = {
    name: "Christian Jay Soyosa",
    role: "Software Engineer & Architect",
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
        "I am a software engineer and platform architect with over 15 years of experience building and modernizing enterprise systems in government and regulated environments, where reliability, security, and long-term operational continuity are core constraints rather than optional concerns. On most projects, I also lead the technical side.",
        
        "My work focuses on designing and building backend platforms rather than isolated applications — including identity and access management (IAM), intelligent document processing (IDP) systems, and schema-driven execution runtimes that transform unstructured enterprise data into structured, governed workflows.",
        
        "I specialize in building reusable platform scaffolds and infrastructure layers that function as internal enterprise execution foundations — covering identity, messaging, storage, orchestration, and AI-enabled workflows — enabling faster development of domain-specific systems while maintaining strict consistency, scalability, and security across distributed environments."
    ]
};

export const services = [
    {
        title: "Architecture & Leadership",
        subtitle: "(Core Competencies)",
        icon: Lightbulb,
        description: "Deciding how systems are split, secured, and evolved over years, and leading the people who build them. Most of my work is for government and regulated clients, where downtime isn't an option.",
        items: [
            "Event-driven microservices and internal SDKs that standardize infrastructure across services",
            "Incremental modernization of legacy systems, and clean rebuilds when a monolith outgrows its design",
            "Security architecture with OAuth 2.1, OIDC, RBAC, and per-client tenant isolation",
            "Leading small teams: splitting systems into modules, matching work to each developer's strengths, and handing off once the core is stable"
        ]
    },
    {
        title: "Backend & Distributed Systems",
        subtitle: "(Expert Level)",
        icon: Database,
        description: "The services behind the screens: Java APIs, message queues, and databases that keep working when traffic spikes or a dependency goes down.",
        items: [
            "Java 21 (Spring Boot, Spring AI, Hibernate, GraalVM)",
            "Event-driven pipelines on RabbitMQ and Azure Service Bus with retries and dead-letter handling",
            "PostgreSQL, MySQL, SQLite, and Redis, with read/write routing, sharding, and cache fallback",
            "Interoperability with legacy enterprise systems (VB.NET, C#, Java)"
        ]
    },
    {
        title: "Applied AI & Product Systems",
        subtitle: "(AI as a Component)",
        icon: Sparkle,
        description: "Using AI as one part of a product, not the whole product: the code around the model controls what it returns, checks its answers, and keeps things working without it.",
        items: [
            "Model-agnostic AI orchestration supporting multiple providers and local inference pipelines",
            "Model output constrained to typed schemas and verified against source evidence, alongside rules and human review",
            "On-device ML using TensorFlow Lite, embeddings, and local vector search",
            "Mobile, web, and desktop apps with Kotlin, React Native, React, and Tauri"
        ]
    },
    {
        title: "Systems Integration",
        subtitle: "(Enterprise Interoperability)",
        icon: Link,
        description: "Connecting new systems to the ones organizations already depend on: legacy desktop tools, banks, identity providers, and offices with unreliable internet.",
        items: [
            "Legacy modernization through gradual service extraction and integration layers",
            "Protocol mediation across REST APIs, file-based ingestion, and message-driven workflows",
            "Offline-first synchronization for intermittently connected deployments",
            "Federated identity (Google, Entra ID, Okta), payment gateways, and BFF patterns"
        ]
    },
    {
        title: "Platform Engineering & DevOps",
        subtitle: "(Operational Infrastructure)",
        icon: Settings,
        description: "Building the shared foundation services run on, then deploying and operating them both on-premise and in the cloud.",
        items: [
            "Internal SDKs that switch storage, messaging, and cache between on-premise and cloud by config",
            "Azure infrastructure as code with Bicep and Container Apps",
            "Load testing (k6) and autoscaling sized from real throughput",
            "Audit logs, Prometheus metrics, and alerts; on-premise stacks with Vault, Consul, and Traefik"
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
        role: "Programmer (Technical Lead)",
        company: "FPOSI",
        period: "2023 - Present",
        description: "Leading development of enterprise systems for LGU and government-facing platforms, including document processing and workflow automation systems deployed in on-premise and restricted infrastructure environments. Currently involved in incremental modernization toward Spring Boot 4 while maintaining backward compatibility with production-critical legacy systems."
    },
    {
        role: "Programmer (Technical Lead)",
        company: "IDCSI",
        period: "2018 - 2023",
        description: "Led multiple enterprise system implementations across government and private sector clients, often requiring integration with legacy desktop systems and heterogeneous infrastructure environments. Focused on system stability, operational continuity, and gradual migration toward service-oriented architectures."
    },
    {
        role: "Programmer (Senior Developer)",
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
        description: "A personal finance app where everything lives on the phone: an encrypted SQLite database, no account, no server. It brings spending, investments, debt, and savings goals into one picture of financial health. AI features are optional and use the person's own Gemini API key. 29 releases shipped since January 2026 (now v1.19).",
        roles: "Product Owner & Engineer",
        teamSize: "Solo Project",
        deployment: "Production (Google Play Store)",
        stack: "React Native (Expo), TypeScript, SQLite, AES-256, BigNumber.js, Google Gemini API",
        keyPoints: [
            "Offline-first by design: all records and calculations live in a local SQLite database, with sensitive fields encrypted (AES-256) and the key kept in the device's secure store.",
            "All money math runs through BigNumber.js instead of JavaScript floats, so totals don't drift after years of transactions.",
            "Safe-to-Spend and Runway are based on a rolling 90-day burn rate, upcoming bills, and required debt payments, rather than fixed category budgets.",
            "One ledger for cash, stocks, funds, crypto, and debt: multi-currency holdings with realized and unrealized P/L, full amortization schedules, and savings goals recorded as transfers so cash is never counted twice.",
            "Optional AI on the person's own Gemini key: receipt scanning, price and dividend lookup, and a chat grounded in a snapshot of their data. A consent screen lists exactly what each feature sends before it's used.",
            "Plain-language monthly summaries computed entirely on the device (no AI calls), plus trend charts that show habits changing over time instead of static reports.",
            "Device-to-device sync over local Wi-Fi by QR code, scheduled encrypted backups, and Excel export, all without a cloud service.",
            "Stays responsive with thousands of encrypted records: decryption runs in background batches of 500 and the UI updates optimistically."
        ]
    },
    {
        title: "Laniakea — Private Semantic Journal",
        year: "2026",
        generation: "Gen 4",
        categories: ["Mobile", "AI & ML", "Experimental"],
        description: "An Android journal that understands entries by meaning, entirely on the device. A sentence-embedding model running in TensorFlow Lite turns each entry into a vector, which powers meaning-based search, related-entry suggestions, automatic themes, and a 3D map of your writing. Nothing leaves the phone. It's a research prototype, and it deliberately reports on writing patterns instead of claiming to read emotions.",
        roles: "Solo Developer / Researcher",
        teamSize: "Solo Project",
        deployment: "Local-Only",
        stack: "Kotlin, Jetpack Compose, Room, ObjectBox (HNSW vector index), TensorFlow Lite, AES-256-GCM",
        keyPoints: [
            "Runs Google's USE-CMLM sentence encoder (a BERT-base model, 768-dimension embeddings) on the device with TensorFlow Lite, and stores the vectors in ObjectBox with an HNSW index for fast semantic search.",
            "Adds three obfuscation layers to stored vectors on top of encryption (small Laplace noise, rounding, and a per-user shuffle of dimensions) to make reversing them to text harder. They're documented as obfuscation, not formal differential privacy.",
            "Journal text is encrypted with AES-256-GCM and only decrypted in memory; exported backups use password-derived keys (PBKDF2).",
            "Tracks how writing changes over time: groups entries into themes without manual tags, finds similar past entries, and flags entries far from the average of your last 30.",
            "Built a 3D constellation map on Jetpack Compose Canvas with a custom force-directed physics engine, three layouts, and depth culling to keep it smooth with large journals.",
            "Keeps the analysis honest: quick check-ins are excluded from writing statistics, and I'm redesigning metrics whose labels read like psychological judgments so every one describes only the text."
        ]
    },
    {
        title: "AI-Powered Document Processing Platform (IDP v2)",
        year: "2026",
        generation: "Gen 4",
        categories: ["Enterprise", "AI & ML", "Backend", "Web", "Desktop"],
        description: "A platform that turns scanned business documents such as bills of lading and invoices into verified, structured data. This is the second version. The first version (2024–2025) was a single monolithic application where ingestion, extraction, and review all deployed and scaled together, so I rebuilt it on my own as four repositories: an ingestion service, an extraction service, a client portal, and the Azure infrastructure. All of them are built on my platform SDK.",
        roles: "Architect & Sole Developer",
        teamSize: "Solo (v2 rebuild)",
        deployment: "Azure Container Apps (one environment per client)",
        stack: "Java 21, Spring Boot 4, Spring AI, React 19, Tauri 2, RabbitMQ / Azure Service Bus, PostgreSQL, Redis, GraalJS, docTR, Bicep",
        keyPoints: [
            "Split the platform by job. The Inbound Service handles uploads, checking every file by its binary signature (Apache Tika) and splitting PDFs and multi-page TIFFs into 300 DPI page images; the Extract Service runs OCR, LLM extraction, and grounding; the Client Portal handles everything people touch; and the Infrastructure layer (Bicep) deploys it all to Azure.",
            "The inbound and extract services are event-driven and scale horizontally: each replica just takes the next message off the queue, so adding capacity means adding replicas.",
            "The Extract Service also has a synchronous API: send a document and get the structured result back in the same request. Systems outside IDP can use it for extraction without going through the full pipeline.",
            "Built extraction as a fan-out: one event feeds separate OCR, LLM, and vision-model queues that scale independently, and Redis atomic counters wait for all three before normalization runs.",
            "Document templates compile to Java 21 records at runtime (generated source, in-memory compiler, cached by schema hash), and Spring AI constrains the model's output to that type. A template change applies to the next document with no redeploy.",
            "Every extracted value is checked against the OCR text and its position on the page. Values with weak or no OCR evidence get a hallucination score and go to review instead of passing through silently.",
            "Per-client LLM routing across multiple cloud and self-hosted providers: priority and weighted entries, shared quota pools tracked in Redis, cooldowns on 429/503 errors, and automatic failover. Limits can be changed live from the portal.",
            "Templates carry JavaScript event hooks (onNormalized, onEvaluated, onError, onCompared) that run in a locked-down GraalJS sandbox, with allow-listed HTTP calls and read access to the client's lookup database.",
            "Kept the Client Portal as one monorepo on purpose, since I'm the only maintainer: a Spring Boot 4 API, a React 19 web portal (Template Builder, exceptions, dashboards, pipeline health), a Tauri 2 desktop app for high-volume verification, and a verification UI package shared by both.",
            "Human-in-the-loop verification with document locking, sticky routing for answered queries, and accuracy scoring on verify. Sign-in goes through the central identity server, and access is scoped by permission, queue status, and document origin.",
            "Load-tested end to end with 7,000 real documents over 15 minutes: zero failed uploads, about 466 documents per minute sustained (541 at peak) on 17 replicas, and a 16-second median from upload to extracted. Those numbers set the production replica counts and scaling thresholds."
        ]
    },
    {
        title: "AI Document Extraction Platform (IDP v1)",
        year: "2024",
        generation: "Gen 3",
        categories: ["Enterprise", "AI & ML", "Backend", "Web"],
        description: "The first version of the document processing platform: one Spring Boot application that picked up scanned documents from client file servers, extracted their data with AI, and gave reviewers a verification tool and dashboard. It ran in production and proved the idea, but because everything deployed and scaled together, it became the reason for the v2 rebuild.",
        roles: "Architect & Lead Developer",
        teamSize: "4 members",
        deployment: "Enterprise On-Premise",
        stack: "Java 21, Spring Boot 3, RabbitMQ, MySQL, Redis, React, Vault, Consul, Traefik",
        keyPoints: [
            "Automated document pickup from client SFTP servers and network shares, feeding a RabbitMQ queue so AI extraction ran in the background without blocking users.",
            "Client-specific validation and lookup scripts in JavaScript or SQL, so business rules could change without rebuilding or redeploying the application.",
            "A verification tool for reviewers and a React dashboard for monitoring and analyzing extracted data.",
            "Ran on-premise with Vault for secrets, Consul for service discovery, Traefik for routing, and Redis-backed scheduler locks so only one instance ran each job.",
            "Security with JWT, SAML2 single sign-on, and one-time-password MFA.",
            "Running it showed what had to change, especially scaling extraction separately from everything else, and those lessons became the design of v2."
        ]
    },
    {
        title: "Enterprise Microservices Core Framework (SDK)",
        year: "2025",
        generation: "Gen 3",
        categories: ["Infrastructure", "Backend", "Enterprise"],
        description: "The shared Java library my services are built on. It hides which environment a service runs in: the same code runs against MinIO, RabbitMQ, and local Redis on-premise, or Azure Blob, Service Bus, and Azure Cache in the cloud, selected by configuration. Every IDP service depends on it.",
        roles: "Architect & Platform Engineer",
        teamSize: "Solo Project",
        stack: "Java 21, Spring Boot 4, Maven, RabbitMQ, Azure Service Bus, AWS SQS, MinIO, S3, Azure Blob, Redis, Bucket4j, Caffeine, GraalJS",
        keyPoints: [
            "One storage interface over MinIO, AWS S3, and Azure Blob Storage, each with its own Actuator health check.",
            "Messaging resources (queues, topics, bindings, dead-letter queues) are declared in configuration and provisioned at startup, with listeners registered dynamically with retry settings.",
            "One messaging API for RabbitMQ, Azure Service Bus, and AWS SQS/SNS. On Service Bus it replaces each subscription's catch-all rule with a routing-key filter, so fan-out and targeted routing behave exactly like a RabbitMQ topic exchange.",
            "Shared OIDC/OAuth2 security setup: tokens are decoded into one authentication principal that every service reads the same way, with standard CORS, session, and error handling.",
            "Distributed rate limiting (Bucket4j on Redis, per user and per endpoint) and a failover cache. Both drop to local Caffeine if Redis goes down, so services keep running in a degraded mode instead of failing.",
            "Read/write routing to separate connection pools by transaction type, plus opt-in shard routing for one database per tenant. Tenants resolve from config or a catalog table, so adding one is a config change, not a redeploy.",
            "A sandboxed GraalJS runner with its own thread pool and compiled-script cache, which IDP uses to run client-defined template scripts safely.",
            "Backend-for-Frontend (BFF) session support, so browsers only hold a session cookie and the backend relays the actual token downstream.",
            "Structured audit logging: a trace ID on every request, and one audit event for each state-changing request or denied/throttled read, with the affected resource named by an @AuditResource annotation.",
            "Removes duplicated infrastructure code: the IDP ingestion, extraction, and portal services all build on it instead of each wiring their own."
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
        stack: "Java 21, Spring Boot, Spring Authorization Server, OAuth 2.1, OIDC, WebAuthn, Redis, MySQL",
        keyPoints: [
            "OAuth 2.1 and OpenID Connect provider built on Spring Authorization Server, covering both user sign-in and machine-to-machine clients.",
            "Signing keys rotate every 30 days with no downtime: ShedLock ensures only one node rotates, and the JWKS endpoint publishes old and new keys together during the switch.",
            "Sessions and tokens live in Redis so nodes scale horizontally. Access tokens last 15 minutes with ±2 minutes of jitter to spread refresh load, and refresh tokens rotate on every use.",
            "Domain-based permissions (e.g. IDP_DOCUMENT_PROCESS) and tenant tags in the token; each service maps them to its own rules without calling back to the identity server.",
            "Passkeys (WebAuthn), TOTP, and email OTP, step-up re-authentication for sensitive actions, and federated sign-in with Google, Entra ID, and Okta limited to allow-listed domains.",
            "Serves as the single sign-in for the IDP platform and other internal systems."
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
            "Architected system for intermittent connectivity and independent LGU operation.",
            "Led the team by splitting the system into modules: I built the backend services and business logic, and guided the developers who built the controllers and UIs."
        ]
    },
    {
        title: "Electronic Medical Records (EMR) System",
        year: "2023",
        generation: "Gen 2",
        categories: ["Enterprise", "Backend", "Web"],
        description: "An EMR system where I worked purely as technical lead: I designed the database and the core of the system, and three developers built it in the stack they knew best (PHP and React). I didn't write the application code. After the core was done, the team took over the hospital's ongoing requests and kept extending it.",
        roles: "Technical Lead & Database Designer",
        teamSize: "4 members (lead + 3 developers)",
        stack: "PHP, React, SQL database design",
        keyPoints: [
            "Designed the database and core data model for patient records, the foundation the rest of the system was built on.",
            "Let the developers choose the stack they were strongest in instead of imposing mine, then guided the build through design and direction without writing application code.",
            "Handed the hospital's ongoing change requests to the team once the core was stable, and the core held up as they kept building new modules on it."
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
        description: "Payroll, records, and reporting systems for local government, mostly SQL and CRUD screens running on whatever hardware the office had. This is where I learned how real data and real users behave once a system goes live.",
        impact: "Learned how production data really behaves",
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
        description: "Systems that follow a real process instead of just storing records: signing documents, scheduling vaccinations, tracking remote work. I learned to model the states something moves through and what is allowed at each step.",
        impact: "Learned to model processes as states",
        projects: []
    },
    {
        generation: "Gen 2",
        title: "Standalone Enterprise Systems",
        period: "",
        description: "Complete systems for local government units (property tax, business permits, document tracking), installed separately in each municipality and often on poor connections. They had to keep working offline, sync later, and run alongside existing VB.NET desktop tools.",
        impact: "Learned offline sync and coexisting with legacy systems",
        projects: []
    },
    {
        generation: "Gen 3",
        title: "Platform & AI Systems",
        period: "",
        description: "Shift toward reusable platform architecture: instead of rebuilding the same infrastructure for every project, I built shared pieces like an identity server and a platform SDK. This is also when I built my first AI document-extraction platform. It worked, but it was one large monolith, and the cost of maintaining and scaling it is what pushed me to rebuild it.",
        impact: "Learned what a monolithic v1 costs",
        projects: []
    },
    {
        generation: "Gen 4",
        title: "AI-Native Architecture",
        period: "",
        description: "Systems where AI is designed in from the start, and its output is checked instead of trusted: IDP v2, rebuilt on my own with runtime-compiled schemas and OCR grounding, and two on-device apps, WealthSnap and Laniakea, where personal data never has to leave the phone.",
        impact: "Learned to verify AI output instead of trusting it",
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
