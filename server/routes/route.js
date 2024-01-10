const express = require("express");
const Mysql = require("mysql");

const router = express.Router()


const db = Mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Shawil12!",
    database: "CRUDDataBase"
})

router.post("/insert", (req, res) => {
    const Name = req.body.Name;
    const Age = req.body.Age;
    const Country = req.body.Country;
    const Address = req.body.Address;
    const sqlInsert = "INSERT INTO personal_info (Name ,Age,Country,Address) VALUES (?,?,?,?);";
    db.query(sqlInsert, [Name, Age, Country, Address], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
        }
    })
})

router.get("/get", (req, res) => {
    const sqlselect = "SELECT * FROM personal_info"
    db.query(sqlselect, (err, result) => {
        res.send(result)
    })
})
//get by id
router.get("/getById/:id", (req, res) => {
    const id = req.params.id
    const sqlId = "SELECT * FROM personal_info WHERE id = ?"
    db.query(sqlId, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
router.delete("/delete/:Name", (req, res) => {
    const name = req.params.Name;
    db.query("DELETE FROM personal_info WHERE Name = ?", name, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
});
router.put("/update/", (req, res) => {
    const name = req.body.Name;
    const country = req.body.Country;
    const sqlupdate = "UPDATE personal_info SET Country = ? WHERE Name = ?"
    db.query(sqlupdate, [country, name], (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})
module.exports = router