DROP DATABASE IF EXISTS recipeDB;
CREATE DATABASE recipeDB;
USE recipeDB;

CREATE TABLE recipes (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    ingredients VARCHAR(1000) NOT NULL,
    body VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ingredients (
    id INT AUTO_INCREMENT,
    list VARCHAR(1000),
    recipe_id INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);
    