import { Base } from "./base";
import { Movie } from "./movie";

export interface Actor extends Base{
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  movies?: Movie[];
}
