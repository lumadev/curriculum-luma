import { Project } from "../projectTypes";

export const gmacProject: Project = {
  title: "GMAC Identity Provider",
  description:
    "Centralized authentication portal for the GSurf ecosystem, acting as an Identity Provider for multiple partner applications.",
  fullDescription:
    "Web application developed as the GSurf Multi-Application Authentication Center (GMAC), responsible for centralized identity and access management across the GSurf ecosystem. " +
    "The system authenticates users, manages multi-factor authentication (MFA/TOTP), password recovery, user registration, and redirects authenticated users to partner applications using OAuth-like flows. " +
    "It supports multiple partner contexts such as Brazil and Argentina, provides unified security policies, internationalization, and integration with authentication microservices. " +
    "The application ensures a consistent login experience, strong password policies, brute-force protection, and seamless integration for new portals within the platform.",
  tags: ["Vue.js", "Vuetify", "Authentication", "Identity Provider", "OAuth"],
  image: "/gsurf/gmac-login.png",
  galleryImages: [
    "/gsurf/gmac-login.png",
    "/gsurf/password-recovery.png"
  ],
  role: 'Frontend Engineer, Tech Lead',
  roleDescription:
    'Worked as a Senior Frontend Engineer, acting as Tech Lead and Frontend Manager, responsible for leading the frontend architecture, mentoring developers, and coordinating the development team.',
  responsibilities: [
    'Led the frontend architecture using Vue.js',
    'Implemented frontend features',
    'Mentored junior and mid-level developers',
    'Acted as Tech Lead for frontend development',
    'Coordinated frontend team tasks and deliveries',
    'Reviewed pull requests and enforced code standards',
    'Collaborated with backend, QA and product teams',
    'Managed project priorities and technical decisions',
    'Implemented CI/CD pipeline for frontend deployment'
  ],
};