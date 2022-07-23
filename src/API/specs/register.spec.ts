import { Register } from '../controller/register.controller'
import { user } from '../../data/models/user'
import { assert } from 'chai'
const register = new Register()

describe('Send request to /resgister route', async () => {

    before(async () => {

    })

    it('with valid params in request body', async () => {
        //Arrange
        const registeredUser = user()
        registeredUser.confirmPassword = registeredUser.password

        //Act
        const res = await register.signUp(registeredUser)

        //Assert
        assert(res.statusCode === 200, ':( != 200')
        assert(res.body.message[0] === 'You have been successfully registered with us!', ':(')
    })

})