const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const hbs = require("hbs");
const collection = require("./mongodb");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const tempelatePath = path.join(__dirname, '../tempelates');
const rootPath = path.join(__dirname, '../');

app.set('view engine', 'hbs');
app.set('views', tempelatePath);
app.use(express.urlencoded({ extended: false }));

app.use(express.static(rootPath));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.get('/session', (req, res) => {
    res.json({ user: req.session.user || null });
});

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    };

    await collection.insertMany([data]);
    req.session.user = data;

    const redirectTo = req.session.redirectTo || '/about';
    delete req.session.redirectTo;
    res.redirect(redirectTo);
});

app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name });

        if (check && check.password === req.body.password) {
            req.session.user = { name: check.name }; // Store user details in session

            const redirectTo = req.session.redirectTo || '/about';
            delete req.session.redirectTo;
            res.redirect(redirectTo);
        } else {
            res.send("Incorrect password");
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

app.get('/logout', (req, res) => {
    const redirectTo = req.headers.referer || '/about';
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Failed to log out");
        }
        res.redirect(redirectTo);
    });
});

app.get('/signup', (req, res) => {
    // Only set redirectTo if it doesn't already exist
    if (!req.session.redirectTo || req.session.redirectTo === '/login') {
        req.session.redirectTo = req.headers.referer || '/';
    }
    res.render('signup');
});

app.get('/login', (req, res) => {
    // Only set redirectTo if it doesn't already exist
    if (!req.session.redirectTo || req.session.redirectTo === '/signup') {
        req.session.redirectTo = req.headers.referer || '/';
    }
    res.render('login');
});


app.get('/about', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(rootPath, 'about.html'), { user: req.session.user });
    } else {
        res.sendFile(path.join(rootPath, 'about.html'));
    }
});

app.get('/', (req, res) => {
    res.render('login');
});

app.listen(3000, () => {
    console.log("port connected");
});
