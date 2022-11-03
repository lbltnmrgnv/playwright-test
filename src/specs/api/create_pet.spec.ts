import { PetController } from '../../lib/api/controllers/pet.controller'
import * as models from '../../lib/components/pet/model'
import { assert } from 'chai'
const pet = new PetController()

describe('Send POST request to /register', async () => {

    it('with valid params in request body', async () => {
        //Arrange
        const data = models.pet()

        //Act
        const res = await pet.create(data)

        //Assert
        assert(res.statusCode === 200, `Response status code (${res.statusCode}) do not eql 200`)
    })
})