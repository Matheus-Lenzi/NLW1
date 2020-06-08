// import the dependeci of sqlite3
const sqlite3 = require("sqlite3").verbose()

// create the database object
const db = new sqlite3.Database("./src/database/database.db")

// using the db
// db.serialize(() => {
    // create a sheet with sql code
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // input a datas
    // const query = `
    //     INSERT INTO places (
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]
    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com Sucesso!")
    //     console.log(this)
    // }
    // db.run(query, values, afterInsertData)

    // consult a data from sheet
    // db.all(`SELECT * FROM places`, function(err,rows) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros!")
    //     console.log(rows)
    // })

    //delete a data
    // db.run(`DELETE FROM places WHERE id = ?`, [7], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
// })
module.exports = db