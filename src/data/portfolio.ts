import { Globe, Monitor, Smartphone, Database, Layers } from 'lucide-react';

export const personalInfo = {
    name: "Christian Jay Soyosa",
    role: "Software Developer",
    location: "Philippines",
    email: "contact@example.com", // Placeholder, need to find if real email exists or use form
    socials: {
        linkedin: "https://www.linkedin.com/in/christian-jay-soyosa-78a662239/",
        jobstreet: "https://ph.jobstreet.com/profile/christianjay-soyosa-sTKRN4rKnB",
        github: "https://github.com/tantanjay", // Infereed
    }
};

export const about = {
    heading: "Who Am I?",
    text: [
        "I'm Christian Jay Soyosa, a results-driven Software Developer with a passion for architecting and engineering robust, scalable solutions. My experience spans the full development lifecycle, from creating dynamic web and Android applications to designing complex databases and powerful desktop tools.",
        "I am committed to continuous learning and staying at the forefront of technology. By actively exploring emerging trends, new tools, and modern methodologies, I ensure my work is not only effective but also forward-thinking."
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
        title: "Lead Developer",
        icon: LightbulbIcon, // custom component needed or map string
        description: "I architect and guide development projects from concept to completion, leading teams to deliver high-quality, maintainable code."
    },
    {
        title: "Full Stack Developer",
        icon: Layers,
        description: "Engineering end-to-end solutions, from designing scalable server-side logic APIs to building intuitive user interfaces."
    },
    {
        title: "Database Design",
        icon: Database,
        description: "Designing and optimizing robust database architectures, ensuring data integrity for high-performance applications."
    }
];

// Helper for icons mapping if needed, or import directly
import { Lightbulb as LightbulbIcon } from 'lucide-react';

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
                "Android: Java, Kotlin"
            ]
        },
        {
            title: "Exploring",
            subtitle: "(Personal & Development)",
            items: [
                "AI / ML: Python, TensorFlow",
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
        details: ["Language: Java, CodeIgniter", "Aurora Blvd, Project 3, Quezon City"]
    },
    {
        title: "Vocational Training in Software Development",
        institution: "ICOTP on Information Communication Technology",
        year: "2007-2009",
        details: ["Language: C, C++, VB6, Java Web, PostgreSQL", "Data Center. LAC, Pawing Palo, Leyte"]
    },
    {
        title: "High School Secondary Education",
        institution: "Tanauan National High School",
        year: "2004-2008",
        details: ["Brgy. Canramos Tanauan, Leyte"]
    }
];

export const experience = [
    {
        role: "Software Developer",
        company: "FPOSI",
        period: "2023-Present",
        description: "As a key developer for Local Government Unit (LGU) projects in Leyte, I specialize in engineering and implementing customized software solutions that directly address the needs of local government operations."
    },
    {
        role: "Lead Software Developer",
        company: "IDCSI",
        period: "2011-2023",
        description: "Promoted to Lead Developer, where I oversaw the full project lifecycle and mentored a team of programmers. Architected and deployed a diverse range of full-stack web applications and robust desktop solutions."
    },
    {
        role: "Programming Instructor",
        company: "Flora Ylagan High School",
        period: "2015-2016",
        description: "Developed and delivered a comprehensive curriculum for Grade 10 students, focusing on C, VB.NET, and MySQL."
    },
    {
        role: "Programmer",
        company: "Leyte Provincial Capitol",
        period: "2010-2011",
        description: "Launched my software development career by contributing to the backend of the provincial government's Payroll system."
    }
];

