import { UpdateProjectDto } from "src/modules/project/dto/project-dto";
import { UpdateUserDto } from "src/modules/users/dto/user-dto";

export class DepartBase {
  name?: string;
  responsable?: UpdateUserDto;
}
export class CreateDepartDto extends DepartBase {
}
export class UpdateDepartDto extends DepartBase {
  _id?: string;
}