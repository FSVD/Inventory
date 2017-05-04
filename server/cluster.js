var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('Process ' + worker.process.pid + ' killed');
  });
} else {
    // Application access point.
    require("./bin/www");
}