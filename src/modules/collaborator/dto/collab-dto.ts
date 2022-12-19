import { UpdateDepartDto } from "src/modules/depart/dto/depart-dto";
import { UpdateProjectDto } from "src/modules/project/dto/project-dto";
import { UpdateSocietyDto } from "src/modules/society/dto/society-dto";

export class CollabBase {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  jobtitle?: string;
  photo?: string;
  cvLink?: string;
  adress?: string;
  phone?: string;
  birthdate?: Date;
  society?: UpdateSocietyDto;
  depart?: UpdateDepartDto;
  project?: UpdateProjectDto[];
}
export class CreateCollabDto extends CollabBase {
}
export class UpdateCollabDto extends CollabBase {
  _id?: string;
}