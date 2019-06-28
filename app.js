'use strict';

const select = require('./select_examples');

select.findAll(function(result) {
   result.recordset.forEach(element => console.log(element));
});