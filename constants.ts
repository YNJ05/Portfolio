import { Project, Experience, Skill } from './types';

export const PROFILE_IMAGE = "https://media.licdn.com/dms/image/v2/D4E03AQG5oyd-wpIWvg/profile-displayphoto-crop_800_800/B4EZn0.UjyHgAI-/0/1760751603330?e=1766016000&v=beta&t=QVyQXbpiDZEHV_-L09zvKBwh55O64vXn9NXmtc5Dxpo"; // Replace with your image URL

export const RESUME_CONTENT = `
Yassin NAJMI
Étudiant en ingénierie à l’INPT, spécialisé en Systèmes Distribués (Cloud/IoT)
Email: yassinnajmi5@gmail.com
Téléphone: +212 766-916-867
Site: yassinnajmi.me
GitHub: YNJ05
LinkedIn: Yassin NAJMI
Localisation: Rabat, Maroc

PROFIL:
Étudiant en ingénierie à l’INPT, spécialisé en Systèmes Distribués (Cloud/IoT). Expérimenté dans les infrastructures cloud avec OpenStack et le développement d’applications IoT. À la recherche d’un stage PFA pour appliquer mes compétences techniques.

FORMATION:
- Institut National des Postes et Télécommunications (INPT), Rabat (2024 - 2027): Ingénierie des Systèmes Ubiquitaires et Distribués (SUD) - Cloud et IoT.
- Classes Préparatoires aux Grandes Écoles (CPGE), Safi (2022 - 2024): Filière Technologie et Sciences de l’Ingénieur (TSI).

PROJETS ACADÉMIQUES:
1. Mise en place d’un cloud privé avec OpenStack (Cloud Computing/DevOps):
   - Installation et configuration d’une infrastructure Cloud privée complète (IaaS) avec OpenStack.
   - Gestion des ressources, réseaux et sécurité dans un environnement cloud distribué.
   - Technologies: OpenStack 2025.1 "Epoxy" (Keystone, Glance, Nova, Neutron, Cinder, Horizon), KVM, Ubuntu Server 24.04, MySQL/MariaDB, RabbitMQ.

2. GreenTech SmartBin - Système Intelligent de Gestion des Déchets (IoT / IA / Full Stack):
   - Développement d’un système IoT pour l’optimisation de la collecte des déchets urbains.
   - Intégration de capteurs et algorithmes d’optimisation des tournées de collecte.
   - Détection automatique du niveau de remplissage et classification des déchets.
   - Technologies: Python, Arduino, OpenCV, YOLO, HTML/CSS.

3. Portfolio Professionnel (Développement Web):
   - Conception et développement d’un site portfolio responsive pour présenter mes projets et compétences.
   - Interface moderne avec animations et effets visuels pour une expérience utilisateur optimale.
   - Technologies: HTML5, CSS3, JavaScript, Particle.js, Tilt.js.

4. Grass Cutter Robot (Tondeuse Robotique Autonome) (Robotique / Automatisme):
   - Conception et modélisation d’une tondeuse robotique autonome pour terrains fortement inclinés.
   - Réalisation de l’étude de dimensionnement du moteur et de la modélisation dynamique du système.
   - Technologies: Mécanique des systèmes, Modélisation dynamique, Asservissement, Capteurs.

COMPÉTENCES TECHNIQUES:
- Langages de programmation: Java, Python, C, C++, JavaScript, TypeScript.
- Frontend: HTML5, CSS3, Bootstrap, React, Angular.
- Backend & Frameworks: Node.js, Express.js, Python, Django, Spring Boot.
- Bases de données: MySQL, MongoDB, SQLite, PostgreSQL.
- Outils & DevOps: Git, GitHub, Docker, Linux, OpenStack, KVM, VS Code, Postman.

LANGUES:
- Français (Fluent)
- Anglais (Professionnel)
- Arabe (Native)
`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cloud Privé OpenStack",
    category: "Cloud Computing / DevOps",
    description: "Installation et configuration d’une infrastructure Cloud privée complète (IaaS). Gestion des ressources, réseaux et sécurité dans un environnement distribué.",
    technologies: ["OpenStack Epoxy", "KVM", "Ubuntu 24.04", "RabbitMQ", "MySQL"],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  },
  {
    id: 2,
    title: "GreenTech SmartBin",
    category: "IoT / IA / Full Stack",
    description: "Système IoT pour l’optimisation de la collecte des déchets urbains avec détection automatique de remplissage et classification par IA.",
    technologies: ["Python", "Arduino", "OpenCV", "YOLO", "IoT"],
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  },
  {
    id: 3,
    title: "Grass Cutter Robot",
    category: "Robotique / Automatisme",
    description: "Tondeuse robotique autonome conçue pour des terrains fortement inclinés avec modélisation dynamique et asservissement.",
    technologies: ["C++", "Modélisation", "Capteurs", "Automatisme"],
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  },
  {
    id: 4,
    title: "Portfolio Professionnel",
    category: "Développement Web",
    description: "Site vitrine responsive avec animations et effets visuels avancés (Particle.js, Tilt.js) pour l'expérience utilisateur.",
    technologies: ["React", "TypeScript", "Tailwind", "CSS3"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  }
];

export const EDUCATION: Experience[] = [
  {
    id: 1,
    role: "Ingénierie des Systèmes Ubiquitaires et Distribués",
    company: "INPT, Rabat",
    period: "2024 - 2027",
    type: "education",
    description: ["Spécialisation Cloud et IoT", "Architecture Distribuée", "DevOps"]
  },
  {
    id: 2,
    role: "Classes Préparatoires (TSI)",
    company: "CPGE, Safi",
    period: "2022 - 2024",
    type: "education",
    description: ["Technologie et Sciences de l’Ingénieur", "Mathématiques", "Physique"]
  }
];

export const SKILLS: Skill[] = [
  { name: "OpenStack", level: 90, category: "devops" },
  { name: "Docker/KVM", level: 85, category: "devops" },
  { name: "Linux", level: 85, category: "devops" },
  { name: "Python (IoT/AI)", level: 90, category: "languages" },
  { name: "C/C++", level: 80, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "React/Angular", level: 75, category: "frontend" },
  { name: "Node.js/Spring", level: 75, category: "backend" },
  { name: "MySQL/PostgreSQL", level: 80, category: "backend" },
  { name: "Git/GitHub", level: 85, category: "tools" },
];
