export interface TranslationSet {
  fr: string;
  en: string;
}

export interface Project {
  id: string;
  title: TranslationSet;
  description: TranslationSet;
  details: TranslationSet;
  tags: string[];
  category: "cloud" | "iot" | "ai" | "virtualization";
  icon: string;
  links?: {
    code?: string;
    report?: string;
    demo?: string;
  };
}

export interface Experience {
  date: TranslationSet;
  role: TranslationSet;
  org: TranslationSet;
  location: TranslationSet;
  bullets: TranslationSet[];
  skills: string[];
}

export interface Education {
  date: TranslationSet;
  degree: TranslationSet;
  school: TranslationSet;
  location: TranslationSet;
  description: TranslationSet;
}

export interface Certification {
  name: string;
  issuer: string;
  date: TranslationSet;
  skills: string;
  url: string;
  logo: string;
}

export const info = {
  name: "Yassin NAJMI",
  title: {
    fr: "Élève Ingénieur — Systèmes Ubiquitaires & Distribués | Cloud • DevOps • IoT",
    en: "Engineering Student — Ubiquitous & Distributed Systems | Cloud • DevOps • IoT"
  },
  bio: {
    fr: "Élève ingénieur à l'INPT (Rabat) spécialisé en Cloud et IoT. Passionné par l'automatisation, l'Infrastructure as Code (IaC) et les architectures de microservices résilientes. Fort d'une expérience pratique sur AWS, Azure et le déploiement de clouds privés OpenStack.",
    en: "Engineering student at INPT (Rabat) specializing in Cloud & IoT. Passionate about automation, Infrastructure as Code (IaC), and resilient microservice architectures. Backed by practical experience with AWS, Azure, and multi-node OpenStack private cloud deployment."
  },
  status: {
    fr: "Disponible pour stage PFA (2-3 mois) dès maintenant",
    en: "Available for PFA Internship (2-3 months) right now"
  },
  contact: {
    email: "yassinnajmi5@gmail.com",
    phone: "+212 766 916 867",
    location: "Rabat, Maroc",
    linkedin: "https://www.linkedin.com/in/yassin-najmi-ynj05",
    github: "https://github.com/YNJ05"
  }
};

export const educations: Education[] = [
  {
    date: { fr: "2024 — Présent", en: "2024 — Present" },
    degree: {
      fr: "Diplôme d'Ingénieur d'État — Systèmes Ubiquitaires & Distribués (Cloud & IoT)",
      en: "State Engineering Degree — Ubiquitous & Distributed Systems (Cloud & IoT)"
    },
    school: {
      fr: "Institut National des Postes et Télécommunications (INPT)",
      en: "National Institute of Posts and Telecommunications (INPT)"
    },
    location: { fr: "Rabat, Maroc", en: "Rabat, Morocco" },
    description: {
      fr: "Formation approfondie en ingénierie du Cloud, technologies DevOps (Docker, Kubernetes, CI/CD), architectures orientées services (SOA), réseaux de communication, et solutions IoT industrielles.",
      en: "In-depth training in Cloud Engineering, DevOps technologies (Docker, Kubernetes, CI/CD pipelines), Service-Oriented Architectures (SOA), communications networking, and industrial IoT solutions."
    }
  },
  {
    date: { fr: "2022 — 2024", en: "2022 — 2024" },
    degree: {
      fr: "Classes Préparatoires aux Grandes Écoles (CPGE)",
      en: "Classes Préparatoires aux Grandes Écoles (CPGE)"
    },
    school: {
      fr: "Lycée Moulay Abdellah — TSI (Technologie et Sciences Industrielles)",
      en: "Moulay Abdellah CPGE Center — TSI (Technology & Industrial Sciences)"
    },
    location: { fr: "Safi, Maroc", en: "Safi, Morocco" },
    description: {
      fr: "Préparation rigoureuse aux concours nationaux d'admission aux écoles d'ingénieurs en mathématiques, physique, sciences de l'ingénieur, et informatique.",
      en: "Rigorous academic preparation for national engineering school entrance exams in high-level Mathematics, Physics, Engineering Sciences, and Computer Science."
    }
  },
  {
    date: { fr: "2021 — 2022", en: "2021 — 2022" },
    degree: {
      fr: "Baccalauréat — Sciences et Technologies Électriques",
      en: "Baccalaureate — Electrical Sciences & Technologies"
    },
    school: {
      fr: "Lycée Technique Qualifiant",
      en: "Technical High School"
    },
    location: { fr: "Ben Guerir, Maroc", en: "Ben Guerir, Morocco" },
    description: {
      fr: "Bases solides en génie électrique, systèmes automatisés, électronique et programmation embarquée de base.",
      en: "Solid foundations in electrical engineering, automated systems, electronics, and basic embedded microcontroller programming."
    }
  }
];

