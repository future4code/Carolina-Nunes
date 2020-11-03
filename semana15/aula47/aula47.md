### Exercício 1

a) Chave estrangeira refere-se às PRIMARY KEYs de uma tabela que são utilizadas em outras tabelas com o objetivo de criar uma relação entre elas.

b)
```
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating 
VALUES(
  "R001",
  "Filme excelente! Superou minhas expectativas!",
  10,
  "002"
  );
INSERT INTO Rating 
VALUES(
  "R002",
  "Porcaria total!",
  2,5,
  "003"
  );
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails... A operação não é permitida, pois não é possível adicionar ou atualizar um item filho.


d)
```
ALTER TABLE Movie DROP COLUMN rating
```

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails... A operação não é permitida, pois não é possível adicionar ou atualizar um item pai.


### Exercício 2

a) A tabela MovieCast se relaciona om a tabela Movie por meio da chave movie_id e também se relaciona com a tabela de atores através da chave actor_id. 

b)
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "002"
)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "002"
)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "003"
)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "001"
)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "003"
)
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails...


d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails... Existem filhos dependentes, enão não é possível adicionar ou atualizar um item pai.


### Exercício 3

a) Com essa query é possível filtrar filmes e avaliações correspondentes através da chave estrangeira id da tabela Movie e movie_id da tabela Rating. A condição é o ON se id de Movie for igual a movie_id de Rating.

b) 
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 4

a) 
```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b)
```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c)
```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

## Exercício 5

a) Há a necessidade de 3 JOIN uma vez que estamos juntando 3 tabelas diferentes. O primeiro JOIN une a primeira e a segunda tabelas e o segundo JOIN une a tabela que resultou do anterior com a terceira tabela.

b)
```
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) Error Code: 1054. Unknown column 'm' in 'field list'. 


d)
```
SELECT 
	m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### Exercício 6

a) É uma relação N:M que possibilita que vários filmes se relacionem com vários Oscares recebidos.

b) 
```
CREATE TABLE Oscar (
	oscar_name VARCHAR(255) NOT NULL,
    oscar_date DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id)
        REFERENCES Movie(id)
);
```

c)
```
INSERT INTO Oscar
VALUES(
  "Oscar de melhor roteiro",
  "2018-02-05",
  "003"
);
INSERT INTO Oscar
VALUES(
  "Oscar de melhor filme estrangeiro",
  "2015-02-05",
  "004"
);
```

d)