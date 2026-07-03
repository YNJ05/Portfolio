import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Cloud, 
  Cpu, 
  Layers, 
  Award, 
  TrendingUp, 
  Heart, 
  Trash2, 
  GitBranch, 
  MessageSquare, 
  CheckSquare,
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  FileText, 
  Code, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Globe, 
  Download, 
  Check, 
  Send, 
  Calendar,
  ChevronRight,
  Sparkles,
  Search,
  BookOpen,
  Database,
  Terminal,
  Server,
  Workflow,
  Activity,
  Shield,
  Key,
  Network,
  Wrench,
  Eye,
  ArrowUp
} from "lucide-react";
import { 
  info, 
  educations, 
  experiences, 
  projects, 
  certifications, 
  skills,
  Project,
  Education,
  Experience,
  Certification
} from "./data";

import TechBackground from "./components/TechBackground";

const deviconMap: Record<string, string> = {
  "python": "python/python-original.svg",
  "typescript": "typescript/typescript-original.svg",
  "ts": "typescript/typescript-original.svg",
  "javascript": "javascript/javascript-original.svg",
  "js": "javascript/javascript-original.svg",
  "c": "c/c-original.svg",
  "c++": "cplusplus/cplusplus-original.svg",
  "java": "java/java-original.svg",
  "bash": "bash/bash-original.svg",
  "html/css": "html5/html5-original.svg",
  "aws": "amazonwebservices/amazonwebservices-plain.svg",
  "azure": "azure/azure-original.svg",
  "openstack (epoxy)": "openstack/openstack-original.svg",
  "openstack": "openstack/openstack-original.svg",
  "kolla-ansible": "ansible/ansible-original.svg",
  "ansible": "ansible/ansible-original.svg",
  "kubernetes": "kubernetes/kubernetes-plain.svg",
  "docker": "docker/docker-original.svg",
  "docker compose": "docker/docker-original.svg",
  "gitlab ci": "gitlab/gitlab-original.svg",
  "github actions": "githubactions/githubactions-original.svg",
  "jenkins": "jenkins/jenkins-original.svg",
  "vmware esxi": "vmware/vmware-original.svg",
  "virtualbox": "virtualbox/virtualbox-original.svg",
  "terraform": "terraform/terraform-original.svg",
  "node.js": "nodejs/nodejs-original.svg",
  "express": "express/express-original.svg",
  "nestjs": "nestjs/nestjs-original.svg",
  "fastapi": "fastapi/fastapi-original.svg",
  "next.js": "nextjs/nextjs-original.svg",
  "prisma orm": "prisma/prisma-original.svg",
  "nginx": "nginx/nginx-original.svg",
  "postgresql": "postgresql/postgresql-original.svg",
  "mongodb": "mongodb/mongodb-original.svg",
  "mysql": "mysql/mysql-original.svg",
  "azure cosmos db": "azure/azure-original.svg",
  "raspberry pi": "raspberrypi/raspberrypi-original.svg",
  "arduino": "arduino/arduino-original.svg",
  "opencv": "opencv/opencv-original.svg",
  "prometheus": "prometheus/prometheus-original.svg",
  "grafana": "grafana/grafana-original.svg",
  "sonarqube": "sonarqube/sonarqube-original.svg",
  "postman": "postman/postman-original.svg",
  "git / github": "git/git-original.svg",
  "git": "git/git-original.svg",
  "github": "github/github-original.svg",
  "aws cloudwatch": "amazonwebservices/amazonwebservices-plain.svg"
};

