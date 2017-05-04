var db = require('../repositories/products');

function http() {
    this.configure = function(app) {
        
        app.get('/product/', function(req, res){
            db.selectProducts(res);
        })

        app.get('/product/:id/', function(req, res){
            db.selectProductById(req.params.id, res);
        })

        app.post('/product/', function(req, res){
            db.insertProduct(req.body, res);
        })

        app.put('/product/', function(req, res){
            db.updateProduct(req.body, res);
        })

        app.delete('/product/:id/', function(req, res){
            db.deleteProduct(req.params.id, res);
        })
    }
}

module.exports = new http();