const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const fetch = require('node-fetch');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Canciones = db.Cancion;
const Genres = db.Genre;
const Artistas = db.Artista;
//const API = 'http://www.omdbapi.com/?apikey=d4e35e92';

const musicController = {
    'list': (req, res) => {
        db.Music.findAll({
            include: ['genre']
        })
            .then(music => {
                res.render('musicList.ejs', {music})
            })
    },
    'detail': (req, res) => {
        db.musicando.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(music => {
                res.render('musicDetail.ejs', {music});
            });
    },
    'new': (req, res) => {
        db.Music.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(music => {
                res.render('newestMusic', {music});
            });
    },
    'recomended': (req, res) => {
        db.Music.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(music => {
                res.render('recommendedMusic.ejs', {music});
            });
    },
    //Aqui debo modificar para crear la funcionalidad requerida
    'buscar': (req, res) => {
        
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genres.findAll();
        let promArtistas = Artista.findAll();
        
        Promise
        .all([promGenres, promArtistas])
        .then(([allGenres, allArtista]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'musicAdd'), {allGenres, allArtista})})
        .catch(error => res.send(error))
    },
    create: function (req,res) {
        Musica
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(()=> {
            return res.redirect('/music')})            
        .catch(error => res.send(error))
    },
    edit: function(req,res) {
        let MusicId = req.params.id;
        let promMusic = Music.findByPk(movieId,{include: ['genre','artista']});
        let promGenres = Genres.findAll();
        let promArtistas = Artista.findAll();
        Promise
        .all([promMusic, promGenres, promArtistas])
        .then(([Music, allGenres, allArtistas]) => {
            Music.release_date = moment(Music.release_date).format('L');
            return res.render(path.resolve(__dirname, '..', 'views',  'musicEdit'), {Music,allGenres,allArtistas})})
        .catch(error => res.send(error))
    },
    update: function (req,res) {
        let musicId = req.params.id;
        Music
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: musicId}
            })
        .then(()=> {
            return res.redirect('/music')})            
        .catch(error => res.send(error))
    },
    delete: function (req,res) {
        let musiId = req.params.id;
        Movies
        .findByPk(musicId)
        .then(Music => {
            return res.render(path.resolve(__dirname, '..', 'views',  'musicDelete'), {Music})})
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let musicId = req.params.id;
        Music
        .destroy({where: {id: musicId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/music')})
        .catch(error => res.send(error)) 
    }
}

module.exports = musicController;