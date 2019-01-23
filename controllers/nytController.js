var db = require('../models');
var axios = require('axios');

module.exports = {
    findAll: function (req, res) {
        const params = Object.assign(
            { api_key: "my key goes here" },
            req.query
        );
        axios
            .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params})
            .then(response => {
                db.Article.find()
                .then(
                    dbArticles =>
                            response.data.response.docs.filter(article =>
                                dbArticles.every(
                                    dbArticles => dbArticles._id.toString() !== article._id
                                ))
                    )
                    .then(articles => res.json(articles))
                    .catch(err => res.status(422).json(err))
            });
    }
};