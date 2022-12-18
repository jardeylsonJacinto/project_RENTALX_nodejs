import { Specification } from "../model/Specification";


interface ICreateSpecificationDTO {
  name: String;
  description: String;
}

interface ISpecificationsRpository{

  create({ name, description}: ICreateSpecificationDTO): void;
  findByName(name: String): Specification;
  
}

export { ICreateSpecificationDTO, ISpecificationsRpository };