export const experiences: Experience[] = [
  {
    date: { fr: "Juillet — Septembre 2025", en: "July — September 2025" },
    role: {
      fr: "Stage de Fin d'Année — Déploiement Cloud Privé OpenStack",
      en: "End of Year Internship — OpenStack Private Cloud Deployment"
    },
    org: { fr: "Projet Capstone INPT", en: "INPT Capstone Project" },
    location: { fr: "Rabat, Maroc", en: "Rabat, Morocco" },
    bullets: [
      {
        fr: "Conception et déploiement complet d'un cloud privé IaaS basé sur OpenStack version Epoxy.",
        en: "Design and complete deployment of an IaaS private cloud based on OpenStack Epoxy version."
      },
      {
        fr: "Mise en œuvre d'une architecture multi-nœuds (Controller, Compute, Storage) et d'une configuration simplifiée single-node.",
        en: "Implemented a multi-node architecture (Controller, Compute, Storage) as well as a simplified single-node layout."
      },
      {
        fr: "Déploiement automatisé et conteneurisé des services via Kolla-Ansible sur serveurs Ubuntu.",
        en: "Orchestrated containerized service deployment via Kolla-Ansible on Ubuntu servers."
      },
      {
        fr: "Configuration et administration des services clés : Keystone (Identité), Nova (Calcul), Neutron (Réseau Provider), Cinder (Stockage par blocs), Glance (Images) et Horizon (Dashboard).",
        en: "Configured and administered key services: Keystone (Identity), Nova (Compute), Neutron (Provider Network), Cinder (Block Storage), Glance (Images), and Horizon (Web Dashboard)."
      },
      {
        fr: "Lancement, configuration réseau et vérification d'instances virtuelles Ubuntu 24.04 et Cirros avec accès SSH sécurisé.",
        en: "Launched, network-configured, and validated virtual instances of Ubuntu 24.04 and Cirros with secure SSH access."
      }
    ],
    skills: ["OpenStack", "Kolla-Ansible", "Ansible", "Docker", "Ubuntu Server", "VirtualBox", "Networks"]
  }
];

