CREATE DATABASE IF NOT EXISTS tasks_db;
USE tasks_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS tasks;

-- Create the tasks table
CREATE TABLE tasks (
    id int NOT NULL AUTO_INCREMENT,
    task_name varchar(255) NOT NULL,
    completed BOOL DEFAULT false,
    PRIMARY KEY (id)
);