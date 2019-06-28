'use strict';

const sql = require('mssql');

sql.on('error', err => {
    console.log(err);
});

function connect() {
    let config = {
        user: 'sa',
        password: 'admin',
        server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
        database: 'NodeTestes'
    };

    return sql.connect(config);
};

module.exports = {
    connect: connect
};