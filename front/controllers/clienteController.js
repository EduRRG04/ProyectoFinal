const mysql = require('../db/mysql');
module.exports = {
    buscar: (req, res) => {
        mysql.query('SELECT * FROM clientes WHERE id=?', req.params.id, (error, resuts, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    },

    crear: (req, res) => {
        mysql.query("INSERT INTO contacto (nombre, apellido,telefono) VALUES (?,?,?)", [req.body.nombre, req.body.apellido, req.body.telefono], (err, results, fields) => {
            if (err) {
                res.json(err);
            } else {
                console.log(results)
                res.json(results);
                for (let i = 0; i < req.body.depends.lenght; i++) {
                    mysql.query("INSERT INTO clientes (nombre, apellido, telefono) VALUES (?,?.?)", [req.body.nombre, req.body.apellido, req.body.telefono, req.results.insertId],
                        (err, results, fields));
                    if (err) {
                        res.json(err);
                    } else {
                        console.log(results);
                    }
                }
                res.json({ msg: "Se agregó el cliente" })
            }
        })

    },

    borrar: (req, res) => {
        mysql.query('delete from clientes WHERE id=?', req.params.id, (err, results, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    },

    listar: (req, res) => {
        mysql.query('SELECT * FROM clientes', req.params.id, (error, resuts, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    }
}