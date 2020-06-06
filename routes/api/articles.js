const express = require('express');
const router = express.Router();
let Article = require("../../models/article.model")

/**
 * @baseURI - /api/articles
 */
router.get('/', async (req, res) => {
    console.log(`Getting a new GET request`)
    let query = Article.find({}, {}, {
        sort: {
            createdAt: -1
        }
    });
    query.exec((err, arties) => {
        if (!err)
            res.json(arties);
        else 
            console.error(err);
    })

})

router.get('/:id', async (req, res) => {
    console.log(`GETTING a single article`);
    let query = Article.findById(req.params.id);
    query.exec((err, article) => {
        if (!err)
            res.json(article)
        else 
            console.error(err)
    })
})


router.post('/', (req, res) => {
    console.log(`Getting a POST request`);
    let newArtie = new Article(req.body);
    newArtie.save(err => {
        if (err) {
            console.error(err)
        } else {
            res.json(newArtie);
        }
    });
})


module.exports = router;