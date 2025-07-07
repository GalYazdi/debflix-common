import { BaseEntity } from "./base";
import { Category } from "./category";

export interface Movie extends BaseEntity {
  title: string;
  year: number;
  director: string;
  rating: number;
  likes: number;
  categories: Category[]
}
