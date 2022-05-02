const db = require('../database/models');
const sequelize = db.sequelize;


const albumController = {
    'list': (req, res) => {
        db.Album.findAll()
            .then(genres => {
                res.render('musicList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Album.findByPk(req.params.id)
            .then(genre => {
                res.render('musicDetail.ejs', {genre});
            });
    }

}

module.exports = albumController;