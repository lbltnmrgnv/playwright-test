import { Pet } from "./types";
import * as faker from 'faker';

export function pet(): Pet {
    return {
        id: faker.datatype.number(),
        category: {
            id: faker.datatype.number(),
            name: faker.animal.dog()
        },
        name: faker.name.findName(),
        prhotoUrls: ['https://images.dog.ceo/breeds/rottweiler/n02106550_3886.jpg'],
        tags: [{
            id: faker.datatype.number(),
            name: faker.name.findName()
        }],
        status: 'processing'
    }
}