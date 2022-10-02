require('dotenv').config()

module.exports = {
    urls: {
        base: process.env.BASE_URL,
        login: process.env.BASE_URL + 'login'
    },
    users: {
        root: {
            username: process.env.LOGIN,
            password: process.env.PASSWORD
        }
    }
}