import { UpdateDepartDto } from "src/modules/depart/dto/depart-dto";
import { UpdateUserDto } from "src/modules/users/dto/user-dto";

export class ProjectBase {
  name?: string;
  client?: string;
  society?: UpdateUserDto;
  depart?: UpdateDepartDto[];
}
export class CreateProjectDto extends ProjectBase {
}
export class UpdateProjectDto extends ProjectBase {
  _id?: string;
}