const getSkillIcon = (name: string) => {
  const n = name.toLowerCase().trim();
  
  if (deviconMap[n]) {
    const path = deviconMap[n];
    const isInverted = ["express", "next.js", "github", "github actions"].some(tech => n.includes(tech));
    return (
      <img 
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`} 
        alt={name} 
        className={`w-4 h-4 object-contain ${isInverted ? "dark:invert" : ""}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Programming Languages
  if (n === 'python') return <Code className="w-3.5 h-3.5 text-amber-500" />;
  if (n === 'typescript' || n === 'ts') return <Code className="w-3.5 h-3.5 text-sky-500" />;
  if (n === 'javascript' || n === 'js') return <Code className="w-3.5 h-3.5 text-yellow-500" />;
  if (n === 'c' || n === 'c++') return <Cpu className="w-3.5 h-3.5 text-blue-500" />;
  if (n === 'java') return <Code className="w-3.5 h-3.5 text-red-500" />;
  if (n === 'sql') return <Database className="w-3.5 h-3.5 text-emerald-500" />;
  if (n === 'bash') return <Terminal className="w-3.5 h-3.5 text-teal-500" />;
  if (n.includes('html') || n.includes('css')) return <Code className="w-3.5 h-3.5 text-orange-500" />;

  // Cloud & DevOps
  if (n === 'aws') return <Cloud className="w-3.5 h-3.5 text-orange-400" />;
  if (n === 'azure') return <Cloud className="w-3.5 h-3.5 text-sky-400" />;
  if (n.includes('openstack')) return <Layers className="w-3.5 h-3.5 text-red-400" />;
  if (n.includes('ansible')) return <Wrench className="w-3.5 h-3.5 text-neutral-400" />;
  if (n === 'kubernetes' || n === 'k8s') return <Layers className="w-3.5 h-3.5 text-blue-400" />;
  if (n === 'docker' || n === 'docker compose') return <Layers className="w-3.5 h-3.5 text-sky-400" />;
  if (n === 'ci/cd' || n.includes('ci') || n.includes('actions') || n.includes('jenkins')) return <Workflow className="w-3.5 h-3.5 text-emerald-400" />;

  // Virtualization & IaC
  if (n.includes('esxi') || n.includes('vmware')) return <Server className="w-3.5 h-3.5 text-emerald-400" />;
  if (n.includes('hyper-v') || n.includes('virtualbox') || n.includes('kvm')) return <Server className="w-3.5 h-3.5 text-blue-400" />;
  if (n === 'terraform') return <Wrench className="w-3.5 h-3.5 text-indigo-400" />;

  // Web & Backend
  if (n === 'node.js' || n === 'express') return <Server className="w-3.5 h-3.5 text-green-500" />;
  if (n === 'nestjs') return <Server className="w-3.5 h-3.5 text-rose-500" />;
  if (n === 'fastapi') return <Server className="w-3.5 h-3.5 text-teal-400" />;
  if (n === 'next.js') return <Globe className="w-3.5 h-3.5 text-neutral-200" />;
  if (n.includes('prisma')) return <Database className="w-3.5 h-3.5 text-cyan-400" />;
  if (n.includes('api') || n.includes('rest')) return <Network className="w-3.5 h-3.5 text-purple-400" />;
  if (n === 'jwt' || n === 'websockets') return <Key className="w-3.5 h-3.5 text-yellow-400" />;
  if (n === 'nginx') return <Server className="w-3.5 h-3.5 text-green-600" />;

  // Databases
  if (n === 'postgresql') return <Database className="w-3.5 h-3.5 text-sky-400" />;
  if (n === 'mongodb') return <Database className="w-3.5 h-3.5 text-green-500" />;
  if (n === 'mysql') return <Database className="w-3.5 h-3.5 text-blue-500" />;
  if (n.includes('cosmos')) return <Database className="w-3.5 h-3.5 text-teal-400" />;

  // IoT & Robotics
  if (n === 'esp32' || n.includes('pi') || n === 'arduino') return <Cpu className="w-3.5 h-3.5 text-red-400" />;
  if (n === 'mqtt' || n === 'coap' || n === 'lorawan') return <Network className="w-3.5 h-3.5 text-indigo-400" />;
  if (n.includes('opencv') || n.includes('yolo')) return <Eye className="w-3.5 h-3.5 text-sky-400" />;

  // Observability & Quality
  if (n === 'prometheus' || n === 'grafana' || n.includes('cloudwatch')) return <Activity className="w-3.5 h-3.5 text-orange-500" />;
  if (n.includes('sonarqube')) return <Shield className="w-3.5 h-3.5 text-indigo-500" />;
  if (n === 'postman') return <Wrench className="w-3.5 h-3.5 text-orange-600" />;
  if (n.includes('git')) return <GitBranch className="w-3.5 h-3.5 text-red-400" />;

  return <Sparkles className="w-3.5 h-3.5 text-sky-400/70" />;
};

export default function App() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const theme = "dark";
  const [activeSection, setActiveSection] = useState<string>("home");
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [projectSearch, setProjectSearch] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [sendSuccess, setFormSuccess] = useState<boolean | null>(null);

  // Sync theme with body class (force dark/remove light-mode always)
  useEffect(() => {
    const root = window.document.body;
    root.classList.remove("light-mode");
    // Initialize EmailJS with public key
    emailjs.init("6-qLSkjpsZkAg26A1");
  }, []);

  // Set browser language on mount
  useEffect(() => {
    const userBrowserLang = (navigator.language || "fr").toLowerCase();
    if (userBrowserLang.startsWith("en")) {
      setLang("en");
    } else {
      setLang("fr");
    }
  }, []);

  // Set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const sectionElements = document.querySelectorAll("section[id]");
      
      sectionElements.forEach((el) => {
        const top = (el as HTMLElement).offsetTop;
        const height = (el as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(el.id);
        }
      });

      // Show back to top button when scrolled past hero section
      const heroSection = document.getElementById("home");
      if (heroSection) {
        setShowBackToTop(window.scrollY > heroSection.offsetHeight - 100);
      } else {
        setShowBackToTop(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    // 1. Category filter
    if (projectFilter !== "all" && p.category !== projectFilter) {
      return false;
    }
    
    // 2. Search query filter
    const query = projectSearch.toLowerCase().trim();
    if (!query) return true;

    const matchesTitle = p.title.fr.toLowerCase().includes(query) || p.title.en.toLowerCase().includes(query);
    const matchesDesc = p.description.fr.toLowerCase().includes(query) || p.description.en.toLowerCase().includes(query);
    const matchesDetails = p.details.fr.toLowerCase().includes(query) || p.details.en.toLowerCase().includes(query);
    const matchesTags = p.tags.some((tag) => tag.toLowerCase().includes(query));

    const catFr = p.category === "cloud" ? "cloud & devops" :
                  p.category === "iot" ? "iot & robotique" :
                  p.category === "ai" ? "ia & data intelligence artificielle" :
                  "virtualisation";
    const catEn = p.category === "cloud" ? "cloud & devops" :
                  p.category === "iot" ? "iot & embedded" :
                  p.category === "ai" ? "ai & ml data science machine learning" :
                  "virtualization";
    const matchesCategory = p.category.toLowerCase().includes(query) || catFr.includes(query) || catEn.includes(query);

    return matchesTitle || matchesDesc || matchesDetails || matchesTags || matchesCategory;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud": return <Cloud className="w-5 h-5 text-sky-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-sky-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-sky-400" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5 text-sky-400" />;
      case "Heart": return <Heart className="w-5 h-5 text-sky-400" />;
      case "Trash2": return <Trash2 className="w-5 h-5 text-sky-400" />;
      case "GitBranch": return <GitBranch className="w-5 h-5 text-sky-400" />;
      case "MessageSquare": return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case "CheckSquare": return <CheckSquare className="w-5 h-5 text-sky-400" />;
      default: return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  const getCertIcon = (logoName: string) => {
    switch (logoName) {
      case "AWS":
        return (
          <svg viewBox="0 0 304 182" className="w-8 h-8 object-contain" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z" />
            <path fill="#FF9900" d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z" />
            <path fill="#FF9900" d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z" />
          </svg>
        );
      case "Oracle":
        return (
          <svg viewBox="0 0 231 30" className="w-9 h-auto max-h-4 object-contain" xmlns="http://www.w3.org/2000/svg">
            <path fill="#C74634" d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" />
          </svg>
        );
      default:
        return <Award className="w-6 h-6 text-yellow-500" />;
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 85,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const templateParams = {
      user_name: formState.name,
      user_email: formState.email,
      from_name: formState.name,
      name: formState.name,
      from_email: formState.email,
      email: formState.email,
      message: formState.message
    };

    emailjs.send(
      "service_uz0a3w4", 
      "template_k7pzjec", 
      templateParams,
      "6-qLSkjpsZkAg26A1"
    )
    .then(() => {
      setIsSending(false);
      setFormSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setFormSuccess(null), 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setIsSending(false);
      setFormSuccess(false);
      setTimeout(() => setFormSuccess(null), 4000);
    });
  };

  return (
    <div className="relative min-h-screen selection:bg-sky-400 selection:text-black">
      {/* Background System */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>
      <TechBackground />
      <div className="tech-grid"></div>

      {/* Floating Apple Header */}
      <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-5xl h-16 px-6 flex items-center justify-between rounded-full border transition-all duration-300 ${
        theme === "dark" ? "glass-nav-dark shadow-black/45" : "glass-nav-light shadow-sky-900/5"
      }`}>
        {/* Brand */}
        <div className="flex items-center gap-3 font-extrabold text-sm tracking-tight cursor-pointer" onClick={() => scrollTo("home")}>
          <div 
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(true); }}
          >
            <img src="assets/image.png" alt={info.name} className="w-full h-full object-cover" onError={(e) => {
              // fallback if local asset missing
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200";
            }} />
          </div>
          <span className={theme === "dark" ? "text-white" : "text-neutral-900"}>{info.name}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5 relative">
          {(["home", "profile", "projects", "skills", "contact"] as const).map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                activeSection === section 
                  ? theme === "dark" ? "text-white" : "text-neutral-900" 
                  : theme === "dark" ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {activeSection === section && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 border rounded-full shadow-sm z-0 ${
                    theme === "dark" 
                      ? "bg-white/10 border-white/15" 
                      : "bg-white border-black/10"
                  }`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">
                {section === "home" ? (lang === "fr" ? "Accueil" : "Home") : 
                 section === "profile" ? (lang === "fr" ? "Profil" : "Profile") : 
                 section === "projects" ? (lang === "fr" ? "Projets" : "Projects") : 
                 section === "skills" ? (lang === "fr" ? "Compétences" : "Skills") : "Contact"}
              </span>
            </button>
          ))}
        </nav>

        {/* Action Elements */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex border rounded-full overflow-hidden bg-black/10 dark:bg-white/5 border-black/10 dark:border-white/10 p-0.5">
            <button 
              onClick={() => setLang("fr")}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-full transition-all duration-300 ${
                lang === "fr" 
                  ? theme === "dark" ? "bg-white text-black" : "bg-neutral-900 text-white" 
                  : theme === "dark" ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              FR
            </button>
            <button 
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-full transition-all duration-300 ${
                lang === "en" 
                  ? theme === "dark" ? "bg-white text-black" : "bg-neutral-900 text-white" 
                  : theme === "dark" ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Contact CTA Desktop */}
          <button 
            onClick={() => scrollTo("contact")}
            className={`hidden md:block px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 shadow-md ${
              theme === "dark"
                ? "bg-white text-black hover:bg-neutral-100 shadow-black/20"
                : "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sky-900/10"
            }`}
          >
            {lang === "fr" ? "Contactez-moi" : "Get in Touch"}
          </button>

          {/* Hamburger Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 rounded-md"
            aria-label="Open Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-24 left-4 right-4 z-40 p-6 rounded-3xl border md:hidden ${
              theme === "dark" ? "glass-panel-dark" : "glass-panel-light"
            }`}
          >
            <div className="flex flex-col gap-4">
              {(["home", "profile", "projects", "skills", "contact"] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`py-2.5 text-sm font-bold text-center rounded-xl transition-all duration-300 ${
                    activeSection === section 
                      ? theme === "dark" ? "bg-white/10 text-white" : "bg-neutral-900/10 text-neutral-900"
                      : "text-neutral-500"
                  }`}
                >
                  {section === "home" ? (lang === "fr" ? "Accueil" : "Home") : 
                   section === "profile" ? (lang === "fr" ? "Profil" : "Profile") : 
                   section === "projects" ? (lang === "fr" ? "Projets" : "Projects") : 
                   section === "skills" ? (lang === "fr" ? "Compétences" : "Skills") : "Contact"}
                </button>
              ))}
              
              <button 
                onClick={() => scrollTo("contact")}
                className={`mt-2 py-3 text-xs font-bold rounded-xl transition-all duration-300 w-full text-center ${
                  theme === "dark" ? "bg-white text-black" : "bg-neutral-900 text-white"
                }`}
              >
                {lang === "fr" ? "Contactez-moi" : "Get in Touch"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="transition-all duration-500 pt-8">
        
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="min-h-[92vh] flex items-center px-4 max-w-5xl mx-auto pt-24 pb-12">
          <div className="grid md:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Copy */}
            <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
              {/* Status Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-xs font-semibold ${
                  theme === "dark" 
                    ? "bg-sky-500/10 border-sky-400/20 text-sky-300" 
                    : "bg-sky-50 border-sky-200 text-sky-700"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                {info.status[lang]}
              </motion.div>

              {/* Title & Name */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                {lang === "fr" ? "Salut, je suis" : "Hey, I'm"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                  {info.name}
                </span>
              </h1>

              {/* Tagline */}
              <h2 className={`text-lg sm:text-xl font-semibold mb-6 max-w-lg leading-relaxed ${
                theme === "dark" ? "text-neutral-300" : "text-neutral-700"
              }`}>
                {info.title[lang]}
              </h2>

              {/* Short Bio */}
              <p className={`text-sm sm:text-base mb-8 max-w-xl leading-relaxed ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-500"
              }`}>
                {info.bio[lang]}
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => scrollTo("projects")}
                  className="px-6 py-3.5 text-xs font-bold rounded-full transition-all duration-300 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white shadow-lg shadow-sky-500/10 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Code className="w-4 h-4" />
                  {lang === "fr" ? "Découvrir mes projets" : "Explore Projects"}
                </button>
                
                {/* CV Button */}
                <a 
                  href={lang === "fr" ? "assets/CV_YASSIN_NAJMI_FR.pdf" : "assets/CV_YASSIN_NAJMI_ENG.pdf"}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-6 py-3.5 text-xs font-bold rounded-full transition-all duration-300 border flex items-center justify-center gap-2 hover:scale-[1.02] ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                      : "bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-800"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  {lang === "fr" ? "Télécharger mon CV" : "Download CV"}
                </a>
              </div>

              {/* Quick links info */}
              <div className={`flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 mt-8 text-xs ${
                theme === "dark" ? "text-neutral-500" : "text-neutral-400"
              }`}>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Rabat, Morocco</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> INPT student</span>
              </div>
            </div>

            {/* Right Widget Panel */}
            <div className="md:col-span-5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className={`w-full max-w-sm rounded-3xl border p-6 relative overflow-hidden glass-shimmer ${
                  theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
                }`}
              >
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-32 height-32 bg-sky-500/10 rounded-full filter blur-xl pointer-events-none"></div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></div>
                  <span className={`text-[10px] font-extrabold tracking-widest uppercase ${
                    theme === "dark" ? "text-neutral-500" : "text-neutral-400"
                  }`}>
                    {lang === "fr" ? "Instantané en temps réel" : "Live Snapshot"}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Block 1 */}
                  <div className="p-4 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <div className="text-[10px] font-extrabold tracking-widest uppercase text-sky-400 mb-1">
                      {lang === "fr" ? "Focus Actuel" : "Current Focus"}
                    </div>
                    <div className="text-sm font-extrabold">Cloud-Native Engineering</div>
                    <div className={`text-xs mt-1 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                      Infrastructure as Code & DevOps Automation
                    </div>
                  </div>

                  {/* Two columns */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="text-[10px] font-extrabold tracking-widest uppercase text-sky-400 mb-1">
                        {lang === "fr" ? "Formation" : "Education"}
                      </div>
                      <div className="text-xs font-extrabold">INPT Rabat</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Distributed Systems</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="text-[10px] font-extrabold tracking-widest uppercase text-sky-400 mb-1">
                        Stack
                      </div>
                      <div className="text-xs font-extrabold">Cloud & DevOps</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">AWS • Azure • OpenStack</div>
                    </div>
                  </div>

                  {/* Stats / Interactive quote */}
                  <div className={`text-center text-xs italic px-2 pt-2 ${
                    theme === "dark" ? "text-neutral-500" : "text-neutral-400"
                  }`}>
                    &ldquo;{lang === "fr" ? "Concevoir des infrastructures fiables, un pipeline à la fois." : "Designing reliable systems, one pipeline at a time."}&rdquo;
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ================= PROFILE & TIMELINE SECTION ================= */}
        <section id="profile" className="py-20 px-4 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              {lang === "fr" ? "Aperçu de mon parcours" : "My Background"}
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 mb-4 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
              {lang === "fr" ? "À Propos de Moi & Formation" : "About Me & Education"}
            </h2>
            <div className="h-1 w-12 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* About text boxes */}
            <div className="md:col-span-5 space-y-6">
              <div className={`p-6 rounded-3xl border ${
                theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
              }`}>
                <h3 className="text-base font-extrabold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  {lang === "fr" ? "Qui je suis" : "Who I am"}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  {lang === "fr" ? "Passionné de technologies depuis toujours, je me suis naturellement dirigé vers l'architecture de systèmes distribués et le Cloud Computing." : "Fascinated by computing networks and code from a young age, I directed my engineering focus toward systems architecture and Cloud-Native methodologies."}
                </p>
                <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  {lang === "fr" ? "Mon objectif est d'intégrer des équipes DevOps ou Cloud innovantes pour apporter de la valeur dans la gestion d'infrastructures à grande échelle." : "My objective is to join forward-thinking DevOps or Cloud teams to generate immense value in designing, automating, and maintaining complex infrastructure footprints."}
                </p>
              </div>

              {/* Language skills bento block */}
              <div className={`p-6 rounded-3xl border ${
                theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
              }`}>
                <h3 className="text-base font-extrabold mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-400" />
                  {lang === "fr" ? "Langues de Communication" : "Languages"}
                </h3>
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">{lang === "fr" ? "Arabe" : "Arabic"}</span>
                    <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-500"}>
                      {lang === "fr" ? "Maternelle" : "Native Speaker"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-full"></div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">{lang === "fr" ? "Français" : "French"}</span>
                    <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-500"}>
                      {lang === "fr" ? "Bilingue" : "Bilingual / Fluent"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-[95%]"></div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">{lang === "fr" ? "Anglais" : "English"}</span>
                    <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-500"}>
                      {lang === "fr" ? "Professionnel" : "Professional Working Proficiency"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-[85%]"></div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">{lang === "fr" ? "Espagnol" : "Spanish"}</span>
                    <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-500"}>
                      {lang === "fr" ? "Débutant" : "Elementary"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-lg font-extrabold flex items-center gap-2 px-1">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                {lang === "fr" ? "Formation Académique" : "Education"}
              </h3>

              <div className="relative pl-6 border-l border-black/10 dark:border-white/10 space-y-8">
                {educations.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing point */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-sky-400 bg-neutral-900 shadow-md shadow-sky-400/20"></div>

                    <div className={`p-6 rounded-3xl border ${
                      theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-sky-400">
                          {edu.date[lang]}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          theme === "dark" ? "bg-white/5 text-neutral-300" : "bg-neutral-100 text-neutral-700"
                        }`}>
                          {edu.location[lang]}
                        </span>
                      </div>
                      
                      <h4 className="text-base font-extrabold mb-1">
                        {edu.degree[lang]}
                      </h4>
                      
                      <div className="text-xs font-bold text-indigo-400 mb-3">
                        {edu.school[lang]}
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        theme === "dark" ? "text-neutral-400" : "text-neutral-500"
                      }`}>
                        {edu.description[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE SECTION ================= */}
        <section id="experience" className="py-20 px-4 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              {lang === "fr" ? "Expérience sur le terrain" : "Professional Work"}
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 mb-4 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
              {lang === "fr" ? "Expérience Professionnelle" : "Work Experience"}
            </h2>
            <div className="h-1 w-12 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative pl-6 border-l border-black/10 dark:border-white/10 space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Glowing Bullet */}
                <span className="absolute -left-[35px] top-6 w-5 h-5 rounded-50% bg-apple-blue flex items-center justify-content-center border-4 border-black/90 dark:border-[#03050a] z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </span>

                <div className={`p-6 rounded-3xl border ${
                  theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-sky-400">
                      {exp.date[lang]}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      theme === "dark" ? "bg-white/5 text-neutral-300" : "bg-neutral-100 text-neutral-700"
                    }`}>
                      {exp.location[lang]}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold mb-1">
                    {exp.role[lang]}
                  </h3>

                  <div className="text-xs font-bold text-indigo-400 mb-4 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.org[lang]}
                  </div>

                  <ul className="space-y-3.5 mb-5">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5 items-start text-xs sm:text-sm">
                        <ChevronRight className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span className={theme === "dark" ? "text-neutral-300" : "text-neutral-700"}>
                          {b[lang]}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5 dark:border-white/5">
                    {exp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              {lang === "fr" ? "Mon portfolio technique" : "Technical Showcase"}
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 mb-4 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
              {lang === "fr" ? "Projets Académiques & Techniques" : "Projects & Engineering Work"}
            </h2>
            <div className="h-1 w-12 bg-sky-400 mx-auto rounded-full mb-6"></div>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
                placeholder={
                  lang === "fr" 
                    ? "Rechercher par titre, tag, catégorie..." 
                    : "Search by title, tag, category..."
                }
                className={`w-full text-sm rounded-full pl-11 pr-10 py-2.5 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 text-white placeholder-neutral-500 border border-white/5 focus:border-sky-400/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-sky-400/30"
                    : "bg-neutral-100 text-neutral-900 placeholder-neutral-400 border border-black/5 focus:border-sky-400/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-400/30"
                }`}
              />
              {projectSearch && (
                <button
                  onClick={() => setProjectSearch("")}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                    theme === "dark" ? "text-neutral-400 hover:text-white" : "text-neutral-400 hover:text-neutral-900"
                  }`}
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {projectSearch.trim() && (
              <p className="text-center mt-2 text-[11px] font-medium tracking-wide text-sky-400/80 uppercase">
                {lang === "fr"
                  ? `${filteredProjects.length} projet(s) trouvé(s)`
                  : `${filteredProjects.length} project(s) found`}
              </p>
            )}
          </div>

          {/* Filters Pill Menu */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "all", label: { fr: "Tous", en: "All" } },
              { id: "cloud", label: { fr: "Cloud & DevOps", en: "Cloud & DevOps" } },
              { id: "iot", label: { fr: "IoT & Robotique", en: "IoT & Embedded" } },
              { id: "ai", label: { fr: "IA & Data", en: "AI & ML" } },
              { id: "virtualization", label: { fr: "Virtualisation", en: "Virtualization" } }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setProjectFilter(f.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                  projectFilter === f.id
                    ? theme === "dark" ? "bg-white text-black font-extrabold" : "bg-neutral-900 text-white font-extrabold"
                    : theme === "dark" ? "bg-white/5 text-neutral-400 hover:text-white border border-white/5" : "bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-black/5"
                }`}
              >
                {f.label[lang]}
              </button>
            ))}
          </div>

          {/* Projects Grid Layout */}
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <motion.article 
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(p)}
                    className={`flex flex-col p-6 rounded-3xl border cursor-pointer relative overflow-hidden group glass-shimmer h-[320px] ${
                      theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
                    }`}
                  >
                    {/* Decorative Gradient Line hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex justify-between items-start gap-4 mb-4">
                      <h3 className="text-base font-extrabold tracking-tight group-hover:text-sky-400 transition-colors duration-300 line-clamp-2">
                        {p.title[lang]}
                      </h3>
                      <div className="p-2 rounded-xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex-shrink-0">
                        {getProjectIcon(p.icon)}
                      </div>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-4 ${
                      theme === "dark" ? "text-neutral-400" : "text-text-secondary"
                    }`}>
                      {p.description[lang]}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/5 text-neutral-400">
                            {tag}
                          </span>
                        ))}
                        {p.tags.length > 3 && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/5 text-sky-400">
                            +{p.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:translate-x-1 transition-transform duration-300">
                        {lang === "fr" ? "En savoir plus" : "Learn More"}
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col items-center justify-center text-center p-12 rounded-3xl border ${
                theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
              }`}
            >
              <div className="p-4 rounded-full bg-sky-500/10 text-sky-400 mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                {lang === "fr" ? "Aucun projet trouvé" : "No projects found"}
              </h3>
              <p className={`text-sm max-w-md mb-6 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                {lang === "fr" 
                  ? `Aucun projet ne correspond à la recherche "${projectSearch}" dans cette catégorie.` 
                  : `No projects match your search query "${projectSearch}" within this category.`}
              </p>
              <button
                onClick={() => {
                  setProjectSearch("");
                  setProjectFilter("all");
                }}
                className="px-5 py-2.5 text-xs font-bold rounded-full bg-sky-400 text-black hover:bg-sky-300 transition-colors"
              >
                {lang === "fr" ? "Réinitialiser les filtres" : "Reset Filters"}
              </button>
            </motion.div>
          )}
        </section>

        {/* ================= BENTO SKILLS SECTION ================= */}
        <section id="skills" className="py-20 px-4 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              {lang === "fr" ? "Ma boîte à outils" : "My Toolbox"}
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 mb-4 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
              {lang === "fr" ? "Compétences Techniques" : "Technical Skills"}
            </h2>
            <div className="h-1 w-12 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Box 1: Languages */}
            <div className={`p-6 rounded-3xl border md:col-span-4 ${
              theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
            }`}>
              <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2 text-sky-400 uppercase tracking-widest text-xs">
                <Code className="w-4 h-4" /> {skills.languages.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.items.map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 2: Cloud & DevOps */}
            <div className={`p-6 rounded-3xl border md:col-span-8 ${
              theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
            }`}>
              <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2 text-sky-400 uppercase tracking-widest text-xs">
                <Cloud className="w-4 h-4" /> {skills.cloudDevops.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloudDevops.items.map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-sky-400/5 text-sky-300 border border-sky-400/10 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 3: Web & Backend */}
            <div className={`p-6 rounded-3xl border md:col-span-6 ${
              theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
            }`}>
              <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2 text-sky-400 uppercase tracking-widest text-xs">
                <BookOpen className="w-4 h-4" /> {skills.webBackend.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.webBackend.items.map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 4: Virtualization & IaC */}
            <div className={`p-6 rounded-3xl border md:col-span-6 ${
              theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
            }`}>
              <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2 text-sky-400 uppercase tracking-widest text-xs">
                <Layers className="w-4 h-4" /> {skills.virtualizationIaC.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.virtualizationIaC.items.map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 5: Databases */}
            <div className={`p-6 rounded-3xl border md:col-span-4 ${
              theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
            }`}>
              <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2 text-sky-400 uppercase tracking-widest text-xs">
                <Layers className="w-4 h-4" /> {skills.databases.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.items.map((item, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 6: IoT & Robotics */}
            <div className={`p-6 rounded-3xl border md:col-span-4 ${
              theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
            }`}>
              <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2 text-sky-400 uppercase tracking-widest text-xs">
                <Cpu className="w-4 h-4" /> {skills.iotRobotics.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.iotRobotics.items.map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 7: Observability & Quality */}
            <div className={`p-6 rounded-3xl border md:col-span-4 ${
              theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
            }`}>
              <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2 text-sky-400 uppercase tracking-widest text-xs">
                <TrendingUp className="w-4 h-4" /> {skills.observability.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.observability.items.map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
                    {getSkillIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= CERTIFICATIONS SECTION ================= */}
        <section id="certifications" className="py-20 px-4 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              {lang === "fr" ? "Preuve d'expertise" : "Credentials"}
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 mb-4 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
              {lang === "fr" ? "Licences & Certifications" : "Licenses & Certifications"}
            </h2>
            <div className="h-1 w-12 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`p-6 rounded-3xl border flex flex-col h-full ${
                theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
              }`}>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center flex-shrink-0">
                    {getCertIcon(cert.logo)}
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider">{cert.issuer}</div>
                    <div className={`text-[10px] mt-0.5 ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>
                      {cert.date[lang]}
                    </div>
                  </div>
                </div>

                <h3 className="text-sm font-extrabold leading-snug mb-3 flex-grow">
                  {cert.name}
                </h3>

                <p className={`text-xs leading-relaxed mb-6 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  <strong className="text-neutral-200 dark:text-neutral-300">Skills:</strong> {cert.skills}
                </p>

                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-full py-2.5 text-center text-[11px] font-bold rounded-xl border flex items-center justify-center gap-1.5 transition-all duration-300 ${
                    theme === "dark" 
                      ? "border-white/10 hover:border-sky-400/40 text-neutral-300 hover:text-sky-300 hover:bg-sky-400/5" 
                      : "border-neutral-200 hover:border-neutral-400 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  <span>{lang === "fr" ? "Voir les détails" : "Show credential"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="py-20 px-4 max-w-5xl mx-auto border-t border-black/5 dark:border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Contact
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 mb-4 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
              {lang === "fr" ? "Travaillons ensemble" : "Let's work together"}
            </h2>
            <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
              {lang === "fr" ? "N'hésitez pas à me contacter pour toute opportunité de stage ou collaboration technique !" : "Feel free to reach out for internship proposals or engineering discussions !"}
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
            {/* Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleFormSubmit} className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
                theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
              }`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-extrabold tracking-widest uppercase text-neutral-400">
                      {lang === "fr" ? "Nom complet" : "Your Name"}
                    </label>
                    <input 
                      type="text" 
                      name="from_name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-all duration-300 ${
                        theme === "dark" 
                          ? "bg-white/5 border-white/10 text-white focus:border-sky-400 focus:bg-white/10" 
                          : "bg-black/5 border-black/10 text-neutral-900 focus:border-sky-500 focus:bg-white"
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-extrabold tracking-widest uppercase text-neutral-400">
                      Email
                    </label>
                    <input 
                      type="email" 
                      name="from_email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-all duration-300 ${
                        theme === "dark" 
                          ? "bg-white/5 border-white/10 text-white focus:border-sky-400 focus:bg-white/10" 
                          : "bg-black/5 border-black/10 text-neutral-900 focus:border-sky-500 focus:bg-white"
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold tracking-widest uppercase text-neutral-400">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder={lang === "fr" ? "Parlez-moi de votre besoin, de votre projet ou d'un poste..." : "Tell me about your project, team, or opportunity..."}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-all duration-300 resize-none ${
                      theme === "dark" 
                        ? "bg-white/5 border-white/10 text-white focus:border-sky-400 focus:bg-white/10" 
                        : "bg-black/5 border-black/10 text-neutral-900 focus:border-sky-500 focus:bg-white"
                    }`}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {isSending ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{lang === "fr" ? "Envoi..." : "Sending..."}</span>
                    </>
                  ) : sendSuccess === true ? (
                    <>
                      <Check className="w-4 h-4 text-green-300" />
                      <span>{lang === "fr" ? "Message envoyé !" : "Message sent!"}</span>
                    </>
                  ) : sendSuccess === false ? (
                    <>
                      <X className="w-4 h-4 text-red-400" />
                      <span>{lang === "fr" ? "Erreur — Réessayez" : "Error — Try Again"}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{lang === "fr" ? "Envoyer le message" : "Send Message"}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct contact items */}
            <div className="md:col-span-5 space-y-4">
              <div className={`p-6 rounded-3xl border ${
                theme === "dark" ? "glass-panel-dark border-white/5" : "glass-panel-light border-black/5"
              }`}>
                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-sky-400 uppercase">Email</span>
                    <a href={`mailto:${info.contact.email}`} className="flex items-center gap-2.5 text-sm font-semibold mt-1 hover:text-sky-400 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-indigo-400" />
                      {info.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-sky-400 uppercase">{lang === "fr" ? "Téléphone" : "Phone"}</span>
                    <a href={`tel:${info.contact.phone}`} className="flex items-center gap-2.5 text-sm font-semibold mt-1 hover:text-sky-400 transition-colors duration-300">
                      <Phone className="w-4 h-4 text-indigo-400" />
                      {info.contact.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-sky-400 uppercase">{lang === "fr" ? "Localisation" : "Location"}</span>
                    <div className="flex items-center gap-2.5 text-sm font-semibold mt-1">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      {info.contact.location}
                    </div>
                  </div>

                  {/* Social media footer connectors */}
                  <div className="pt-5 border-t border-black/5 dark:border-white/5 flex gap-3">
                    <a 
                      href={info.contact.linkedin} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-sky-400/40 hover:bg-sky-400/5 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={info.contact.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-sky-400/40 hover:bg-sky-400/5 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 px-4 border-t border-black/5 dark:border-white/5 text-xs text-neutral-500 space-y-2">
        <p className="font-extrabold">© 2026 {info.name}. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}</p>
        <p className="text-[10px] tracking-wider uppercase">{lang === "fr" ? "Cloud | DevOps | IoT | Systèmes Distribués" : "Cloud | DevOps | IoT | Distributed Systems"}</p>
        <p className="text-[10px] italic opacity-60">"Building reliable systems, one pipeline at a time."</p>
      </footer>

      {/* ================= PROJECT MODAL DETAILED VIEW ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className={`w-full max-w-2xl rounded-3xl border overflow-hidden p-6 sm:p-8 relative ${
                theme === "dark" ? "glass-panel-dark border-white/10" : "glass-panel-light border-black/10"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full border flex items-center justify-center hover:scale-105 transition-all duration-300 ${
                  theme === "dark" 
                    ? "bg-white/5 border-white/10 hover:bg-white/10 text-white" 
                    : "bg-neutral-100 border-black/10 hover:bg-neutral-200 text-neutral-800"
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-5 pr-8">
                <div className="p-2.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  {getProjectIcon(selectedProject.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {selectedProject.title[lang]}
                  </h3>
                  <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                    {selectedProject.category === "cloud" ? "Cloud & DevOps" : 
                     selectedProject.category === "iot" ? "IoT & Embedded" : 
                     selectedProject.category === "ai" ? "AI & Data Science" : "Virtualization"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed max-h-[40vh] overflow-y-auto pr-2 mb-6">
                <p className={theme === "dark" ? "text-neutral-300" : "text-neutral-700"}>
                  {selectedProject.details[lang]}
                </p>
              </div>

              {/* Tag pills list */}
              <div className="flex flex-wrap gap-1.5 mb-6 border-t border-black/5 dark:border-white/5 pt-4">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action/Links */}
              <div className="flex flex-wrap gap-3 border-t border-black/5 dark:border-white/5 pt-5">
                {selectedProject.links?.code && (
                  <a 
                    href={selectedProject.links.code} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`px-5 py-2.5 text-xs font-bold rounded-xl border flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer ${
                      theme === "dark" 
                        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-sky-400/40 text-neutral-200" 
                        : "bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400 text-neutral-800"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {selectedProject.links?.report && (
                  <a 
                    href={selectedProject.links.report === "#" ? "#" : selectedProject.links.report} 
                    target={selectedProject.links.report === "#" ? undefined : "_blank"}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (selectedProject.links?.report === "#") {
                        e.preventDefault();
                        alert(lang === "fr" ? "Rapport PDF disponible dans l'archive !" : "PDF report is available within the local archive !");
                      }
                    }}
                    className={`px-5 py-2.5 text-xs font-bold rounded-xl border flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-sky-400/40 text-neutral-200"
                        : "bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400 text-neutral-800"
                    }`}
                  >
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span>{lang === "fr" ? "Rapport PDF" : "PDF Report"}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= AVATAR LIGHTBOX COMPONENT ================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-sm w-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close x */}
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-sky-400 transition-colors duration-300 text-3xl font-light"
              >
                &times;
              </button>

              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-sky-400 shadow-2xl relative">
                <img src="assets/image.png" alt={info.name} className="w-full h-full object-cover" onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200";
                }} />
              </div>

              {/* Social profiles overlay inside lightbox */}
              <div className="flex gap-4">
                <a 
                  href={info.contact.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-sky-400/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={info.contact.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-sky-400/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${info.contact.email}`}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-sky-400/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center glass-panel-dark text-sky-400 hover:text-sky-300 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 cursor-pointer"
            aria-label={lang === "fr" ? "Retour en haut" : "Back to top"}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
