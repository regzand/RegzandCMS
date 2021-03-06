var express		= require('express');
var bodyParser		= require('body-parser');
var cookieParser	= require('cookie-parser');

// local modules
var logger		= requireLocal('logger').getExpress("[http]".grey);

// creating server
var server = express();

// logger
server.use(logger);

// protocols
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// public router
var publicRouter = express.Router();
server.use(publicRouter);

// pre private router
var prePrivateRouter = express.Router();
server.use(prePrivateRouter);

// private router
var privateRouter = express.Router();
server.use(privateRouter);

// exports
module.exports = {
	express: server,
	publicRouter: publicRouter,
	prePrivateRouter: prePrivateRouter,
	privateRouter: privateRouter
};
