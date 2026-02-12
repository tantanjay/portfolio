import { Globe, Monitor, Smartphone, Database, Layers, Lightbulb } from 'lucide-react';

export const personalInfo = {
    name: "Christian Jay Soyosa",
    role: "Lead Software Engineer",
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
        "I'm Christian Jay Soyosa, a Lead Software Engineer dedicated to architecting and engineering robust, scalable systems. My expertise spans the full software lifecycle—from designing high-integrity backend architectures to delivering production-ready web, mobile, and desktop applications.",
        "I am committed to staying at the forefront of technology by integrating modern methodologies and emerging tools. This proactive approach ensures my solutions are not only effective for today’s challenges but also future-proof."
    ],
    services: [
        { title: "Web", icon: Globe, color: "blue" },
        { title: "Desktop", icon: Monitor, color: "red" },
        { title: "Mobile", icon: Smartphone, color: "yellow" },
        { title: "Database", icon: Database, color: "purple" }
    ]
};

export const services = [
    {
        title: "Engineering Leadership",
        icon: Lightbulb,
        description: "Architecting and guiding projects from concept to deployment, ensuring teams deliver high-quality, maintainable, and enterprise-grade code."
    },
    {
        title: "Full Stack Engineering",
        icon: Layers,
        description: "Engineering end-to-end solutions, from designing scalable server-side logic and APIs to building intuitive, responsive user interfaces."
    },
    {
        title: "Database Architecture",
        icon: Database,
        description: "Designing and optimizing robust database schemas to ensure data integrity and high performance for data-intensive applications."
    }
];

export const skills = {
    specialty: "My Specialty",
    description: "Leveraging over a decade of experience, I offer a comprehensive skill set focused on engineering high-impact software solutions.",
    categories: [
        {
            title: "Core Strengths",
            subtitle: "(Expert-Level)",
            items: [
                "Backend: Java (Spring Boot, Spring Framework, Java EE)",
                "Database: MySQL, PostgreSQL, SQLite, Hibernate",
                "Windows Desktop: C#, VB.NET"
            ]
        },
        {
            title: "Proficient",
            subtitle: "(Professional-Level)",
            items: [
                "Frontend: React, TypeScript",
                "Mobile (Native): Java, Kotlin (Android SDK)"
            ]
        },
        {
            title: "Research & Prototyping",
            subtitle: "(Personal & Development)",
            items: [
                "AI / ML: Python, TensorFlow",
                "Cross-Platform: Expo, React Native",
                "Analytics: R",
                "Web3: Web3.js"
            ]
        }
    ]
};

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
        period: "2023-Present",
        description: "Orchestrating technical strategy and engineering for Local Government Unit (LGU) projects. I specialize in architecting customized solutions that modernize complex governmental operations and data workflows."
    },
    {
        role: "Lead Developer",
        company: "IDCSI",
        period: "2018-2023",
        description: "Managing the full project lifecycle and mentoring a team of developers. Successfully architected and deployed a diverse portfolio of full-stack web applications and enterprise desktop solutions."
    },
    {
        role: "Senior Developer",
        company: "IDCSI",
        period: "2011-2018",
        description: "Engineered enterprise-level software and took ownership of complex module development. Focused on optimizing database performance and ensuring system reliability through clean code architecture."
    },
    {
        role: "Programming Instructor",
        company: "Flora Ylagan High School",
        period: "2015-2016",
        description: "Designed and delivered a comprehensive Computer Science curriculum for Grade 10 students, focusing on logic, C, VB.NET, and MySQL."
    },
    {
        role: "Programmer",
        company: "Leyte Provincial Capitol",
        period: "2010-2011",
        description: "Initiated my professional career by developing the backend logic for the provincial government's payroll and records system."
    }
];

