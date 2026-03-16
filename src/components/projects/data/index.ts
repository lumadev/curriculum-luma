import { Project } from "./projectTypes";

import { musicProject } from "./musicProject";
import { merchantProject } from "./merchantProject";
import { notifeyeProject } from "./notifeyeProject";
import { realEstateProject } from "./realEstateProject";
import { senaiItinerariosProject } from "./senaiItinerariosProject";
import { mundoSenaiDocenteProject } from "./mundoSenaiDocenteProject";
import { cinepediaProject } from "./cinepediaProject";

export const projects: Project[] = [
  musicProject,
  merchantProject,
  notifeyeProject,
  senaiItinerariosProject,
  mundoSenaiDocenteProject,
  realEstateProject,
  cinepediaProject
];
