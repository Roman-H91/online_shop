const itemDb = require("../db")

class ItemController {

    async createItem(req: any, res: any) {
        try {
            const {type, title, photo, info, price, date} = req.body
            const newItem = await itemDb.query(`INSERT INTO "product" (type, title, photo, info, price, date) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [type, title, photo, info, price, date])
            res.json(newItem.rows[0])
        } catch (err) {
            console.log(err)
        }
    }

    async getItems(req: any, res: any) {
        try {
            const items = await itemDb.query(`SELECT * FROM "product"`)
            res.json(items.rows)
        } catch (err) {
            console.log(err)
        }
    }

    async getOneItem(req: any, res: any) {
        try {
            const id = req.params.id
            const item = await itemDb.query(`SELECT * FROM "product" WHERE id = $1`, [id])
            res.json(item.rows[0])
        } catch (err) {
            console.log(err)
        }
    }

    async updateItem(req: any, res: any) {
        try {
            const {id, type, title, photo, info, price, date} = req.body
            const item = await itemDb.query(`UPDATE "product" SET type = $2, title = $3, photo = $4, info = $5, price = $6, date = $7 WHERE id = $1 RETURNING *`, [id, type, title, photo, info, price, date])
            res.json(item.rows[0])
        } catch (err) {
            console.log(err)
        }
    }

    async deleteItem(req: any, res: any) {
        try {
            const id = req.params.id
            const item = await itemDb.query(`DELETE FROM "product" WHERE id = $1`, [id])
            res.json(item.rows[0])
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new ItemController()


