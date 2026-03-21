import { Project } from "../projectTypes";

export const adminProject: Project = {
  title: "GSurf Admin Portal",
  description:
    "Internal backoffice portal for centralized management of partners, users, permissions, and payment ecosystem configuration.",
  fullDescription:
    "Administrative web portal used as the central backoffice of the GSurf payment ecosystem, responsible for managing partners, subacquirers, users, permissions, settlement routes, gateway integrations, and regulatory files. " +
    "The system provides a unified interface for configuring multiple partners, each with independent business rules, and access policies. " +
    "Administrators can configure payment modules, control user roles with granular permissions, manage card brands and acquirers, define settlement rules, upload regulatory files, and audit system events. " +
    "The portal integrates with authentication, transaction, settlement, and gateway microservices, allowing full control of the subacquiring infrastructure through a secure internal dashboard.",
  tags: [
    "Vue.js",
    "Vuetify",
    "Backoffice",
    "Fintech",
    "Payments",
    "Admin Portal",
    "RBAC",
    "Gateway"
  ],
  image: "/gsurf/admin-login.png",
  galleryImages: [
    "/gsurf/admin-login.png"
  ],
  role: 'Frontend Engineer, Tech Lead',
  roleDescription:
    'Worked as a Senior Frontend Engineer, acting as Tech Lead and Frontend Manager, responsible for leading the frontend architecture, mentoring developers, and coordinating the development team.',
  responsibilities: [
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