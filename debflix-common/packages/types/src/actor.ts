import { BaseEntity } from "./base";
import { Movie } from "./movie";

export interface Actor extends BaseEntity {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  movies?: Movie[];
}
