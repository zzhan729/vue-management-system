

const res = require('express/lib/response');
const mysql = require('mysql')

const client  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'vue_ego',
    port: '4306'
})

function sqlFun(sql, arr, callback){
    client.query(sql, arr, function(error, result){
        if(error){
            console.log('SQL error');
            return;
        }
        callback(result)
    })
}

module.exports=sqlFun