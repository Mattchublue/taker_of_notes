const router=require("express").Router()
const fs=require("fs")
let dbjson=require("../db/db.json")

router.get("/notes", (req, res) => {
dbjson=JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
res.json(dbjson)
})

