import { Base } from "./base";

export interface Movie extends Base{
  title: string;
  year: number;
  director: string;
  rating: number;
  likes: number;
  categories: string[]
}
