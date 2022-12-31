import { UpdateUserDto } from "src/modules/users/dto/user-dto";

export class ProjectBase {
  name?: string;
  client?: string;
  society?: UpdateUserDto;
}
export class CreateProjectDto extends ProjectBase {
}
export class UpdateProjectDto extends ProjectBase {
  _id?: string;
}