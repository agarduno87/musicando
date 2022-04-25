const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Canciones = db.Cancion;
const Genres = db.Genre;
const Artistas = db.Artista;
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const genresAPIController = {
    'list': (req, res) => {
        db.Genre.findAll()
        .then(genres => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: genres.length,
                    url: 'api/genres'
                },
                data: genres
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: '/api/genre/:id'
                    },
                    data: genre
                }
                res.json(respuesta);
            });
    },
    'genreMusic': (req, res) => {
        db.Genre.findByPk(req.params.id,{
            include: ['music']
        })
            .then(genre => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: '/api/genre/:id/music'
                    },
                    data: genre
                }
                res.json(respuesta);
            });
    }
}

module.exports = genresAPIController;