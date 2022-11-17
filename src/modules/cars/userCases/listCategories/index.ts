import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUserCase } from "./listCategoriesUserCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUserCase = new ListCategoriesUserCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUserCase);

export { listCategoriesController };