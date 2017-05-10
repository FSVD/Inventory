var dbConnection = require('../config/db_development');
var jwt = require('jsonwebtoken');

function dbMethods() {
    this.selectProducts = function(res) {
        dbConnection.getDbConnection(function(error, connection){
            connection.query('SELECT * FROM product', function(err, result){
                connection.release();
                if (err) {
                    res.send({state: "Something goes wrong!"});
                } else {
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
                    res.send({state: "Something goes wrong!"});
                } else {
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
                    res.send({state: "Something goes wrong!"});
                } else {
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
                    res.send({state: "Something goes wrong!"});
                } else {
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
                    res.send({state: "Something goes wrong!"});
                } else {
                    res.send({state: "Product deleted!"});
                }
            })
        })
    }

    this.login = function(data, res) {
        dbConnection.getDbConnection(function(error, connection){
            connection.query('SELECT * FROM user WHERE username=? AND password=?', [data.username, data.password], function(err, result){
                connection.release();
                if (err) {
                    res.send("Something goes wrong!");
                } else {
                    if (result.length == 0) {
                        console.log("Incorrect credentials!");
                        res.send("No user found");
                    } else {
                        var authorizationKey = jwt.sign({
                            user: data.username,
                            role: 'administrator'
                        }, 'show me the way', {expiresIn: '300s'});
                        res.send(authorizationKey);
                    }
                }
            })
        })
    }
}

module.exports = new dbMethods();