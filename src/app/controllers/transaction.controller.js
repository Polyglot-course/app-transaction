const logProvider = require('../middlewares/logprovider')
const transactionService = require('../services/transaction.services')

const addDeposit = async (req, res) => {
    logProvider.info('Add Deposit');
    const { amount, accountId } = req.body
    return res.status(200).send(await transactionService.addTransaction(amount, accountId, 'deposit'))
}

const addWithdrawal = async (req, res) => {
    const { amount, accountId } = req.body
    return res.status(200).send(await transactionService.addTransaction(amount, accountId, 'withdrawal'))
}

module.exports = { addDeposit, addWithdrawal }