export const projects = [
    {
        title: "Modern Image Classification Pipeline (Personal Project)",
        category: "AI / ML",
        description: "End-to-end pipeline for training image classification models. Automatically trains deep learning models and produces detailed performance reports.",
        roles: "AI Developer",
        teamSize: "1 member",
        deployment: "Local / Cloud",
        stack: "Python, TensorFlow, Keras, Pandas, Scikit-learn, Matplotlib, Seaborn, PyYAML",
        keyPoints: [
            "Engineered a robust data loader to automatically read, split, preprocess, and augment thousands of images using techniques like RandAugment.",
            "Designed a flexible model builder leveraging transfer learning from EfficientNetV2 with a custom classification head.",
            "Implemented sophisticated training strategies, including 'Gradual Unfreezing' and 'Cosine Decay' learning rate schedulers.",
            "Built an automated evaluation module that generates an 8-graph training dashboard, confusion matrices, and per-class performance reports."
        ]
    },
    {
        title: "Enterprise Authorization & Identity Server",
        category: "Security",
        description: "Production-grade identity provider built with Spring Authorization Server. Centralized authentication/authorization (OAuth 2.1, OIDC) for a microservices ecosystem.",
        roles: "Full Stack Developer",
        teamSize: "1 member",
        deployment: "Clustered, High-Availability (HA) Environment",
        stack: "Java (Spring Boot), Spring Authorization Server, Spring Security, OAuth 2.1, OIDC, JWT, MySQL, Redis, JDBC, ShedLock, Thymeleaf",
        keyPoints: [
            "Implemented full OAuth 2.1 and OIDC-compliant server supporting Authorization Code (with PKCE), Client Credentials, and Refresh Token grants.",
            "Architected a high-performance database layer with read/write splitting using AbstractRoutingDataSource.",
            "Built an automated, cluster-safe JWT key rotation system using JWKSource and ShedLock.",
            "Integrated a distributed Redis cache for clients and authorizations.",
            "Co-located the Authorization Server with a Resource Server, building a secure, IP-whitelisted admin GUI.",
            "Developed advanced token customizers to validate business logic and inject rich user permissions into JWTs."
        ]
    },
    {
        title: "AI-Powered Document Data Extraction Platform",
        category: "Full Stack",
        description: "Advanced system for automating data extraction from documents (bills of lading, invoices, receipts) using AI.",
        roles: "Lead Developer, Full Stack Developer",
        teamSize: "4 members",
        deployment: "Publicly-Hosted On-Premises",
        stack: "Java (Spring Boot), React, C# (.NET), Hibernate, MySQL, RabbitMQ, Redis, Traefik, HashiCorp Vault, Consul, JWT, Jackson",
        keyPoints: [
            "Architected and implemented a scalable microservices infrastructure, managing Spring Boot instance replication.",
            "Led the end-to-end backend development, creating RESTful APIs for AI integration and mobile capture.",
            "Built critical UI modules in React, including the System Configuration panel and a real-time Dashboard.",
            "Implemented core logic for data verification, user management, and AI output cleansing."
        ]
    },
    {
        title: "Property Tax Assessment and Management System",
        category: "Government",
        description: "Comprehensive solution for managing the entire property tax lifecycle (valuation, billing, collection).",
        roles: "Lead Developer, Full Stack Developer",
        teamSize: "3 members",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java (Servlet, JSP), Kotlin (Android), MySQL, jQuery, Bootstrap, RESTful Web Services",
        keyPoints: [
            "Engineered the core database architecture and backend services for managing profiles, properties, appraisals, assessments, and payments.",
            "Developed key UI and API functionalities for payment processing and complex property transactions.",
            "Built a central repository for synchronizing data from individual LGU deployments to the provincial server.",
            "Created a companion Android app in Kotlin for field validation of tax declarations and receipt image capture."
        ]
    },
    {
        title: "Business License and Permit Management System",
        category: "Government",
        description: "Streamlined platform for managing the application, issuance, and renewal of business licenses and permits.",
        roles: "Lead Developer, Full Stack Developer",
        teamSize: "2 members",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java (Servlet, JSP), VB.NET, MySQL, jQuery, Bootstrap",
        keyPoints: [
            "Built the end-to-end web application for the entire permit lifecycle.",
            "Developed an integrated desktop application in VB.NET for secure payment processing.",
            "Integrated online payment gateways (LandBank, UnionBank) to facilitate seamless digital transactions.",
            "Created a desktop tool for importing historical data and configuring fee structures."
        ]
    },
    {
        title: "Digital Signature Authentication System",
        category: "Security",
        description: "An electronic system for securing and validating digital signatures on documents, ensuring authenticity, integrity, and non-repudiation.",
        roles: "Full Stack Developer",
        teamSize: "1 member",
        deployment: "Enterprise Self-Hosted",
        stack: "Java (Servlet, JSP), MySQL, jQuery, Bootstrap, PKCS, iText",
        keyPoints: [
            "Engineered the complete end-to-end system for secure document signing and verification.",
            "Integrated PKCS standards and the iText library to embed and validate cryptographic signatures within PDF documents.",
            "Designed the database schema and backend logic to manage user credentials, documents, and audit trails."
        ]
    },
    {
        title: "Remote Work Monitoring Platform",
        category: "Full Stack",
        description: "A comprehensive tool for tracking and managing remote work activities, providing insights into employee productivity.",
        roles: "Full Stack Developer",
        teamSize: "1 member",
        deployment: "Enterprise Self-Hosted",
        stack: "Java (Servlet, JSP), VB.NET, MySQL, jQuery, Bootstrap",
        keyPoints: [
            "Architected and built the full-stack web platform for managers to monitor remote employee activity.",
            "Developed a lightweight VB.NET desktop agent to capture work metrics and securely transmit data.",
            "Implemented a reporting dashboard to visualize work hours, application usage, and productivity insights."
        ]
    },
    {
        title: "Document Management and Tracking System",
        category: "Full Stack",
        description: "A platform for organizing, storing, and tracking both digital and physical documents with advanced indexing.",
        roles: "Full Stack Developer",
        teamSize: "1 member",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java (Servlet, JSP), VB.NET, MySQL, jQuery, Bootstrap",
        keyPoints: [
            "Developed a dual-purpose system to manage both digital assets and the physical storage locations.",
            "Built the web interface with advanced search, version control, and document lifecycle tracking.",
            "Created a VB.NET desktop utility for bulk scanning and metadata tagging of physical documents."
        ]
    },
    {
        title: "Vaccination Records Management System",
        category: "Healthcare",
        description: "System for managing and tracking vaccination records, including administration, scheduling, and compliance monitoring.",
        roles: "Team Lead, Mobile Developer",
        teamSize: "3 members",
        deployment: "Standalone, Distributed per LGU",
        stack: "Java (Android), VB.NET, MySQL",
        keyPoints: [
            "Led the Android app development for field data entry and tracking.",
            "Implemented automated reports and SMS notifications for vaccination schedules.",
            "Ensured data synchronization between mobile units and central servers."
        ]
    }
];

export const stats = [
    { label: "Cups of coffee", value: 500, suffix: "+" },
    { label: "Lines of Code", value: 100000, suffix: "+" },
    { label: "Completed Systems", value: 8, suffix: "" },
    { label: "Completed Tools", value: 100, suffix: "+" }
];
