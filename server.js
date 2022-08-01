const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    //res.render('short_index', shortUrls)
    //res.render('index')
    res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
    let shortUrls = await ShortUrl.findOne({ full: req.body.fullUrl });
    
    if (shortUrls == null) {
    await ShortUrl.create({ full: req.body.fullUrl })
    shortUrls = await ShortUrl.find().sort({'_id':-1}).limit(1)
    console.log("Created URL", shortUrls)
    res.render('short_index', { shortUrls: shortUrls })
    //res.redirect('/')
    }
    else {
        console.log("Found URL", shortUrls)
        res.render('short_index', { shortUrls: [shortUrls] })  
    }
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
  
    res.redirect(shortUrl.full)
  })

app.listen(process.env.PORT || 8000);
