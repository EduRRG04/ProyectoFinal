const mysql = require('../node_modules/mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    port: '3306',
    datbase: 'proyctofinal',
});
mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Base de datos conectada');
    }
});

module.exports = mysqlConnection;