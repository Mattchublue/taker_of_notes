const router=require("express").Router()
const fs=require("fs")
let db=require("../db/db.json")

router.get("/notes", (req, res) => {
db=JSON.parse(fs.readFileSync("./db/db.json","utf8"))
res.json(db)
})


router.post("/notes", (req, res) => {
  let notetemplate={title:req.body.title, text: req.body.text, id: Math.floor(Math.random()*666)}  
db.push(notetemplate)

fs.writeFileSync("./db/db.json", JSON.stringify(db))
res.json(db)
})



module.exports=router