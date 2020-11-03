### Exercício 1
a) VARCHAR(255) - cria colunas que aceitam strings com até 255 caracteres.
PRIMARY KEY - mostra que aquela coluna receberá dadaos indentificadores.
NOT NULL - campo que deve ser sempre preenchido.
DATE - aceita dados no formato de data.
VARCHAR(6) - strings de até 6 caracteres.

b) SHOW DATABASES - mostra as bases de dados disponíveis. 
SHOW TABLES - mostra tabelas já criadas

c) DESCRIBE - resumo das caracteristicas da tabela. Para cada campo, indica tipo, o tipo de key, se é null ou não e o valor atribuído.

### Exercício 2

a) Novo ator:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002", 
    "Gloria Pires", 
    1200000, 
    "1963-08-23", 
    "female"
);
```

b) Error Code: 1602. Duplicate entry '002' for key 'PRIMARY'. Acontece porque definimos o id como único ao usar PRIMARY KEY, então não pode existir outro id igual. 

c) Error Code: 1136. Column count doesn't match value count at row 1.  Acontece porque a quantidade de colunas passadas entre parenteses não é a mesma quantidade de valores fornecidos para inserção de um novo ator. Demos nomes para 3 campos, mas tentamos passar 5 valores. Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "003", 
    "Fernanda Montenegro", 
    300000, 
    "1929-10-19", 
    "female"
);
```

d) Error Code: 1364. Field 'name'doesn't have a default value. Falta um dado na coluna. Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "004", 
    "Antonio Fagundes", 
    400000, 
    "1948-04-18", 
    "male"
);
```

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. Erro mostra que a data está errada. Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "005", 
    "Juliana Paes", 
    719333.33, 
    "1979-03-26", 
    "female"
);
```

e) Query criada: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "006", 
    "Murilo Benicio", 
    700000, 
    "1977-05-24", 
    "male"
);
```

### Exercício 3

a) Resposta:
```
SELECT * FROM Actor WHERE gender = "female";
```

b) Resposta:
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c) Nenhuma linha foi retornada. Resposta:
```
SELECT * from Actor WHERE gender = "invalid";
```

d) Resposta:
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```

e) Error Code: 1054. Unknown column 'nome' in 'field list'. A coluna nome não existe. Correção: 
```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 4

a) A query seleciona as colunas da tabela cujos nomes começam com A ou J e ganham mais de 300.000.

b) Resposta:
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) Resposta:
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

d) Resposta:
```
SELECT * FROM Actor
WHERE 
    (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
    AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a) A tabela MOVIE terá um id em formato string como chave primária, um título (title) em formato string com restrição UNIQUE para garantir que não haverá outro item com mesmo título, sinopse (synopsis) em formato texto, que suporta até 65 mil caracteres, lançamento em formato YYYY-MM-DD e classificação em formado numero inteiro. Todos os campos serão obrigatórios.
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

b)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
);
```

c)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

### Exercício 6

a)
```
SELECT id, title, rating FROM Movie WHERE id = "004";
```

b)
```
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
```

c)
```
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
```

### Exercício 7

a)
```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```


b)
```
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
```


c)
```
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";
```


d)
```
SELECT * FROM MOVIE
WHERE release_date < CURDATE() AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
```




1. Bleus
2. Blius
3. Blos

b) Isso está errado, pelos motivos:
* Óbvio
* Sem dúvida