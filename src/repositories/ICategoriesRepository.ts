import { Category } from "../model/category";


interface ICategoriesRepository {
  findByname(name: String): Category;
  list(): Category[];
  create(name: String, description: String): void;
}

export { ICategoriesRepository }