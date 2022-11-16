import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest{
  name: String;
  description: String;
}

class CreateCategoryUserCase {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({ name, description }: IRequest): void{
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Categoty already exists!");
    }
  
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUserCase };