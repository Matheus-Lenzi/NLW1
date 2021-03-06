const express = require("express")
const server = express()

// database
const db = require("./database/db")

// configure public folder
server.use(express.static("public"))

// be able to use req.body
server.use(express.urlencoded({ extended: true }))

// using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

// configure path for my api
// start page
// req: requisition
// res:answer
server.get("/", (req, res) => {
    return res.render("index.html")
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.post("/savepoint", (req, res) => {
        const query = `
        INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com Sucesso!")
        console.log(this)
        return res.render("create-point.html", {saved: true})
    }
    db.run(query, values, afterInsertData)
})

server.get("/search", (req, res) => {
    const search = req.query.search
    if(search == "") {
        return res.render("search-results.html", {total: 0})
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows) {
        if(err) {
            console.log(err)
            return res.send("Erro no Cadastro!")
        }
        const total = rows.length
        return res.render("search-results.html", {places: rows, total: total})
    })
})

// turn on the server
server.listen(3000)