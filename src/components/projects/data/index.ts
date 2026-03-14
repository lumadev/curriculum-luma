import { Project } from "./projectTypes";

import { musicProject } from "./musicProject";
import { merchantProject } from "./merchantProject";
import { realEstateProject } from "./realEstateProject";
import { senaiItinerariosProject } from "./senaiItinerariosProject";
import { mundoSenaiDocenteProject } from "./mundoSenaiDocenteProject";

export const projects: Project[] = [
  musicProject,
  merchantProject,
  senaiItinerariosProject,
  mundoSenaiDocenteProject,
  realEstateProject
];
