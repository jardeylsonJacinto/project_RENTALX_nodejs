import { CreateCategoryController } from "../../userCases/createCategory/CreateCategoryController";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryUserCase } from "./CreateCategoryUserCase";

const categoriesRepository = new CategoriesRepository();

const createCategoryUserCase = new CreateCategoryUserCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUserCase);

export { createCategoryController }

