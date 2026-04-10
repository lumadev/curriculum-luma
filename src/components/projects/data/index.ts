import { Project } from "./projectTypes";

import { musicProject } from "./personal/musicProject";
import { merchantProject } from "./gsurf/merchantProject";
import { mundoSenaiDocenteProject } from "./senai/mundoSenaiDocenteProject";
import { sc3Project } from "./gsurf/sc3Project";
import { notifeyeProject } from "./icarus/notifeyeProject";
import { senaiItinerariosProject } from "./senai/senaiItinerariosProject";
import { gmacProject } from "./gsurf/gmacProject";
import { adminProject } from "./gsurf/adminProject";
import { realEstateProject } from "./icarus/realEstateProject";
import { cinepediaProject } from "./personal/cinepediaProject";
import { checkoutProject } from "./gsurf/checkoutProject";
import { ecommerce3dProject } from "./personal/ecommerce-3d";

export const projectsData: Project[] = [
  musicProject,
  ecommerce3dProject,
  merchantProject,
  checkoutProject,
  mundoSenaiDocenteProject,
  sc3Project,
  notifeyeProject,
  senaiItinerariosProject,
  gmacProject,
  adminProject,
  realEstateProject,
  cinepediaProject,
];
