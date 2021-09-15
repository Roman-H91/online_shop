const cartDb = require("../db")

class CartController {

    async createCart(req: any, res: any) {
        try {
            const {name, phone, address, orders, payment, price, date} = req.body
            const newCart = await cartDb.query(`INSERT INTO "order" (name, phone, address, orders, payment, price, date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name, phone, address, orders, payment, price, date])
            res.json(newCart.rows[0])
        } catch (err) {
            console.log(err)
        }
    }

    async getCart(req: any, res: any) {
        try {
            // const userId = req.query.id
            const getCart = await cartDb.query(`SELECT * FROM "order"`)
            res.json(getCart.rows)
        } catch (err) {
            console.log(err)
        }
    }

    async deleteOrder(req: any, res: any) {
        try {
            const id = req.params.id
            const item = await cartDb.query(`DELETE FROM "order" WHERE id = $1`, [id])
            res.json(item.rows[0])
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new CartController