const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
const collection = require("./mongodb")


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

const tempelatePath = path.join(__dirname, '../tempelates')
const rootPath = path.join(__dirname, '../'); // Path to the root directory

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.urlencoded({ extended: false }))

app.use(express.static(rootPath));

app.post('/signup', async (req, res) => {
    
    

    const data = {
        name: req.body.name,
        password: req.body.password
    }


    await collection.insertMany([data])

    res.status(201).sendFile(path.join(rootPath, 'about.html'));


})



app.post('/login', async (req, res) => {
    
    try {
        const check = await collection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).sendFile(path.join(rootPath, 'about.html'));
        }

        else {
            res.send("incorrect password")
        }


    } 


    catch{

        res.status(201).sendFile(path.join(rootPath, 'about.html'));
    
    }


})


app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login'); // Render the login.hbs page
});
app.get('/', (req, res) => {
    res.render('login')
})

app.listen(3000,()=>{
    console.log("port connected")
})