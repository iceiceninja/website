const PORT = 3000;
const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('Public'))
app.use('/styles', express.static(__dirname + 'Public/styles'))


app.get('/', (req, res)=>{
    res.redirect('index')
})

app.get('/index', (req, res)=>{
    res.render('index')
})

app.get('/myWork', (req, res)=>{
    res.render('myWork')
})
app.get('/aboutMe', (req, res)=>{
    res.render('aboutMe')
})
app.get('/pricing', (req, res)=>{
    res.render('pricing')
})
app.listen(PORT,()=>console.log("listening on port " + (PORT)))

