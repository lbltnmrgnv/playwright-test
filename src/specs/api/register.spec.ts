import { Register } from '../../lib/api/controllers/register.controller'
import { user } from '../../lib/components/register/user'
import { assert } from 'chai'
const register = new Register()

describe('Send POST request to /register', async () => {

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

    /*it('with valid params in request body2', async () => {
        //Arrange
        const registeredUser = user()
        registeredUser.confirmPassword = registeredUser.password

        //Act
        const res = await register.signUp(registeredUser)

        //Assert
        assert(res.statusCode === 200, ':( != 200')
        assert(res.body.message[0] === 'You have been successfully registered with us!', ':(')
    })

    it('with valid params in request body3', async () => {
        //Arrange
        const registeredUser = user()
        registeredUser.confirmPassword = registeredUser.password

        //Act
        const res = await register.signUp(registeredUser)

        //Assert
        assert(res.statusCode === 200, ':( != 200')
        assert(res.body.message[0] === 'You have been successfully registered with us!', ':(')
    })*/
})