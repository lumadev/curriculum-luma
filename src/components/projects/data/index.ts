import { Project } from "./projectTypes";

import { musicProject } from "./personal/musicProject";
import { merchantProject } from "./gsurf/merchantProject";
import { notifeyeProject } from "./icarus/notifeyeProject";
import { realEstateProject } from "./icarus/realEstateProject";
import { senaiItinerariosProject } from "./senai/senaiItinerariosProject";
import { gmacProject } from "./gsurf/gmacProject";
import { mundoSenaiDocenteProject } from "./senai/mundoSenaiDocenteProject";
import { cinepediaProject } from "./personal/cinepediaProject";

export const projects: Project[] = [
  musicProject,
  merchantProject,
  notifeyeProject,
  senaiItinerariosProject,
  mundoSenaiDocenteProject,
  gmacProject,
  realEstateProject,
  cinepediaProject
];
