import { ISpecificationsRpository } from "../repositories/ISpecificatiosRepository";

interface IRequest {
  name: String,
  description: String,
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRpository){}
  execute({name, description}: IRequest): void{
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if(specificationAlreadyExists){
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };