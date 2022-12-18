import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUserCase } from "./listCategoriesUserCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUserCase = new ListCategoriesUserCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUserCase);

export { listCategoriesController };