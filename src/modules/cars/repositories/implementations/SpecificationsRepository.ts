import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRpository } from "../ISpecificatiosRepository";


class SpecificationsRepository implements ISpecificationsRpository{
  private specifications: Specification[];

  constructor(){
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
  
  findByName(name: String): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }
}

export { SpecificationsRepository };