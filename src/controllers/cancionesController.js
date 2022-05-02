const db = require('../database/models');
const sequelize = db.sequelize;


const musicController = {
    'list': (req, res) => {
        db.Cancion.findAll()
            .then(genres => {
                res.render('musicList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('musicDetail.ejs', {genre});
            });
    }

}

module.exports = musicController;