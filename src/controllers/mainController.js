const fs = require('fs');
const path = require('path');
const jsonTable = require('../data/musicando.sql');

const groupsModel = jsonTable('music');

const { spawnSync } = require('child_process');
    
function files(command, arg, path) {
    const ls = spawnSync(command, [arg, path], { encoding: 'utf8' });
    return ls.stdout;
};


var ej = files("___dirname", "", '/data/musicando.sql');
console.log("eje => " + ej);


module.exports = {
    index: (req, res) => {

        let groups = groupsModel.all()

        res.render('./app.js',  { groups });
    },
    create: (req, res) => {
        res.render('music/create');
    },
    store: (req, res) => {

        let group = req.body;

        groupId = groupsModel.create(group);

        res.redirect('/data/musicando.sql' + groupId);
    },
    edit: (req, res) => {
        let group = groupsModel.find(req.params.id)
        let categories = categoriesModel.all();

        res.render('/data/musicando.sql/edit', { group, categories });
    },
    update: (req, res) => {
        let group = req.body;

        group.id = req.params.id;

        groupId = groupsModel.update(group);

        res.redirect('/data/musicando.sql' + groupId)
    },
    show: (req, res) => {
        let group = groupsModel.find(req.params.id);

        res.render('/data/musicando.sql/detail', { group });
    },
    destroy: (req, res) => {

        let group = groupsModel.find(req.params.id);
        let imagePath = path.join(__dirname, '../public/img/' + group.image);
        
        groupsModel.delete(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        res.redirect('/data/musicando.sql')
    },
    search: (req, res) => {
        
        // Traigo todos los grupos

        // Filtro los grupos

        // Envío los grupos y lo que busco el usuario a la vista

        res.render('/data/musicando.sql/search', {});
    },
}