import { Project } from "../projectTypes";

export const senaiItinerariosProject: Project = {
  title: "National Itineraries System",
  description:
    "Web system developed for managing national training itineraries, occupations, and technological areas.",
  fullDescription:
    "Web system developed for SENAI to manage the National Itineraries structure, allowing the administration of technological areas, occupations, itineraries, and related documents through a centralized interface. " +
    "The platform allows users to register and edit occupations, organize areas by industry sector, control system versions, and manage complementary documents used in the educational structure. " +
    "The system also provides dashboards, reports, approval flows, and user management, making it easier to maintain the official catalog of national itineraries. " +
    "Built as an internal administrative platform, the application focuses on organization, reliability, and ease of maintenance, providing a stable environment for managing large amounts of structured data.",
  tags: ["PHP", "PostgreSQL", "Education"],
  image: "/senai/login.png",
  galleryImages: [
    "/senai/dashboard.png",
    "/senai/occupation-registration.png"
  ],
  role: "Backend Developer",
  roleDescription:
    "Worked as a Backend Developer, responsible for setting up the initial project structure, developing backend features using Symfony, and designing the database architecture.",
  responsibilities: [
    "Set up the initial backend project structure",
    "Developed backend features using PHP and Symfony",
    "Designed database schema using PostgreSQL",
    "Integrated database using Doctrine ORM",
    "Created entities and relationships",
    "Implemented business rules on backend",
  ],
};
