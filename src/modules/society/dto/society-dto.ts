export class SocietyBase {
  name?: string;
  email?: string;
  activity?: string;
  adress?: string;
  phone?: string;
  logo?: string;
  matFiscal?: string;
}
export class CreateSocietyDto extends SocietyBase {
}
export class UpdateSocietyDto extends SocietyBase {
  _id?: string;
}