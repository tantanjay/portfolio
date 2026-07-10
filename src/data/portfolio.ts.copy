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
        "I am a Lead Software Engineer with over 15 years of experience building and maintaining enterprise systems, particularly in government and regulated environments where constraints such as legacy infrastructure, limited connectivity, and long-term maintainability shape architectural decisions.",
        "My work focuses on designing backend systems and AI-enabled workflows that integrate into existing enterprise ecosystems without requiring full system replacement. This includes event-driven microservices, on-device processing, and incremental modernization strategies."
    ]
};

export const services = [
    {
        title: "Architecture & Leadership",
        subtitle: "(Core Competencies)",
        icon: Lightbulb,
        description: "System design and technical leadership focused on building scalable, maintainable backend architectures and guiding technical direction across enterprise systems.",
        items: [
            "Microservices architecture design and service decomposition",
            "Enterprise SDK and platform design to standardize development across teams",
            "System design under infrastructure, performance, and governance constraints",
            "Security architecture: OAuth 2.1, OIDC, role-based access control, and zero-trust patterns"
        ]
    },
    {
        title: "Backend & Database",
        subtitle: "(Expert Level)",
        icon: Database,
        description: "Design and maintenance of backend systems operating under mixed environments (on-premise + hybrid cloud), with emphasis on reliability and operational continuity.",
        items: [
            "Java (Spring Boot, Spring AI, Hibernate)",
            "PostgreSQL, MySQL, SQLite, Redis in production and embedded contexts",
            "Cross-platform components (C#, VB.NET legacy systems integration)",
            "GraalVM for polyglot execution in controlled environments"
        ]
    },
    {
        title: "Product & AI Development",
        subtitle: "(Applied Systems)",
        icon: Sparkle,
        description: "Integration of AI models into production systems, typically constrained by privacy requirements, offline operation, or cost limitations.",
        items: [
            "Mobile systems: Kotlin (Android), React Native (Expo)",
            "Frontend: React, TypeScript, Tailwind CSS",
            "On-device ML: TensorFlow Lite, embedding-based systems",
            "Vector search using lightweight embedded databases"
        ]
    },
    {
        title: "Systems Integration",
        subtitle: "(Enterprise Interoperability)",
        icon: Link,
        description: "Design and implementation of integration layers connecting legacy, desktop, and modern distributed systems in constrained environments.",
        items: [
            "Legacy system integration (VB.NET, desktop-to-web bridging)",
            "API mediation and protocol translation (REST, messaging, file-based workflows)",
            "Data synchronization across distributed and intermittently connected systems",
            "Incremental modernization without full system replacement"
        ]
    },
    {
        title: "DevOps & Cloud",
        subtitle: "(Practitioner Level)",
        icon: Settings,
        description: "Deployment and coordination of distributed services in on-premise and cloud environments, focusing on observability and high availability.",
        items: [
            "Service routing and ingress management using Traefik",
            "Service discovery and configuration with Consul",
            "Monitoring and observability using Prometheus and Grafana",
            "Cloud deployment using Azure Container Apps",
            "Infrastructure as Code (IaC) principles",
            "Automated monitoring and alerting pipelines"
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
        category: "Product systems",
        description: "A mobile-first personal finance system designed for offline-first operation, where all computations and storage remain on-device due to privacy and dependency constraints on external services.",
        roles: "Product Owner & Engineer",
        teamSize: "Solo Project",
        deployment: "Production (Google Play Store)",
        stack: "React Native, Expo, SQLite, Google Gemini API",
        keyPoints: [
            "Designed to operate fully offline, with cloud services only used for optional AI-assisted features like receipt parsing.",
            "Implemented a spending model that recalculates available budget based on rolling historical expenditure rather than static budgeting rules.",
            "Built multi-asset tracking for stocks, crypto, and savings, consolidated into a single local ledger.",
            "Added visualization layers for spending patterns to help identify recurring financial behavior rather than just totals.",
            "Integrated optional AI processing for document extraction, with all sensitive computation retained locally."
        ]
    },
    {
        title: "Laniakea — Personal Sentiment Diary System",
        category: "Experimental systems",
        description: "An offline-first journaling system that explores long-term sentiment tracking using embedding-based analysis. Designed as a personal research system rather than a commercial product.",
        roles: "Solo Developer / Researcher",
        teamSize: "Solo Project",
        deployment: "Local-Only",
        stack: "Kotlin, SQLite, TFLite, vector embeddings",
        keyPoints: [
            "Converts journal entries into embeddings stored locally for longitudinal analysis.",
            "Applies lightweight noise injection to reduce direct reversibility of stored vectors.",
            "Tracks changes in semantic similarity over time to observe gradual shifts in writing patterns.",
            "Uses simple clustering methods (KNN, projection techniques) for pattern exploration rather than prediction.",
            "Designed with a deliberate constraint of avoiding cloud dependency or external model reliance."
        ]
    },
    {
        title: "AI-Powered Document Processing Platform",
        category: "Domain systems",
        description: "A document processing system deployed in controlled enterprise environments where workflows must adapt to existing templates rather than replace them entirely.",
        roles: "Architect & Lead Full Stack Developer",
        teamSize: "4 members",
        deployment: "On-Premise",
        stack: "Java (Spring Boot), GraalVM, React, RabbitMQ, PostgreSQL",
        keyPoints: [
            "Architected the end-to-end system, including core service boundaries, database schema design, and event-driven workflow orchestration.",
            "Designed a template-driven extraction system to handle varied document formats without requiring code changes per document type.",
            "Introduced runtime schema generation to align extracted data with structured downstream system contracts.",
            "Implemented JavaScript-based transformation hooks for handling inconsistent or vendor-specific document layouts.",
            "Designed the messaging and workflow pipeline using RabbitMQ to support asynchronous processing and decoupled extraction stages.",
            "Designed a model-agnostic AI layer that can switch between external and internal models depending on deployment constraints.",
            "Added a manual validation workflow for cases where automated extraction confidence is insufficient.",
            "Integrated an internal SDK to standardize security, logging, and service communication across the platform."
        ]
    },
    {
        title: "Enterprise Microservices Core Framework (SDK)",
        category: "Infrastructure thinking",
        description: "A high-performance Java-based SDK (JAR) that abstracts infrastructure complexity, providing a standardized foundation for building scalable, cloud-native microservices.",
        roles: "Architect",
        teamSize: "Solo Project",
        stack: "Java (Spring Boot), Maven, AWS, Azure, RabbitMQ",
        keyPoints: [
            "Architected a pluggable infrastructure layer allowing seamless switching between AWS S3, Azure Blob Storage, and local MinIO without modifying application logic.",
            "Implemented a unified messaging abstraction supporting RabbitMQ, AWS SQS, and Azure Service Bus, featuring automated resource provisioning (queues/topics) and standardized consumer patterns.",
            "Developed custom Spring Boot starters that automate security (OAuth 2.1/OIDC), distributed rate limiting, and global exception handling for 'day-one' production readiness.",
            "Engineered a dynamic RoutingDataSource to support multi-tenant database architectures and flexible data-source switching at runtime.",
            "Introduced a Backend-for-Frontend (BFF) pattern to decouple client-specific requirements from core domain services, enabling optimized data aggregation and reduced network latency.",
            "Standardized enterprise data contracts and validation logic, ensuring 100% consistency in error reporting and transaction behavior across the entire service ecosystem."
        ]
    },
    {
        title: "Modern Image Classification Pipeline",
        category: "Experimental systems",
        description: "End-to-end pipeline for training image classification models. Automatically trains deep learning models and produces detailed performance reports.",
        roles: "Lead AI Developer",
        teamSize: "Solo Project",
        deployment: "Local / Cloud",
        stack: "Python, TFLite, Keras, Pandas, Scikit-learn, Matplotlib, Seaborn",
        keyPoints: [
            "Engineered a robust data loader to automatically preprocess and augment thousands of images using RandAugment.",
            "Designed a flexible model builder leveraging transfer learning from EfficientNetV2 with a custom classification head.",
            "Implemented sophisticated training strategies, including 'Gradual Unfreezing' and 'Cosine Decay' learning rate schedulers.",
            "Built an automated evaluation module that generates a comprehensive training dashboard and confusion matrices."
        ]
    },
    {
        title: "Enterprise Authorization & Identity Server",
        category: "Infrastructure thinking",
        description: "A professional-grade security hub that manages logins and permissions across the entire microservices ecosystem.",
        roles: "Lead Full Stack Developer",
        teamSize: "Solo Project",
        deployment: "Clustered, High-Availability (HA) Environment",
        stack: "Java (Spring Boot), OAuth 2.1, OIDC, MySQL, Redis",
        keyPoints: [
            "Built a central identity provider following the latest OAuth 2.1 and OIDC standards to secure internal and external service communication.",
            "Implemented an automated, cluster-safe system to rotate security keys without any manual intervention or downtime.",
            "Served as the primary security gateway for the AI Document Platform, managing all user permissions and distributed session data via Redis.",
            "Optimized database performance using read/write splitting to ensure fast authentication even during high-traffic periods."
        ]
    },
    {
        title: "Property Tax Management System",
        category: "Domain systems",
        description: "Comprehensive solution for managing the entire property tax lifecycle including valuation, billing, and collection.",
        roles: "Lead Full Stack Developer",
        teamSize: "3 members",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java (Servlet, JSP), Kotlin (Android), MySQL, RESTful Web Services",
        keyPoints: [
            "Engineered core database architecture and services for managing appraisals and payment assessments.",
            "Built a central repository for synchronizing data from individual LGU deployments to provincial servers.",
            "Created a companion Android app in Kotlin for field validation and tax declaration capture."
        ]
    },
    {
        title: "Business License & Permit System",
        category: "Domain systems",
        description: "Streamlined platform for managing the application, issuance, and renewal of business licenses and permits.",
        roles: "Lead Full Stack Developer",
        teamSize: "2 members",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java, VB.NET, MySQL, jQuery, Bootstrap",
        keyPoints: [
            "Built the end-to-end web application for the entire permit lifecycle.",
            "Integrated online payment gateways (LandBank, UnionBank) for seamless digital transactions.",
            "Developed a VB.NET desktop utility for secure, local payment processing and fee configuration."
        ]
    },
    {
        title: "Digital Signature Authentication",
        category: "Infrastructure thinking",
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
        category: "Domain systems",
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
        category: "Domain systems",
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
        category: "Domain systems",
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
