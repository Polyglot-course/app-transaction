const transactionRepository = require('../repositories/transaction.repository')
const messagesAsync = require('../middlewares/messagesasync')
 
const transactionService = {
    addTransaction: async (amount, accountId, type) => {
        const message = await transactionRepository.addTransaction(amount, accountId, type)
        messagesAsync.send(message.id, accountId, amount, type)
        console.log(message)
        return message
    }
}
 
module.exports = transactionService