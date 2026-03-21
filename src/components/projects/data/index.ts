import { Project } from "./projectTypes";

import { musicProject } from "./personal/musicProject";
import { merchantProject } from "./gsurf/merchantProject";
import { mundoSenaiDocenteProject } from "./senai/mundoSenaiDocenteProject";
import { notifeyeProject } from "./icarus/notifeyeProject";
import { senaiItinerariosProject } from "./senai/senaiItinerariosProject";
import { gmacProject } from "./gsurf/gmacProject";
import { adminProject } from "./gsurf/adminProject";
import { realEstateProject } from "./icarus/realEstateProject";
import { cinepediaProject } from "./personal/cinepediaProject";

export const projects: Project[] = [
  musicProject,
  merchantProject,
  mundoSenaiDocenteProject,
  notifeyeProject,
  senaiItinerariosProject,
  gmacProject,
  adminProject,
  realEstateProject,
  cinepediaProject
];
