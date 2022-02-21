const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "eanl4i1omny740jw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "qh6w3j60pihz93no",
	password: "xvhll4qonee7b2ba",
	database: "uezpa201ev9kfuuq",
	multipleStatements: false,
	reconnect: true,
};
};

const dbConfigLocal = {
	host: "eanl4i1omny740jw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "qh6w3j60pihz93no",
	password: "xvhll4qonee7b2ba",
	database: "uezpa201ev9kfuuq",
	multipleStatements: false,
	reconnect: true,
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		
