const expresss = require('express')
const app = expresss()

app.get('/', (req, res) => {
   res.send("ok google")
})


app.listen(2222)