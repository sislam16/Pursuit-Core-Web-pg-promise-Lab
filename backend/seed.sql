DROP DATABASE class_db;
CREATE DATABASE class_db;

\c class_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    firstname VARCHAR, 
    lastname VARCHAR, 
    age INT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id), 
    body VARCHAR

);

-- likes table
CREATE TABLE likes(
   id SERIAL PRIMARY KEY, 
   liker_id INT REFERENCES users(id),
   post_id INT REFERENCES posts(id)
);


-- adding values

INSERT INTO users (firstname, lastname, age)
VALUES ('Marlee', 'Roman',29),
        ('Kelly', 'Costigan', 32),
        ('Aissatou', 'Barry', 24);

INSERT INTO posts(poster_id, body)
VALUES (1, 'Can you do me a favor?'), (2, 'I did a thing'), (2, 'Moving to ATL'), (3, 'I have big news coming soon!');


SELECT * FROM users;
select * FROM posts;