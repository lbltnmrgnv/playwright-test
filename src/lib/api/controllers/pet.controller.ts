import * as config from '../../config'
import { Pet } from '../../components/pet/types';
import { step } from '../../reporter'
import { BaseController } from './index'


export class PetController extends BaseController {
    constructor() {
        super(config.env.urls.pet_store + '/pet/', 'Pet')
    }
    @step((name) => `[${name} controller] POST request to /pet`)
    async create(pet: Pet) {
        return await this.request.POST('', {}, pet)
    }
}