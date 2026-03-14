import { Project } from "./projectTypes";

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
  tags: ["Vue.js", "Vuetify"],
  image: "/gsurf/login-merchant.png",
  galleryImages: [
    "/gsurf/logo.png"
  ],
};
