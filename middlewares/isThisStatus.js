import defaultResponse from '../config/defaultResponse.js'

const states = {
    Pending: 'Pending',
    Proccessing: 'Proccessing',
    Shipped: 'Shipped',
    Delivered: 'Delivered',
    Completed: 'Completed',
    Canceled: 'Canceled',
}

async function isThisStatus(req, res, next) {
    try {
        let { statusOrder } = req.body
        if (statusOrder === 'Shipped') {
            next()
        } else {
            req.body.success = false
            req.body.sc = 400
            req.body.data = 'something went wrong'
            return defaultResponse(req, res)
        }
    } catch (error) {
        next(error)
    }
}

export default isThisStatus
