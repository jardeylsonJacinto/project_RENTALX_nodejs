import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUserCase } from "./CreateSpecificationUserCase";


const specificationsRepository = new SpecificationsRepository();

const createSpecificationUserCase = new CreateSpecificationUserCase(specificationsRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUserCase);

export{ createSpecificationController };