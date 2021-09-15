const userDb = require("../db")

class UserController {

    async createUser(req: any, res: any) {
        try {
            const {first_name, last_name, email, phone, date_of_birth, password} = req.body
            const newUser = await userDb.query(`INSERT INTO "user" (first_name, last_name, email, phone, date_of_birth, password, last_session) values ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`, [first_name, last_name, email, phone, date_of_birth, password])
            res.json(newUser.rows[0])
        } catch (err) {
            console.log(err)
        }
    }

    async getUsers(req: any, res: any) {
        try {
            const getUsers = await userDb.query(`SELECT * FROM "user"`)
            return res.json(getUsers.rows)
        } catch (err) {
            console.log(err)
        }
    }

    async updateUser(req: any, res: any) {
        try {
            const {id, first_name, last_name, email, phone, date_of_birth, password} = req.body
            const editUser = await userDb.query(`UPDATE "user" SET first_name = $2, last_name = $3, email = $4, phone = $5, date_of_birth = $6, password = $7 WHERE id = $1 RETURNING *`, [id, first_name, last_name, email, phone, date_of_birth, password])
            res.json(editUser.rows[0])
        } catch (err) {
            console.log(err)
        }
    }

    async deleteUser(req: any, res: any) {
        try {
            const id = req.params.id
            const delUser = await userDb.query(`DELETE FROM "user" WHERE id = $1`, [id])
            res.json(delUser.rows[0])
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new UserController()