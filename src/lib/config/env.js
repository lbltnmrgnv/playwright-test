require('dotenv').config()

module.exports = {
    urls: {
        base: process.env.BASE_URL,
        login: process.env.BASE_URL + 'login',
        pet_store: process.env.PET_STORE_URL,
        playwright: {
            apiDoc: process.env.PLAYWRIGHT_API_DOC_URL
        }
    },
    users: {
        root: {
            username: process.env.LOGIN,
            password: process.env.PASSWORD
        }
    }
}