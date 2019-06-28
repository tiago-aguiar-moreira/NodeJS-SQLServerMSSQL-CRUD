'use strict';

const sql = require('mssql')
const db = require('./db');

function findAll(callback) {
    db.connect().then(pool => {
        return pool.request().query('select * from persons');
    })
    .then(data => callback(data))
    .catch(err => console.log('erro! ' + err));
};

function findById(id, callback) {
    db.connect().then(pool => {
        return pool.request()
            .input('input_parameter', sql.Int, id)
            .query('select * from persons where personid = @input_parameter');
    })
    .then(data => callback(data))
    .catch(err => console.log('erro! ' + err));
};

module.exports = {
    findById: findById,
    findAll: findAll
};