const transactionRepository = require('../repositories/transaction.repository')


const transactionService = {
    addTransaction: async (amount, accountId, type) => {
        const id = await transactionRepository.addTransaction(amount, accountId, type)
        console.log(id)
        return id
    }
}

module.exports = transactionService