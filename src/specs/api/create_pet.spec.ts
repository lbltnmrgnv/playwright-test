import { test, TestResponse, TestRequest } from '../../lib/fixtures/api.fixture'
import * as models from '../../lib/components/pet/model'
import { pet_schema } from '../../lib/components/pet/schemas'
import { step } from '../../lib/reporter'
import { headers } from '../../lib/api/headers'

test.describe('Send POST request to /register', async () => {

    test('with valid params in request body', async ({ petController, assertHelper }) => {
        //Arrange
        let request: TestRequest,
            response: TestResponse;  
        step('Arrange', () => {
            request.body = models.pet()
            request.headers = headers.default()
        })

        //Act
        step('Act', async () => {
            response = await petController.create(request)
        })

        //Assert
        step('Assert', () => {
            assertHelper
                .statusAssert(response, 200)
                .jsonSchemaValidation(response.body, pet_schema)
        })
    })
})