const PORT = 3000;
const express = require('express')
const app = express()


app.use(express.static('Public'))
app.use('/styles', express.static(__dirname + 'Public/styles'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res)=>{
    res.render('index')
})

app.listen(PORT,()=>console.log("listening on port " + (PORT)))

