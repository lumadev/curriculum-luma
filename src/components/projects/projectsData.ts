export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    title: "Music Lesson Scheduler",
    description:
      "Application created to simplify class replacement management for music teachers.",
    fullDescription:
      "Application created to help music teachers manage students, " +
      "class replacements, and lesson organization in a centralized and intuitive interface. " +
      "The system improves scheduling control, tracks student progress through assigned songs, " +
      "and keeps event dates organized — all in one place. " +
      "It is fully responsive, providing a seamless experience across desktop, tablet, and mobile devices.",
    tags: ["React", "Node.js", "Express.js"],
    image: "/makeupProject/makeups-login.png",
    galleryImages: [
      "/makeupProject/makeups-list.png",
      "/makeupProject/initial-page.png",
    ],
  },
];
