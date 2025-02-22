const express = require('express')
const router = express.Router()

const { addDeposit,addWithdrawal } = require('../controllers/transaction.controller')

router.post('/deposit', addDeposit)
router.post('/withdrawal', addWithdrawal)

module.exports = router