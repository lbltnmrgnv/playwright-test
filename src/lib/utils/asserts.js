const { assert, expect } = require('chai')
const chai = require('chai')
const { step } = require('../reporter')
chai.use(require('chai-json-schema'))

module.exports.AssertHelper = class AssertHelper {
    

    jsonSchemaValidation(response, schema) {
        expect(response).to.be.jsonSchema(schema)
        return this
    }

    /**
     * ы
     * @param {*} response 
     * @param {*} valueToCompare 
     * @returns 
     */
    statusAssert(response, valueToCompare) {
        step('Checking response code status', () => {
            assert(response.statusCode === valueToCompare, `Response status code (${response.statusCode}) do not eql ${valueToCompare}`)
        })
        return this
    }
}