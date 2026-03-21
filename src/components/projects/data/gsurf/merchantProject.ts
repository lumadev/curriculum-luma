import { Project } from "../projectTypes";

export const merchantProject: Project = {
  title: "Merchant Portal",
  description:
    "Web application for merchants to manage payments, receivables, and financial operations in one platform.",
  fullDescription:
    "Web application developed to provide merchants with a complete platform for managing financial and operational payment transactions. " +
    "The system allows sales tracking, receivables scheduling, refund management, payment link generation, and terminal control. " +
    "Integrated into the GSurf ecosystem, the portal communicates with authentication, transaction, and settlement microservices, " +
    "replacing manual and fragmented processes with a centralized and intuitive dashboard. " +
    "It supports multi-language, role-based permissions, and advanced reports, serving both small businesses and large retail networks.",
  tags: ["Vue.js", "Vuetify", "Fintech"],
  image: "/gsurf/login-merchant.png",
  galleryImages: [
    "/gsurf/logo.png"
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
    'Developed scalable and reusable UI components',
    'Implemented CI/CD pipeline for frontend deployment'
  ],
};
