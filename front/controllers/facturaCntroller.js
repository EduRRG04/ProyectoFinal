const mysql = require('../db/mysql');
module.exports = {
    crear: (req, res) => {
        mysql.query('INSERT INTO facturas(cliente, vendedor, fecha, total) VALUES', req.body.cliente, req.body.vendedor, req.body.fecha, req.body.total, (error, results));
        if (!err) {
            let folio = results.insertId;
            req.body.prod;
            forEach(produtco => {
                mysql.query('INSERT INTO detallefactura (idfact, idprod, cantidad, costo) VALUES ' (folio, producto.id, producto.vendedor, producto.costo, producto.cantidad))(error, results);
                mysql.query('UPDATE productos SET cantidad=', cantidad,
                    producto.cantidad, 'WHERE id =',
                    producto.id)
            });
        }
    },
    listar: (req, res) => {
        mysql.query('SELECT FROM facturas', innerJoin = detallefacturas, 'on', facturas.id, (error, results));
        if (error) {
            console.log(error);
            return;
        } else {
            res.json(results);
        }
    },
    borrar: (req, res) => {
        mysql.query('DELETE FORM facturas', req.factura.id, (error, results));
        if (error) {
            console.log(error);
            return;
        } else {
            res.json(results);
        }
    },
    buscar: (req, res) => {
        mysql.query('SELECT * FROM facturas WHERE id=?', req.factura.id, (error, results));
        if (err) {
            console.log(error);
            return;
        } else {
            res.json(results);
        }
    }
}