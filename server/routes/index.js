function http() {
    this.configure = function(app) {
        
        app.get('/', function(req, res){
            res.render('index', { title: 'Inventory-API' });
        })
    }
}

module.exports = new http();