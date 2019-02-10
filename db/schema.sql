DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  eaten BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);