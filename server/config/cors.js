function allowCrossDomain() {
    this.privileges = function(req, res, next) {
 
        var permittedDomains = [ // this is a list of permitted domains
            'http://127.0.0.1:4200'
        ];

        var domain = req.headers.origin;

        if (permittedDomains.indexOf(domain) >= -1) {
            res.setHeader('Access-Control-Allow-Origin', domain );
        }

        //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
        next();
    }

}

module.exports = new allowCrossDomain();