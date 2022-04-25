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
const actorsAPIController = {
    'list': (req, res) => {
        db.Artistas.findAll()
        .then(Artistas => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: actors.length,
                    url: 'api/artistas'
                },
                data: Artistas
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(Artista => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: actor.length,
                        url: '/api/artistas/:id'
                    },
                    data: artistas
                }
                res.json(respuesta);
            });
    },
    'actorMovies': (req, res) => {
        db.artista.findByPk(req.params.id,{
            include: ['artistas']
        })
            .then(actor => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: actor.length,
                        url: '/api/artistas/:id'
                    },
                    data: artistas
                }
                res.json(respuesta);
            });
    },
    create: (req,res) => {
        Artistas
        .create(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating,
                favorite_movie_id: req.body.favorite_movie_id
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/artistas/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/artistas/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let actorId = req.params.id;
        Actors.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating,
                favorite_movie_id: req.body.favorite_movie_id,
            },
            {
                where: {id: actorId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/artistas/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/artistas/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let actorId = req.params.id;
        Actors
        .destroy({where: {id: artistasId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/artistas/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/artistas/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = actorsAPIController;