export const projects: Project[] = [
  {
    id: "openstack-cloud",
    title: {
      fr: "Infrastructure de Cloud Privé — OpenStack Epoxy",
      en: "Private Cloud Infrastructure — OpenStack Epoxy"
    },
    description: {
      fr: "Conception et déploiement d'un cloud privé multi-nœuds complet pour gérer des instances, réseaux et stockages virtuels de manière autonome.",
      en: "Design and deployment of a full multi-node private cloud to manage virtual instances, networks, and block storage autonomously."
    },
    details: {
      fr: "Ce projet phare a consisté à concevoir, installer et valider un environnement IaaS de cloud privé à l'aide d'OpenStack version Epoxy. Nous avons opté pour une architecture multi-nœuds (nœuds contrôleur, calcul et stockage par blocs) déployée de manière hautement automatisée et conteneurisée via Kolla-Ansible sur des serveurs virtuels Ubuntu 24.04. Nous avons configuré la couche réseau sous forme de réseaux fournisseurs (Provider Networks) permettant un accès direct vers l'extérieur pour les instances. Le projet a permis d'acquérir une solide expertise pratique de l'écosystème OpenStack (Keystone, Nova, Glance, Neutron, Cinder, Horizon) et des principes d'automatisation des infrastructures physiques.",
      en: "This core project involved designing, installing, and validating a private cloud IaaS environment using OpenStack Epoxy. We utilized a multi-node architecture (Controller, Compute, and Block Storage nodes) deployed in a highly automated, containerized fashion via Kolla-Ansible on Ubuntu 24.04 virtual hosts. We configured the network layer using Provider Networks, enabling direct external egress for virtual machines. This project built deep practical expertise in the OpenStack ecosystem (Keystone, Nova, Glance, Neutron, Cinder, Horizon) and physical infrastructure automation principles."
    },
    tags: ["OpenStack", "Kolla-Ansible", "Ansible", "Docker", "Ubuntu Server", "IaaS"],
    category: "cloud",
    icon: "Cloud",
    links: {
      code: "https://github.com/YNJ05/OpenStack-Epoxy-Deployment",
      demo: "https://horizon.ynj-cloud.net",
      report: "assets/OpenStack.pdf"
    }
  },
  {
    id: "aws-microservices",
    title: {
      fr: "Architecture Microservices & Pipeline CI/CD sur AWS",
      en: "Microservices Architecture & CI/CD Pipeline on AWS"
    },
    description: {
      fr: "Migration complète d'un monolithe Node.js vers une architecture de microservices conteneurisés déployés sur AWS ECS Fargate avec pipeline CI/CD automatisé.",
      en: "Complete migration of a monolithic Node.js app to containerized microservices deployed on AWS ECS Fargate with a fully automated CI/CD pipeline."
    },
    details: {
      fr: "Projet de migration et d'automatisation consistant à découper une application Node.js monolithique en deux microservices spécialisés : 'customer' (lecture seule) et 'employee' (lecture-écriture). Les services ont été conteneurisés via Docker et poussés sur Amazon ECR. Nous avons déployé le tout sur un cluster serverless Amazon ECS Fargate, exposé derrière un Application Load Balancer (ALB) avec routage basé sur les chemins d'accès (/admin/* vers employee) et restriction d'IP pour le service d'administration. Deux pipelines CodePipeline indépendants (déclenchés par GitHub/ECR) ont été créés pour piloter des déploiements CodeDeploy Blue/Green sans aucune interruption de service.",
      en: "Migration and automation project consisting of split-factoring a monolithic Node.js application into two dedicated microservices: 'customer' (read-only) and 'employee' (read-write). Services were containerized using Docker and pushed to Amazon ECR. We deployed them on a serverless Amazon ECS Fargate cluster, exposed behind an Application Load Balancer (ALB) with path-based routing (/admin/* to employee) and IP restrictions for administrative access. Two independent AWS CodePipelines (triggered by GitHub/ECR) automate blue/green deployments with AWS CodeDeploy for zero-downtime updates."
    },
    tags: ["AWS ECS Fargate", "ECR", "CodePipeline", "CodeDeploy", "Docker", "Load Balancer", "RDS MySQL"],
    category: "cloud",
    icon: "GitBranch",
    links: {
      code: "https://github.com/YNJ05/aws-ecs-microservices-cicd",
      demo: "https://alb.ynj-cloud.net",
      report: "assets/architectures_et_middlewares.pdf"
    }
  },
  {
    id: "greentech-smartbin",
    title: {
      fr: "GreenTech SmartBin — Plateforme IoT Intelligent",
      en: "GreenTech SmartBin — Intelligent IoT Platform"
    },
    description: {
      fr: "Solution de bout en bout pour la gestion des déchets urbains : capteurs ESP32, vision par ordinateur YOLOv11 local, ingestion Azure IoT Hub, et IA prédictive.",
      en: "End-to-end solution for urban waste management: ESP32 sensors, local YOLOv11 computer vision, Azure IoT Hub ingestion, and predictive AI."
    },
    details: {
      fr: "SmartBin combine le Edge Computing sur Raspberry Pi et l'ingestion de données massives sur le Cloud Azure. Un capteur ultrason mesure le niveau de remplissage, tandis qu'une caméra connectée fait tourner un modèle YOLOv11 compilé au format ONNX pour détecter l'intention de dépôt de l'utilisateur (détecter un citoyen avec un sac). Les données sont envoyées par MQTT sur WebSockets vers Azure IoT Hub, traitées en temps réel par Azure Stream Analytics (ASA), et stockées de manière optimale dans Azure Cosmos DB en séparant les données chaudes (télémétrie) et froides (inventaire). Un backend FastAPI en Python calcule des itinéraires optimisés pour les camions via le moteur OSRM, et un modèle Random Forest Regressor prédit les dates de saturation futures pour planifier à l'avance.",
      en: "SmartBin combines Edge Computing on Raspberry Pi with massive data ingestion on Microsoft Azure. An ultrasonic sensor measures fill level, while an onboard camera runs a local YOLOv11 model compiled in ONNX format to detect user depositing intent (identifying a citizen carrying a waste bag). Telemetry is streamed over MQTT-over-WebSockets into Azure IoT Hub, processed in real-time by Azure Stream Analytics (ASA), and stored in Cosmos DB with a dual-container split for hot telemetry and cold asset metadata. A FastAPI Python backend calculates optimized truck routes via OSRM, and a Random Forest Regressor predicts future bin saturation dates for proactive scheduling."
    },
    tags: ["ESP32", "Raspberry Pi", "YOLOv11 ONNX", "Azure IoT Hub", "Cosmos DB", "FastAPI", "React", "OSRM"],
    category: "iot",
    icon: "Trash2",
    links: {
      code: "https://github.com/YNJ05/GreenTech-SmartBin",
      demo: "https://smartbin.ynj-cloud.net",
      report: "assets/SmartBin.pdf"
    }
  },
  {
    id: "myheart-hospital",
    title: {
      fr: "MyHeart — Système Hospitalier en Microservices",
      en: "MyHeart — Hospital System in Microservices"
    },
    description: {
      fr: "Plateforme hospitalière complète découpée en 8 microservices indépendants, orchestrés sous Docker Compose avec passerelle API sécurisée par JWT.",
      en: "Complete hospital platform architectured into 8 independent microservices, orchestrated under Docker Compose with a JWT-secured API Gateway."
    },
    details: {
      fr: "MyHeart est une démonstration d'architecture orientée services (SOA). Elle comprend 8 services indépendants : API Gateway (point d'entrée unique et Reverse Proxy), Auth (inscription, connexion, jetons JWT), Patient, Appointment, Billing, Laboratory (FastAPI + MongoDB), Medical Records, Pharmacy et Notification. Les services de données structurées utilisent des bases PostgreSQL distinctes (Database per Service) pour garantir une isolation totale. La communication inter-services est synchrone (REST via fetch) entre les rendez-vous et la facturation, et asynchrone (fire-and-forget non bloquant) pour l'envoi instantané des notifications. Le tout est packagé avec des Dockerfiles multi-stage et orchestré sous Docker Compose avec des Healthchecks pour garantir l'ordre de démarrage.",
      en: "MyHeart is a robust Service-Oriented Architecture (SOA) implementation. It encompasses 8 independent services: API Gateway (single entry point & reverse proxy), Auth (registration, login, JWT issuance), Patient, Appointment, Billing, Laboratory (FastAPI + MongoDB), Medical Records, Pharmacy, and Notification. Structured data services utilize distinct PostgreSQL databases (Database per Service pattern) to ensure strict isolation. Inter-service communication is synchronous (REST) for appointments billing confirmation, and asynchronous (non-blocking fire-and-forget) for instant notifications. Packaged with multi-stage Dockerfiles and orchestrated using Docker Compose with precise health checks."
    },
    tags: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Docker Compose", "API Gateway", "Nginx", "JWT"],
    category: "cloud",
    icon: "Heart",
    links: {
      code: "https://github.com/YNJ05/MyHeart-Project",
      demo: "https://myheart.ynj-cloud.net",
      report: "assets/MyHeart_RAPPORT.pdf"
    }
  },
  {
    id: "ai-consult",
    title: {
      fr: "AI Consult — Chatbot Hybride Multi-Agents",
      en: "AI Consult — Hybrid Multi-Agent Chatbot"
    },
    description: {
      fr: "Système de chat intelligent qui route les requêtes utilisateur en temps réel vers le modèle optimal (Gemini, GPT-4o, DeepSeek) et synthétise les réponses.",
      en: "Intelligent chat system routing user queries in real-time to the optimal model (Gemini, GPT-4o, DeepSeek) and synthesizing responses."
    },
    details: {
      fr: "Conception d'une preuve de concept (PoC) de chatbot collaboratif multi-agents. Lorsqu'un utilisateur envoie un message (via WebSockets), un premier agent 'Juge / Routeur' basé sur Gemini 1.5 Flash analyse l'intention. Si la requête est simple, il y répond immédiatement. Si elle est complexe (code, mathématiques, raisonnement), il diffuse la requête en parallèle à trois experts distincts (Gemini, GPT-4o-mini, et DeepSeek-R1 local via Ollama). Les requêtes parallèles asynchrones sont gérées efficacement avec asyncio.gather, divisant le temps d'attente par 3. Un agent de synthèse fusionne ensuite les réponses brutes pour éliminer les hallucinations et produire la meilleure réponse possible. Projet développé avec FastAPI, Python, NestJS, MongoDB, et une application cliente Android.",
      en: "Designed and built a collaborative multi-agent chatbot Proof of Concept (PoC). When a user submits a query (over WebSockets), a Router/Judge agent powered by Gemini 1.5 Flash analyzes the intent. Simple queries are answered instantly. Complex queries (coding, math, reasoning) are multi-cast in parallel to three distinct expert models (Gemini, GPT-4o-mini, and local DeepSeek-R1 via Ollama) using asyncio.gather to divide latency by 3. A synthesis agent then merges the raw answers, eliminating hallucinations and consolidating the best points. Built with FastAPI, Python, NestJS, MongoDB, and an Android client app."
    },
    tags: ["Python", "FastAPI", "Ollama", "NestJS", "DeepSeek-R1", "Gemini API", "WebSockets", "Android"],
    category: "ai",
    icon: "MessageSquare",
    links: {
      code: "https://github.com/YNJ05/Ai-Counsult",
      demo: "https://ai-consult.ynj-cloud.net",
      report: "assets/chatbot-1.pdf"
    }
  },
  {
    id: "student-prediction",
    title: {
      fr: "Prédiction de la Réussite Académique — Data Mining",
      en: "Student Success Prediction — Data Mining"
    },
    description: {
      fr: "Pipeline complet de data mining pour prédire la réussite des étudiants en combinant nettoyage, analyse exploratoire et modèles d'ensemble (AUC = 0.963).",
      en: "Complete data mining pipeline predicting student academic success combining data cleaning, exploratory analysis, and ensemble models (AUC = 0.963)."
    },
    details: {
      fr: "Mise en place d'un pipeline d'analyse de données (Data Mining) structuré pour identifier les facteurs influençant la réussite scolaire et anticiper les décrochages. Le projet comprend l'ingestion des jeux de données, un nettoyage rigoureux des valeurs manquantes et aberrantes, une analyse exploratoire approfondie (EDA) avec visualisations statistiques (Seaborn, Matplotlib), et le feature engineering. Nous avons entraîné et comparé plusieurs algorithmes de classification, notamment Random Forest et Gradient Boosting. Les hyperparamètres ont été optimisés de manière fine, permettant d'atteindre un score d'évaluation exceptionnel avec une aire sous la courbe ROC (AUC) de 0,963.",
      en: "Implemented a structured data mining pipeline to identify factors driving academic success and proactively intercept student dropouts. The project comprises data ingestion, thorough handling of missing or anomalous values, exhaustive Exploratory Data Analysis (EDA) with statistical charts (Seaborn, Matplotlib), and advanced feature engineering. We trained and benchmarked multiple classification algorithms, centering on Random Forest and Gradient Boosting. Fine-tuned hyperparameter optimization led to an exceptional evaluation score, achieving a ROC-AUC of 0.963."
    },
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Random Forest"],
    category: "ai",
    icon: "TrendingUp",
    links: {
      code: "https://colab.research.google.com/drive/1NXnz_uGUeFbCRjdCMf0CAg2HECF7ebvl?usp=sharing",
      demo: "https://colab.research.google.com/drive/1NXnz_uGUeFbCRjdCMf0CAg2HECF7ebvl?usp=sharing"
    }
  },
  {
    id: "todo-microservices",
    title: {
      fr: "TodoApp Microservices — NestJS & Prisma",
      en: "TodoApp Microservices — NestJS & Prisma"
    },
    description: {
      fr: "Migration d'une application de gestion de tâches monolithique vers une architecture de microservices isolés avec NestJS, Next.js 14, et Prisma ORM.",
      en: "Migration of a monolithic task management application into isolated microservices with NestJS, Next.js 14, and Prisma ORM."
    },
    details: {
      fr: "Migration d'un projet Node.js classique vers une architecture moderne de microservices. Le système est divisé en un service d'authentification (Auth Service sur le port 4000) et un service de tâches (Todo Service sur le port 4001). Le stockage est géré par MongoDB configuré en Replica Set pour supporter les transactions Prisma ORM complexes. Les microservices utilisent la sécurité JWT (Access et Refresh Tokens) pour authentifier les utilisateurs, et intègrent un contrôle d'accès granulaire basé sur les rôles (RBAC - Admin vs User). L'interface utilisateur moderne a été développée en Next.js 14 avec rendu côté serveur (SSR) et styles Tailwind CSS.",
      en: "Migrated a classic Node.js project into a clean, modern microservice architecture. The system is split into an Authentication service (Auth Service on port 4000) and a Task management service (Todo Service on port 4001). Storage is driven by MongoDB configured in a Replica Set to fully support Prisma ORM transactions. Security is hardened using a dual-token JWT mechanism (Access and Refresh tokens) and role-based access control (RBAC - Admin vs User). The responsive frontend is built with Next.js 14, featuring Server-Side Rendering (SSR) and custom Tailwind CSS."
    },
    tags: ["NestJS", "Next.js 14", "MongoDB Replica Set", "Prisma ORM", "Docker Compose", "RBAC", "JWT"],
    category: "cloud",
    icon: "CheckSquare",
    links: {
      code: "https://github.com/YNJ05/TodoApp-microservices",
      demo: "https://todo.ynj-cloud.net"
    }
  },
  {
    id: "grass-cutter",
    title: {
      fr: "Grass Cutter Robot — Tondeuse Autonome",
      en: "Grass Cutter Robot — Autonomous Mower"
    },
    description: {
      fr: "Conception et étude d'une tondeuse robotisée pour terrains inclinés, incluant asservissement de vitesse, capteurs d'obstacles et alimentation solaire.",
      en: "Design and engineering study of a robotic mower for sloped terrains, incorporating speed control loops, obstacle sensors, and solar power."
    },
    details: {
      fr: "Ce projet de génie électrique et de robotique a consisté à concevoir une tondeuse autonome capable d'opérer sur des terrains inclinés jusqu'à 45°. Nous avons modélisé le système mécanique et dimensionné les moteurs réducteurs Pololu (couple de 0.057 Nm sous 6V). Nous avons conçu l'asservissement de vitesse à l'aide d'un correcteur Proportionnel-Intégral (PI) modélisé sur Scilab, validant un temps de réponse à 5% inférieur à 0.8s et un dépassement nul. Pour la détection d'obstacles, nous avons comparé et intégré des capteurs ultrasons HC-SR04 et infrarouges (Dmax ultrason de 3.3m pour une précision optimale). Enfin, nous avons dimensionné les panneaux photovoltaïques (6W, 12V) et sélectionné quatre batteries rechargeables de 6V/1.5Ah montées en série-parallèle pour assurer une autonomie d'utilisation de 2 heures.",
      en: "This electrical engineering and robotics project focused on designing an autonomous lawn mower capable of operating on sloped courses up to 45°. We modeled the physics of the system and sized Pololu gearmotors (torque >= 0.057 Nm under 6V). We engineered the speed feedback loop using a Proportional-Integral (PI) controller modeled on Scilab, validating a 5% settling time under 0.8s and zero overshoot. For obstacle avoidance, we benchmarked and integrated HC-SR04 ultrasonic sensors and IR modules. Lastly, we sized the solar panel array (6W, 12V) and selected four 6V/1.5Ah rechargeable batteries in a series-parallel circuit to guarantee 2 hours of autonomous runtime."
    },
    tags: ["Robotics", "Arduino", "PI Control", "Scilab", "Sensors", "Solar Power", "Embedded C"],
    category: "iot",
    icon: "Cpu",
    links: {
      code: "https://github.com/YNJ05/Grass-Cutter-Robot",
      demo: "https://github.com/YNJ05/Grass-Cutter-Robot",
      report: "assets/GrassCutterRobot.pdf"
    }
  },
  {
    id: "virtualization-infra",
    title: {
      fr: "Infrastructure ESXi, Active Directory & Failover Cluster",
      en: "ESXi, Active Directory & Failover Cluster Infrastructure"
    },
    description: {
      fr: "Mise en place d'une infrastructure d'entreprise hautement disponible (HA) combinant hyperviseur VMware ESXi, contrôleur AD et cluster de basculement.",
      en: "Implementation of a highly available (HA) enterprise infrastructure combining VMware ESXi hypervisor, AD controller, and failover clustering."
    },
    details: {
      fr: "Ce projet d'administration système a consisté à concevoir et déployer une infrastructure réseau robuste et hautement disponible. Nous avons installé et configuré l'hyperviseur VMware ESXi 6.7 avec des adresses IP statiques et l'avons administré via l'interface Web Host Client. Nous avons provisionné des machines virtuelles sous Windows Server 2019, créé un contrôleur de domaine Active Directory (AD DS) sous le domaine sud.local, et configuré les services DNS. Ensuite, nous avons joint les serveurs membres au domaine et configuré un cluster de basculement Windows (Failover Clustering) pour garantir la tolérance aux pannes. Le fonctionnement correct a été validé en simulant une panne physique sur un nœud (mise hors service forcée) et en observant la bascule automatique sans interruption de service. Nous avons également activé la virtualisation imbriquée (Nested Virtualization) pour faire tourner le rôle Hyper-V à l'intérieur de nos machines virtuelles.",
      en: "This systems administration project involved designing and deploying a robust, highly available (HA) enterprise infrastructure. We installed and configured VMware ESXi 6.7 hypervisor with static IP assignments, managing it through the Web Host Client. We provisioned Windows Server 2019 virtual instances, configured an Active Directory Domain Controller (AD DS) under the sud.local namespace, and set up DNS zones. We then joined member servers to the domain and established a Windows Failover Cluster to ensure service tolerance. The design was validated by forcefully shutting down a primary node and observing instant automatic failover. Nested Virtualization was enabled to run Hyper-V roles inside the VMs."
    },
    tags: ["VMware ESXi", "Windows Server", "Active Directory", "DNS", "Failover Cluster", "Nested Virtualization"],
    category: "virtualization",
    icon: "Layers",
    links: {
      code: "https://github.com/YNJ05/ESXi-AD-FailoverCluster",
      demo: "https://github.com/YNJ05/ESXi-AD-FailoverCluster",
      report: "assets/VIRTUALISATION.pdf"
    }
  }
];

