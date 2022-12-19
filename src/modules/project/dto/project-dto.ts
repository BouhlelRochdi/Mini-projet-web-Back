import { UpdateSocietyDto } from "src/modules/society/dto/society-dto";

export class ProjectBase {
  name?: string;
  client?: string;
  society?: UpdateSocietyDto;
}
export class CreateProjectDto extends ProjectBase {
}
export class UpdateProjectDto extends ProjectBase {
  _id?: string;
}