import { Movie } from "./movie";
import { BaseEntity } from "./base";

export interface Category extends BaseEntity {
  name: string;
  description: string;
}
