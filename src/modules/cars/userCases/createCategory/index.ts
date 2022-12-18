import { CreateCategoryController } from "../../userCases/createCategory/CreateCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUserCase } from "./CreateCategoryUserCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUserCase = new CreateCategoryUserCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUserCase);

export { createCategoryController }

