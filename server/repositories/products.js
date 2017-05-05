var dbConnection = require('../config/db_development');

function dbMethods() {
    this.selectProducts = function(res) {
        dbConnection.getDbConnection(function(error, connection){
            connection.query('SELECT * FROM product', function(err, result){
                connection.release();
                if (err) {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Something goes wrong!"});
                } else {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send(result);
                }
            })
        })
    }

    this.selectProductById = function(id, res) {
        dbConnection.getDbConnection(function(error, connection){
            connection.query('SELECT * FROM product WHERE id=?', id, function(err, result){
                connection.release();
                if (err) {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Something goes wrong!"});
                } else {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send(result);
                }
            })
        })
    }

    this.insertProduct = function(data, res) {
        dbConnection.getDbConnection(function(error, connection){
            connection.query('INSERT INTO product SET ?', data, function(err, result){
                connection.release();
                if (err) {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Something goes wrong!"});
                } else {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Product inserted!"});
                }
            })
        })
    }

    this.updateProduct = function(data, res) {
        dbConnection.getDbConnection(function(error, connection){
            connection.query('UPDATE product SET ? WHERE id = ?', [data, data.id], function(err, result){
                connection.release();
                if (err) {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Something goes wrong!"});
                } else {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Product updated!"});
                }
            })
        })
    }

    this.deleteProduct = function(id, res) {
        dbConnection.getDbConnection(function(error, connection){
            connection.query('DELETE FROM product WHERE id = ?', id, function(err, result){
                connection.release();
                if (err) {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Something goes wrong!"});
                } else {
                    res.setHeader('Access-Control-Allow-Origin','*');
                    res.send({state: "Product deleted!"});
                }
            })
        })
    }
}

module.exports = new dbMethods();