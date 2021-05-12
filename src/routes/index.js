const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('At Home...')
})

module.exports = routes