export const certifications: Certification[] = [
  {
    name: "AWS Academy Graduate — Microservices and CI/CD Pipeline Builder",
    issuer: "Amazon Web Services (AWS)",
    date: { fr: "Avril 2026", en: "April 2026" },
    skills: "AWS CodePipeline, AWS CodeDeploy, Amazon ECS, Docker, Microservices.",
    url: "https://www.credly.com/", // Default placeholder for Credly
    logo: "AWS"
  },
  {
    name: "AWS Academy Graduate — Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    date: { fr: "Avril 2026", en: "April 2026" },
    skills: "Architecting Solutions on AWS, Cloud Security, Computing, Storage, Database, Networks.",
    url: "https://www.credly.com/",
    logo: "AWS"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: { fr: "Novembre 2025", en: "November 2025" },
    skills: "Cloud Foundations, Compute, Storage, Networking, IAM, OCI Services.",
    url: "https://catalog-education.oracle.com/",
    logo: "Oracle"
  }
];

export const skills = {
  languages: {
    title: { fr: "Langages de programmation", en: "Programming Languages" },
    items: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL", "Bash", "HTML/CSS"]
  },
  cloudDevops: {
    title: { fr: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: ["AWS", "Azure", "OpenStack (Epoxy)", "Kolla-Ansible", "Kubernetes", "Docker", "Docker Compose", "CI/CD", "GitLab CI", "GitHub Actions", "Jenkins"]
  },
  virtualizationIaC: {
    title: { fr: "Virtualisation & Infrastructure as Code", en: "Virtualization & IaC" },
    items: ["VMware ESXi", "Hyper-V", "VirtualBox", "KVM", "Terraform", "Ansible"]
  },
  webBackend: {
    title: { fr: "Web & Backend Development", en: "Web & Backend Development" },
    items: ["Node.js", "Express", "NestJS", "FastAPI", "Next.js", "Prisma ORM", "REST APIs", "JWT", "WebSockets", "Nginx"]
  },
  databases: {
    title: { fr: "Bases de données", en: "Databases & Data" },
    items: ["PostgreSQL", "MongoDB", "MySQL", "Azure Cosmos DB"]
  },
  iotRobotics: {
    title: { fr: "IoT & Robotique", en: "IoT & Robotics" },
    items: ["ESP32", "Raspberry Pi", "Arduino", "MQTT", "CoAP", "LoRaWAN", "OpenCV", "YOLO v11"]
  },
  observability: {
    title: { fr: "Observabilité & Outils", en: "Observability & Quality" },
    items: ["Prometheus", "Grafana", "SonarQube", "AWS CloudWatch", "Postman", "Git / GitHub"]
  }
};