export const projects = [
    {
        title: "WealthSnap — Your Financial Mirror",
        category: "FinTech",
        description: "A fully deployed, privacy-first personal finance ecosystem. Features a zero-knowledge architecture and custom algorithmic engines to provide high-resolution insights into net worth and spending behavior.",
        roles: "Product Owner & Engineer",
        teamSize: "Solo Project",
        deployment: "Production (Google Play Store)",
        stack: "React Native, Expo (New Architecture), SQLite, Google Gemini API",
        keyPoints: [
            "Architected a 'Local-First' zero-knowledge system where all financial logic resides strictly on-device, ensuring absolute privacy.",
            "Engineered a 'Safe to Spend' algorithm that dynamically calculates discretionary income by factoring in 90-day 'Life Burnrate.'",
            "Developed a multi-asset investment engine supporting Stocks, MP2, and Crypto with automated ledger synchronization.",
            "Implemented advanced visualizations including Allocation Treemaps and 'Pulse' velocity graphs for spending analysis.",
            "Integrated a 'Bring Your Own AI' (BYO-AI) module leveraging Google Gemini for local receipt scanning.",
            "Designed 'Subway Safe' privacy features, including biometric masking and high-precision math via BigNumber.js."
        ]
    },
    {
        title: "Modern Image Classification Pipeline",
        category: "AI / ML",
        description: "End-to-end pipeline for training image classification models. Automatically trains deep learning models and produces detailed performance reports.",
        roles: "Lead AI Developer",
        teamSize: "Solo Project",
        deployment: "Local / Cloud",
        stack: "Python, TensorFlow, Keras, Pandas, Scikit-learn, Matplotlib, Seaborn",
        keyPoints: [
            "Engineered a robust data loader to automatically preprocess and augment thousands of images using RandAugment.",
            "Designed a flexible model builder leveraging transfer learning from EfficientNetV2 with a custom classification head.",
            "Implemented sophisticated training strategies, including 'Gradual Unfreezing' and 'Cosine Decay' learning rate schedulers.",
            "Built an automated evaluation module that generates a comprehensive training dashboard and confusion matrices."
        ]
    },
    {
        title: "Enterprise Authorization & Identity Server",
        category: "Security",
        description: "Production-grade identity provider built with Spring Authorization Server. Centralized authentication and authorization for microservices ecosystems.",
        roles: "Lead Full Stack Developer",
        teamSize: "Solo Project",
        deployment: "Clustered, High-Availability (HA) Environment",
        stack: "Java (Spring Boot), OAuth 2.1, OIDC, MySQL, Redis, Thymeleaf",
        keyPoints: [
            "Implemented full OAuth 2.1 and OIDC-compliant server supporting Authorization Code (PKCE), Client Credentials, and Refresh Token grants.",
            "Architected a high-performance database layer with read/write splitting using AbstractRoutingDataSource.",
            "Built an automated, cluster-safe JWT key rotation system using JWKSource and ShedLock.",
            "Integrated a distributed Redis cache for optimized client authorizations and session management."
        ]
    },
    {
        title: "AI-Powered Document Extraction Platform",
        category: "Enterprise",
        description: "Advanced system for automating data extraction from complex documents (invoices, bills, receipts) using AI.",
        roles: "Lead Full Stack Developer",
        teamSize: "4 members",
        deployment: "Publicly-Hosted On-Premises",
        stack: "Java (Spring Boot), React, C#, Hibernate, RabbitMQ, Redis, Traefik, Vault",
        keyPoints: [
            "Architected a scalable microservices infrastructure managing Spring Boot instance replication.",
            "Led backend development, creating RESTful APIs for AI integration and mobile capture.",
            "Built critical React UI modules including System Configuration and real-time Analytics Dashboards.",
            "Implemented core logic for data verification and AI output cleansing."
        ]
    },
    {
        title: "Property Tax Management System",
        category: "Government",
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
        category: "Government",
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
        category: "Security",
        description: "Electronic system for securing and validating digital signatures, ensuring document authenticity and non-repudiation.",
        roles: "Lead Full Stack Developer",
        teamSize: "Solo Project",
        deployment: "Enterprise Self-Hosted",
        stack: "Java, MySQL, PKCS, iText",
        keyPoints: [
            "Engineered a complete system for secure document signing using PKCS standards.",
            "Integrated iText library to embed and validate cryptographic signatures within PDF documents.",
            "Designed secure audit trails and backend logic to manage user credentials and documents."
        ]
    },
    {
        title: "Remote Work Monitoring Platform",
        category: "Enterprise",
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
        category: "Government",
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
        category: "Healthcare",
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

export const stats = [
    { label: "Cups of Coffee", value: 500, suffix: "+" },
    { label: "Lines of Code", value: 100000, suffix: "+" },
    { label: "Enterprise Systems", value: 8, suffix: "" },
    { label: "Tools Developed", value: 100, suffix: "+" }
];