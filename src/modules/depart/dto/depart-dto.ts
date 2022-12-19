import { UpdateCollabDto } from "src/modules/collaborator/dto/collab-dto";
import { UpdateProjectDto } from "src/modules/project/dto/project-dto";
import { UpdateSocietyDto } from "src/modules/society/dto/society-dto";

export class DepartBase {
  name?: string;
  responsable?: UpdateCollabDto;
  society?: UpdateSocietyDto;
  project?: UpdateProjectDto[];
}
export class CreateDepartDto extends DepartBase {
}
export class UpdateDepartDto extends DepartBase {
  _id?: string;
}