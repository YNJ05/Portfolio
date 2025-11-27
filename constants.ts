import { Project, Experience, Skill } from './types';

export const PROFILE_IMAGE = "https://github.com/YNJ05.png"; // Replace with your image URL

export const RESUME_CONTENT = `
Yassin NAJMI
Engineering Student at INPT, specialized in Distributed Systems (Cloud/IoT)
Email: yassinnajmi5@gmail.com
Phone: +212 766-916-867
Website: yassinnajmi.me
GitHub: YNJ05
LinkedIn: Yassin NAJMI
Location: Rabat, Morocco

PROFILE:
Engineering student at INPT, specialized in Distributed Systems (Cloud/IoT). Experienced in cloud infrastructures with OpenStack and development of IoT applications. Currently seeking an internship to apply technical skills in an innovative environment.

EDUCATION:
- National Institute of Posts and Telecommunications (INPT), Rabat (2024 - 2027): Engineering of Ubiquitous and Distributed Systems (SUD) - Cloud and IoT.
- Preparatory Classes for Grande Écoles (CPGE), Safi (2022 - 2024): Technology and Engineering Sciences (TSI).

ACADEMIC PROJECTS:
1. Private Cloud Deployment with OpenStack (Cloud Computing/DevOps):
   - Installation and configuration of a complete private Cloud infrastructure (IaaS) with OpenStack.
   - Management of resources, networks and security in a distributed cloud environment.
   - Technologies: OpenStack 2025.1 "Epoxy" (Keystone, Glance, Nova, Neutron, Cinder, Horizon), KVM, Ubuntu Server 24.04, MySQL/MariaDB, RabbitMQ.

2. GreenTech SmartBin - Intelligent Waste Management System (IoT / AI / Full Stack):
   - Development of an IoT system for optimizing urban waste collection.
   - Integration of sensors and optimization algorithms for collection routes.
   - Automatic fill level detection and waste classification.
   - Technologies: Python, Arduino, OpenCV, YOLO, HTML/CSS.

3. Professional Portfolio (Web Development):
   - Design and development of a responsive portfolio website to showcase projects and skills.
   - Modern interface with animations and visual effects for optimal user experience.
   - Technologies: HTML5, CSS3, JavaScript, Particle.js, Tilt.js.

4. Grass Cutter Robot (Autonomous Robotic Mower) (Robotics / Automation):
   - Design and modeling of an autonomous robotic mower for steep terrain.
   - Implementation of motor sizing study and system dynamic modeling.
   - Technologies: Systems mechanics, Dynamic modeling, Control systems, Sensors.

TECHNICAL SKILLS:
- Programming Languages: Java, Python, C, C++, JavaScript, TypeScript.
- Frontend: HTML5, CSS3, Bootstrap, React, Angular.
- Backend & Frameworks: Node.js, Express.js, Python, Django, Spring Boot.
- Databases: MySQL, MongoDB, SQLite, PostgreSQL.
- Tools & DevOps: Git, GitHub, Docker, Linux, OpenStack, KVM, VS Code, Postman.

LANGUAGES:
- French (Fluent)
- English (Professional)
- Arabic (Native)
`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Private OpenStack Cloud",
    category: "Cloud Computing / DevOps",
    description: "Installation and configuration of a complete private Cloud infrastructure (IaaS). Management of resources, networks and security in a distributed environment.",
    technologies: ["OpenStack Epoxy", "KVM", "Ubuntu 24.04", "RabbitMQ", "MySQL"],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  },
  {
    id: 2,
    title: "GreenTech SmartBin",
    category: "IoT / AI / Full Stack",
    description: "IoT system for optimizing urban waste collection with automatic fill level detection and AI-based classification.",
    technologies: ["Python", "Arduino", "OpenCV", "YOLO", "IoT"],
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  },
  {
    id: 3,
    title: "Grass Cutter Robot",
    category: "Robotics / Automation",
    description: "Autonomous robotic mower designed for steep terrain with dynamic modeling and control systems.",
    technologies: ["C++", "Modeling", "Sensors", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  },
  {
    id: 4,
    title: "Professional Portfolio",
    category: "Web Development",
    description: "Responsive showcase website with advanced animations and visual effects (Particle.js, Tilt.js) for optimal user experience.",
    technologies: ["React", "TypeScript", "Tailwind", "CSS3"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/YNJ05"
  }
];

export const EDUCATION: Experience[] = [
  {
    id: 1,
    role: "Engineering of Ubiquitous and Distributed Systems",
    company: "INPT, Rabat",
    period: "2024 - 2027",
    type: "education",
    description: ["Cloud & IoT Specialization", "Distributed Architecture", "DevOps"]
  },
  {
    id: 2,
    role: "Preparatory Classes (TSI)",
    company: "CPGE, Safi",
    period: "2022 - 2024",
    type: "education",
    description: ["Technology and Engineering Sciences", "Mathematics", "Physics"]
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
