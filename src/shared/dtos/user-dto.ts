export class UserBase {
  firstName?: string;
  lastName?: string;
  email?: string;
  adress?: string;
  phone?: string;
  cvLink?: string;
  photo?: string;

}
export class CreateUserDto extends UserBase {
}
export class UpdateUserDto extends UserBase {
  _id?: string;
}