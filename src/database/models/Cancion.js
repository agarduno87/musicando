module.exports = (sequelize, dataTypes) => {
    let alias = 'Cancion'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        titulo: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        duracion: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        created_at: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        updated_at: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        genero_id: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        album_id: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        artista_id: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Cancion = sequelize.define(alias,cols,config);

    // Movie.associate = function (models) {
    //     Movie.belongsTo(models.Genre, { // models.Genre -> Genres es el valor de alias en genres.js
    //         as: "genre",
    //         foreignKey: "genre_id"
    //     })

    //     Movie.belongsToMany(models.Actor, { // models.Actor -> Actors es el valor de alias en actor.js
    //         as: "actors",
    //         through: 'actor_movie',
    //         foreignKey: 'movie_id',
    //         otherKey: 'actor_id',
    //         timestamps: false
    //     })
    // }

    return Cancion
};