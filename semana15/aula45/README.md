### Exercício 1

a) O comando APAGA a coluna salary.

b) O comando altera o nome da coluna para sex mantendo a quantidade de caracteres.

c) O comando altera a quantidade de caracteres aceito na coluna gender de 6 para 255.

d)  
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2

a) 
```
UPDATE Actor SET name = 'Novo Nome', birth_date = '1990-05-04' WHERE id = '003'
```

b)
```
UPDATE Actor SET name = 'JULIANA PÃES' WHERE name = 'Juliana Paes'
```

```
UPDATE Actor SET name = 'Juliana Paes' WHERE name = 'JULIANA PÃES'
```

c)
```
UPDATE Actor 
SET 
    name = 'Carolina Dieckmann',
    salary = 900000,
    birth_date = '1978-10-07',
    gender = 'female'
WHERE
    id = '005';
```

d) Usando um id inválido o comando é executada com sucesso mas não altera nada na tabela.

## Exercício 3

a) Query:
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) Query:
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```

## Exercício 4

a)
```
SELECT MAX(salary) FROM Actor
```

b)
```
SELECT MIN(salary) FROM Actor
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender = 'female'
```

d)
```
SELECT SUM(salary) FROM Actor
```

## Exercício 5

a) A query permite que os atores sejam agrupados por gênero.

b) 
```
SELECT id, name FROM Actor ORDER BY name DESC
```

c)
```
SELECT * FROM Actor ORDER BY salary DESC
```

d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3
```

e)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender
```

## Exercício 6

a)
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movie SET 
    playing_limit_date = '2019-06-29'
WHERE
    id = '001';
```
Query 2:
```
UPDATE MovievSET 
    playing_limit_date = '2020-12-07'
WHERE
    id = '002';
```

d) É executada mas 0 linhas são afetadas por ela.
```
DELETE FROM Movie WHERE id = "001"
```

## Exercício 7

a)
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

b) 
```
SELECT AVG(rating) FROM Movie;
```

c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d)
```
SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
```

e) Query:
```
SELECT MAX(rating) FROM Movie;
```

f) Query:
```
SELECT MIN(rating) FROM Movie;
```

## Exercício 8

a) 
```
SELECT * FROM Movie ORDER BY title;
```

b) 
```
SELECT * FROM Movie ORDER BY title LIMIT 5;
```

c) 
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d)
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;