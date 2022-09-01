const { get_All_Assets } = require('./Controller/get_Assets')

const router = require('express').Router()

router.get('/', get_All_Assets)


module.exports = router
